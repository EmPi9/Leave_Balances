import { ListFilter, ListTree } from "lucide-react";
import { SearchField } from "@/components/leave-balances/SearchField";
import { cn } from "@/lib/utils";

type TableToolbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onCollapseAll: () => void;
};

export function TableToolbar({ query, onQueryChange, onCollapseAll }: TableToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-[var(--spacing-3)]">
      <SearchField value={query} onChange={onQueryChange} />

      <div className="flex flex-wrap items-center gap-[var(--spacing-2)]">
        <ToolbarChip icon={ListFilter}>Filters</ToolbarChip>
        <ToolbarChip icon={ListTree} onClick={onCollapseAll}>
          Collapse all
        </ToolbarChip>
        <ToolbarChip>Hide Archived</ToolbarChip>
        <ToolbarChip>Balance Audit</ToolbarChip>
      </div>
    </div>
  );
}

function ToolbarChip({
  children,
  icon: Icon,
  onClick,
}: {
  children: string;
  icon?: typeof ListFilter;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-[var(--spacing-10)] items-center gap-[var(--spacing-2)] rounded-[var(--borderRadius-full)] border border-[var(--border)] bg-[var(--colors-common-white)] px-[var(--spacing-4)] text-[length:var(--typography-fontSize-sm)] font-[number:var(--typography-fontWeight-medium)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-primary)] outline-none",
      )}
    >
      {Icon ? (
        <Icon
          style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
          strokeWidth={1.75}
        />
      ) : null}
      {children}
    </button>
  );
}
