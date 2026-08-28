import { useMemo, useState } from "react";
import {
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
  ChevronDownIcon,
} from "@/components/icons";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export type FilterOption = {
  id: string;
  label: string;
};

type SearchableFilterProps = {
  label: string;
  searchPlaceholder: string;
  options: FilterOption[];
  selectedIds: string[];
  onSelectedIdsChange: (ids: string[]) => void;
};

export function SearchableFilter({
  label,
  searchPlaceholder,
  options,
  selectedIds,
  onSelectedIdsChange,
}: SearchableFilterProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const visibleOptions = useMemo(() => {
    const normalized = search.trim().toLocaleLowerCase();

    if (normalized.length === 0) {
      return options;
    }

    return options.filter((option) => option.label.toLocaleLowerCase().includes(normalized));
  }, [options, search]);

  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const triggerValue =
    open || selectedIds.length === 0 || selectedIds.length === options.length
      ? open
        ? searchPlaceholder
        : "All"
      : [...new Set(options.filter((option) => selectedSet.has(option.id)).map((option) => option.label))].join(
          ", ",
        );

  function toggle(id: string) {
    if (selectedSet.has(id)) {
      onSelectedIdsChange(selectedIds.filter((item) => item !== id));
      return;
    }

    onSelectedIdsChange([...selectedIds, id]);
  }

  function reset() {
    setSearch("");
    onSelectedIdsChange([]);
  }

  return (
    <DropdownMenu
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          setSearch("");
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={label}
          className="inline-flex h-[var(--spacing-10)] min-w-[calc(var(--spacing-32)+var(--spacing-16))] items-center justify-between gap-[var(--spacing-2)] rounded-[var(--borderRadius-xl)] border border-[var(--border)] bg-[var(--colors-common-white)] px-[var(--spacing-4)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] font-[number:var(--typography-fontWeight-medium)] text-[var(--colors-text-primary)] outline-none"
        >
          <span className="flex min-w-0 items-center gap-[var(--spacing-1)]">
            <span className="text-[var(--colors-text-secondary)]">{label}:</span>
            <span
              className={cn(
                "truncate",
                open && "text-[var(--colors-text-disabled)]",
              )}
            >
              {triggerValue}
            </span>
          </span>
          <ChevronDownIcon className="text-[var(--colors-text-secondary)]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-[var(--radix-popper-anchor-width)] p-[var(--spacing-2)]"
      >
        <div className="mb-[var(--spacing-2)] flex items-center gap-[var(--spacing-2)]">
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            onKeyDown={(event) => event.stopPropagation()}
            className="h-[var(--spacing-8)] min-w-0 flex-1 rounded-[var(--borderRadius-lg)] border-[var(--border)] px-[var(--spacing-3)] placeholder:text-[var(--colors-text-disabled)]"
          />
          <button
            type="button"
            onClick={reset}
            className="shrink-0 text-[length:var(--typography-fontSize-sm)] font-[number:var(--typography-fontWeight-medium)] text-[var(--colors-palette-primary-dark)] outline-none"
          >
            Reset
          </button>
        </div>
        <div className="flex max-h-[calc(var(--spacing-32)+var(--spacing-8))] flex-col overflow-auto">
          {visibleOptions.map((option) => {
            const checked = selectedSet.has(option.id);

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => toggle(option.id)}
                className="flex w-full items-center gap-[var(--spacing-2)] rounded-[var(--borderRadius-md)] px-[var(--spacing-1)] py-[var(--spacing-2)] text-left text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-primary)] outline-none"
              >
                {checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
                {option.label}
              </button>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
