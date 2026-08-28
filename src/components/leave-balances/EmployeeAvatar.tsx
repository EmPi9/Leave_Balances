export function IllustratedAvatar() {
  return (
    <svg viewBox="0 0 36 36" className="h-full w-full" aria-hidden>
      <circle cx="18" cy="18" r="18" className="fill-[var(--colors-palette-gray-200)]" />
      <path
        d="M11 16c0-5 3-9 7-9s7 4 7 9c0 1.2-.2 2.3-.6 3.3C22.8 16.4 20.6 15 18 15s-4.8 1.4-6.4 4.3C11.2 18.3 11 17.2 11 16Z"
        className="fill-[var(--colors-text-primary)]"
      />
      <circle cx="18" cy="19" r="6" className="fill-[var(--colors-palette-gray-100)]" />
      <circle cx="16" cy="18.5" r="0.8" className="fill-[var(--colors-text-primary)]" />
      <circle cx="20" cy="18.5" r="0.8" className="fill-[var(--colors-text-primary)]" />
      <path
        d="M16.2 21.2c.6.6 1.4.9 1.8.9s1.2-.3 1.8-.9"
        fill="none"
        className="stroke-[var(--colors-text-primary)]"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EmployeeAvatar({ name }: { name: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-gray-200)]"
      style={{ width: "var(--spacing-8)", height: "var(--spacing-8)" }}
      aria-hidden
    >
      <IllustratedAvatar />
      <span className="sr-only">{name}</span>
    </div>
  );
}
