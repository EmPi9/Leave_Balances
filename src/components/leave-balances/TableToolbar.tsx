import type { ReactNode } from "react";
import { CollapseIcon, FileExportIcon, FiltersIcon } from "@/components/icons";
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
      <div className="flex items-center gap-[var(--spacing-2)]">
        <div
          aria-hidden
          className="flex items-center justify-center rounded-[var(--borderRadius-xl)] border border-[var(--border)] text-[var(--colors-text-primary)]"
          style={{ width: "var(--spacing-10)", height: "var(--spacing-10)" }}
        >
          <FileExportIcon />
        </div>
        <SearchField value={query} onChange={onQueryChange} />
      </div>

      <div className="flex flex-wrap items-center gap-[var(--spacing-2)]">
        <ToolbarChip icon={<FiltersIcon />}>Filters</ToolbarChip>
        <ToolbarChip icon={<CollapseIcon />} onClick={onCollapseAll}>
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
  icon,
  onClick,
}: {
  children: string;
  icon?: ReactNode;
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
      {icon}
      {children}
    </button>
  );
}
