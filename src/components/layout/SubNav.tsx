import { CalendarDays, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";

const SUBNAV_ITEMS = [
  { id: "leave-balances", label: "Leave balances", icon: ClipboardList, active: true },
  { id: "public-holidays", label: "Public holidays", icon: CalendarDays, active: false },
] as const;

export function SubNav() {
  return (
    <aside
      className="flex h-full shrink-0 flex-col border-r border-[var(--border)] bg-[var(--colors-common-white)] px-[var(--spacing-5)] py-[var(--spacing-6)]"
      style={{ width: "var(--layout-nav-width)" }}
    >
      <h2 className="text-[length:var(--typography-fontSize-lg)] font-[number:var(--typography-fontWeight-bold)] leading-[var(--typography-lineHeight-tight)] text-[var(--colors-text-primary)]">
        Leaves and Attendance
      </h2>

      <nav className="mt-[var(--spacing-6)] flex flex-col gap-[var(--spacing-1)]">
        {SUBNAV_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={cn(
                "flex items-center gap-[var(--spacing-3)] rounded-[var(--borderRadius-xl)] px-[var(--spacing-3)] py-[var(--spacing-2)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)]",
                item.active
                  ? "bg-[var(--colors-palette-primary-lighter)] font-[number:var(--typography-fontWeight-semibold)] text-[var(--colors-palette-primary-default)]"
                  : "font-[number:var(--typography-fontWeight-medium)] text-[var(--colors-text-secondary)]",
              )}
            >
              <Icon
                style={{ width: "var(--spacing-5)", height: "var(--spacing-5)" }}
                strokeWidth={1.75}
              />
              {item.label}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
