import { BadgeCheck } from 'lucide-react';
import type { Locale } from '@/i18n/config';

type VerifiedBadgeProps = {
  label?: string;
  locale?: Locale;
};

export function VerifiedBadge({ label, locale = 'vi' }: VerifiedBadgeProps) {
  const resolvedLabel = label ?? (locale === 'en' ? 'Verified source' : 'Nguồn kiểm chứng');

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
      <BadgeCheck className="h-3.5 w-3.5" />
      {resolvedLabel}
    </span>
  );
}
