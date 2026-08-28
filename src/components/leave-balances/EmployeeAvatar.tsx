export function EmployeeAvatar({ name }: { name: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-gray-200)] text-[var(--colors-palette-gray-500)]"
      style={{ width: "var(--spacing-8)", height: "var(--spacing-8)" }}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <circle cx="16" cy="12" r="5" fill="currentColor" />
        <path d="M6 28c2-6 6-9 10-9s8 3 10 9" fill="currentColor" />
      </svg>
      <span className="sr-only">{name}</span>
    </div>
  );
}
