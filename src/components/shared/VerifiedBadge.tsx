import { BadgeCheck } from 'lucide-react';

type VerifiedBadgeProps = {
  label?: string;
};

export function VerifiedBadge({ label = 'Nguồn kiểm chứng' }: VerifiedBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
      <BadgeCheck className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
