import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <label className="relative block" style={{ width: "calc(var(--spacing-32) * 2)" }}>
      <Search
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-[var(--spacing-3)] -translate-y-1/2 text-[var(--colors-text-disabled)]"
        style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
        strokeWidth={1.75}
      />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name"
        aria-label="Search by name"
        className="h-[var(--spacing-10)] rounded-[var(--radius)] border-[var(--input)] pr-[var(--spacing-3)] pl-[var(--spacing-10)] placeholder:text-[var(--colors-text-disabled)]"
      />
    </label>
  );
}
