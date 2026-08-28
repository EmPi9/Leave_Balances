import { MagniferIcon } from "@/components/icons/solar";

export function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-[var(--spacing-6)] py-[var(--spacing-16)] text-center">
      <div
        className="flex items-center justify-center rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-gray-200)] text-[var(--colors-text-disabled)]"
        style={{ width: "var(--spacing-16)", height: "var(--spacing-16)" }}
      >
        <MagniferIcon style={{ width: "var(--spacing-8)", height: "var(--spacing-8)" }} />
      </div>
      <p className="mt-[var(--spacing-4)] text-[length:var(--typography-fontSize-lg)] font-[number:var(--typography-fontWeight-semibold)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-primary)]">
        No employees found
      </p>
      <p className="mt-[var(--spacing-1)] max-w-[calc(var(--spacing-32)*4)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-relaxed)] text-[var(--colors-text-secondary)]">
        No one matches “{query}”. Try a different name.
      </p>
    </div>
  );
}
