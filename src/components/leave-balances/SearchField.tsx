import { Input } from "@/components/ui/input";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <label
      className="block min-w-0"
      style={{ width: "calc(var(--spacing-32) * 2)" }}
    >
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name or email"
        aria-label="Search by name or email"
        className="h-[var(--spacing-10)] rounded-[var(--borderRadius-full)] border-[var(--border)] px-[var(--spacing-4)] placeholder:text-[var(--colors-text-disabled)]"
      />
    </label>
  );
}
