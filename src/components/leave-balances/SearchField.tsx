import { FileSendIcon } from "@/components/icons/solar";
import { Input } from "@/components/ui/input";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <label
      className="relative block min-w-0"
      style={{ width: "calc(var(--spacing-32) * 2 + var(--spacing-16))" }}
    >
      <FileSendIcon
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-[var(--spacing-3)] -translate-y-1/2 text-[var(--colors-text-secondary)]"
        style={{ width: "var(--spacing-5)", height: "var(--spacing-5)" }}
      />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name or email"
        aria-label="Search by name or email"
        className="h-[var(--spacing-10)] rounded-[var(--borderRadius-full)] border-[var(--border)] pr-[var(--spacing-4)] pl-[var(--spacing-10)] placeholder:text-[var(--colors-text-disabled)]"
      />
    </label>
  );
}
