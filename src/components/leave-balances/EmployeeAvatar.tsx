import avatar from "@/assets/avatar.png";

export function EmployeeAvatar({ name }: { name: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-gray-200)]"
      style={{ width: "var(--spacing-8)", height: "var(--spacing-8)" }}
    >
      <img src={avatar} alt="" className="h-full w-full object-cover" />
      <span className="sr-only">{name}</span>
    </div>
  );
}
