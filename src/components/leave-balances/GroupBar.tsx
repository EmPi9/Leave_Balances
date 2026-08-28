import { ChevronUpIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type GroupBarProps = {
  title: string;
  level: 1 | 2 | 3;
  expanded: boolean;
  onToggle: () => void;
};

const LEVEL_CLASS: Record<GroupBarProps["level"], string> = {
  1: "ml-0 bg-[var(--colors-palette-primary-light)]",
  2: "ml-[var(--spacing-4)] bg-[var(--colors-palette-primary-lighter)]",
  3: "ml-[var(--spacing-8)] bg-[var(--colors-surface-muted)]",
};

export function GroupBar({ title, level, expanded, onToggle }: GroupBarProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex h-[var(--spacing-10)] w-full items-center gap-[var(--spacing-2)] rounded-[var(--borderRadius-xl)] px-[var(--spacing-4)] text-left text-[length:var(--typography-fontSize-sm)] font-[number:var(--typography-fontWeight-semibold)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-primary)] outline-none",
        LEVEL_CLASS[level],
      )}
    >
      <ChevronUpIcon
        className={cn("shrink-0 text-[var(--colors-text-primary)]", !expanded && "rotate-180")}
      />
      {title}
    </button>
  );
}
