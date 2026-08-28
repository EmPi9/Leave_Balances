import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

export function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        aria-label={label}
        className="h-[var(--spacing-10)] min-w-[calc(var(--spacing-32)+var(--spacing-16))] rounded-[var(--borderRadius-xl)] border-[var(--border)] bg-[var(--colors-common-white)] px-[var(--spacing-4)]"
      >
        <span className="flex items-center gap-[var(--spacing-1)]">
          <span className="text-[var(--colors-text-secondary)]">{label}:</span>
          <SelectValue />
        </span>
      </SelectTrigger>
      <SelectContent className="rounded-[var(--borderRadius-xl)] border-[var(--border)]">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
