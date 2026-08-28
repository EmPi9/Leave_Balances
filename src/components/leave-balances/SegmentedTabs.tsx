import { cn } from "@/lib/utils";

const TABS = ["Head office", "Restaurants"] as const;

type SegmentedTabsProps = {
  value: (typeof TABS)[number];
  onChange: (value: (typeof TABS)[number]) => void;
};

export function SegmentedTabs({ value, onChange }: SegmentedTabsProps) {
  return (
    <div className="inline-flex rounded-[var(--borderRadius-xl)] border border-[var(--border)] bg-[var(--colors-common-white)] p-[var(--spacing-1)]">
      {TABS.map((tab) => {
        const selected = tab === value;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={cn(
              "rounded-[var(--borderRadius-xl)] px-[var(--spacing-5)] py-[var(--spacing-2)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] outline-none",
              selected
                ? "bg-[var(--colors-surface-muted)] font-[number:var(--typography-fontWeight-medium)] text-[var(--colors-palette-primary-dark)]"
                : "font-[number:var(--typography-fontWeight-medium)] text-[var(--colors-text-primary)]",
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
