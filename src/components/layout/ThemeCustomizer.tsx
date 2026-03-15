'use client';

import { Palette, RotateCcw, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/config';

type ThemeColors = {
  bg: string;
  surface: string;
  card: string;
  primary: string;
  accent: string;
};

type ThemePreset = {
  id: string;
  label: string;
  colors: ThemeColors;
};

type ThemeCustomizerProps = {
  locale: Locale;
};

const storageKey = 'museum-theme-colors-v1';

const defaultTheme: ThemeColors = {
  bg: '#120e0b',
  surface: '#1f1712',
  card: '#2b2019',
  primary: '#9f1d20',
  accent: '#d6b26f'
};

const presets: ThemePreset[] = [
  { id: 'heritage', label: 'Heritage', colors: defaultTheme },
  {
    id: 'emerald',
    label: 'Emerald',
    colors: {
      bg: '#0d1511',
      surface: '#16231d',
      card: '#1f3028',
      primary: '#1d6e57',
      accent: '#8ed2b0'
    }
  },
  {
    id: 'sapphire',
    label: 'Sapphire',
    colors: {
      bg: '#0c1220',
      surface: '#151d34',
      card: '#212b49',
      primary: '#2f5fd8',
      accent: '#91b4ff'
    }
  },
  {
    id: 'amber',
    label: 'Amber',
    colors: {
      bg: '#171008',
      surface: '#24180d',
      card: '#332216',
      primary: '#a84d16',
      accent: '#efc27a'
    }
  }
];

const fieldLabels = {
  vi: {
    bg: 'Nền',
    surface: 'Surface',
    card: 'Card',
    primary: 'Primary',
    accent: 'Accent',
    title: 'Theme website',
    eyebrow: 'Tùy chỉnh màu',
    close: 'Đóng bảng tùy chỉnh màu',
    preset: 'Preset',
    reset: 'Mặc định',
    resetNote: 'Màu được lưu trên trình duyệt này.',
    toggle: 'Đổi màu',
    chooseColor: 'Chọn màu'
  },
  en: {
    bg: 'Background',
    surface: 'Surface',
    card: 'Card',
    primary: 'Primary',
    accent: 'Accent',
    title: 'Website theme',
    eyebrow: 'Theme controls',
    close: 'Close theme controls',
    preset: 'Presets',
    reset: 'Reset',
    resetNote: 'Colors are stored in this browser.',
    toggle: 'Theme',
    chooseColor: 'Choose color'
  }
} as const;

function hexToRgbChannels(hex: string) {
  const normalized = hex.replace('#', '');
  const fullHex =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : normalized;

  const red = Number.parseInt(fullHex.slice(0, 2), 16);
  const green = Number.parseInt(fullHex.slice(2, 4), 16);
  const blue = Number.parseInt(fullHex.slice(4, 6), 16);

  return `${red} ${green} ${blue}`;
}

function mixHex(firstHex: string, secondHex: string, ratio: number) {
  const left = hexToRgbChannels(firstHex).split(' ').map(Number);
  const right = hexToRgbChannels(secondHex).split(' ').map(Number);

  const mixed = left.map((value, index) => Math.round(value + (right[index] - value) * ratio));
  return `${mixed[0]} ${mixed[1]} ${mixed[2]}`;
}

function applyTheme(colors: ThemeColors) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;

  root.style.setProperty('--museum-bg', hexToRgbChannels(colors.bg));
  root.style.setProperty('--museum-surface', hexToRgbChannels(colors.surface));
  root.style.setProperty('--museum-card', hexToRgbChannels(colors.card));
  root.style.setProperty('--museum-primary', hexToRgbChannels(colors.primary));
  root.style.setProperty('--museum-accent', hexToRgbChannels(colors.accent));
  root.style.setProperty('--museum-line', mixHex(colors.surface, colors.accent, 0.26));
  root.style.setProperty('--museum-soft', mixHex('#ffffff', colors.accent, 0.2));
}

export function ThemeCustomizer({ locale }: ThemeCustomizerProps) {
  const [open, setOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState<ThemeColors>(defaultTheme);
  const labels = fieldLabels[locale];

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(storageKey);
      if (!storedValue) {
        applyTheme(defaultTheme);
        setIsReady(true);
        return;
      }

      const parsedTheme = JSON.parse(storedValue) as Partial<ThemeColors>;
      const nextTheme = { ...defaultTheme, ...parsedTheme };
      setTheme(nextTheme);
      applyTheme(nextTheme);
    } catch {
      applyTheme(defaultTheme);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;

    applyTheme(theme);
    window.localStorage.setItem(storageKey, JSON.stringify(theme));
  }, [isReady, theme]);

  const handleThemeChange = (key: keyof ThemeColors, value: string) => {
    setTheme((currentTheme) => ({
      ...currentTheme,
      [key]: value
    }));
  };

  const handleReset = () => {
    setTheme(defaultTheme);
    window.localStorage.removeItem(storageKey);
  };

  const fields: Array<{ key: keyof ThemeColors; label: string }> = [
    { key: 'bg', label: labels.bg },
    { key: 'surface', label: labels.surface },
    { key: 'card', label: labels.card },
    { key: 'primary', label: labels.primary },
    { key: 'accent', label: labels.accent }
  ];

  return (
    <div className="fixed bottom-5 left-4 z-[90] sm:left-5">
      {open ? (
        <div className="w-[min(calc(100vw-2rem),22rem)] rounded-[1.8rem] border border-white/10 bg-museum.surface/95 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-museum.accent">{labels.eyebrow}</div>
              <div className="mt-1 text-lg font-semibold text-white">{labels.title}</div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/10 bg-black/20 p-2 text-stone-200 transition hover:bg-black/35"
              aria-label={labels.close}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4">
            <div className="text-xs uppercase tracking-[0.22em] text-stone-400">{labels.preset}</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setTheme(preset.colors)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left transition hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border border-white/10" style={{ backgroundColor: preset.colors.primary }} />
                    <span className="h-4 w-4 rounded-full border border-white/10" style={{ backgroundColor: preset.colors.accent }} />
                    <span className="h-4 w-4 rounded-full border border-white/10" style={{ backgroundColor: preset.colors.card }} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">{preset.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {fields.map((field) => (
              <label
                key={field.key}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-black/15 px-3 py-2"
              >
                <span className="text-sm text-stone-200">{field.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.16em] text-stone-400">{theme[field.key]}</span>
                  <input
                    type="color"
                    value={theme[field.key]}
                    onChange={(event) => handleThemeChange(field.key, event.target.value)}
                    className="h-9 w-9 cursor-pointer rounded-full border border-white/10 bg-transparent"
                    aria-label={`${labels.chooseColor} ${field.label}`}
                  />
                </div>
              </label>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100 transition hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4" />
              {labels.reset}
            </button>
            <div className="text-xs text-stone-400">{labels.resetNote}</div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((currentValue) => !currentValue)}
        className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-museum.surface/90 px-4 py-3 text-sm font-medium text-white shadow-[0_14px_32px_rgba(0,0,0,0.34)] backdrop-blur-md transition hover:border-museum.accent/35 hover:bg-museum.surface"
      >
        <Palette className="h-4 w-4 text-museum.accent" />
        {labels.toggle}
      </button>
    </div>
  );
}
