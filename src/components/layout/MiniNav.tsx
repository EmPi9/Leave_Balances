import {
  CalendarDays,
  ClipboardList,
  LayoutGrid,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "dashboard", icon: LayoutGrid, label: "Dashboard" },
  { id: "people", icon: Users, label: "People" },
  { id: "leave", icon: ClipboardList, label: "Leave", active: true },
  { id: "calendar", icon: CalendarDays, label: "Calendar" },
] as const;

export function MiniNav() {
  return (
    <aside
      className="flex h-full shrink-0 flex-col items-center border-r border-[var(--border)] bg-[var(--colors-common-white)] py-[var(--spacing-4)]"
      style={{ width: "var(--layout-nav-width-mini)" }}
    >
      <div
        className="flex items-center justify-center rounded-[var(--borderRadius-xl)] bg-[var(--colors-palette-primary-default)] text-[length:var(--typography-fontSize-sm)] font-[number:var(--typography-fontWeight-bold)] leading-[var(--typography-lineHeight-none)] text-[var(--colors-common-white)]"
        style={{ width: "var(--spacing-10)", height: "var(--spacing-10)" }}
        aria-label="ShiftRoom"
      >
        S
      </div>

      <nav className="mt-[var(--spacing-8)] flex flex-1 flex-col items-center gap-[var(--spacing-3)]">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = "active" in item && item.active;

          return (
            <Button
              key={item.id}
              variant="icon"
              aria-label={item.label}
              className={cn(
                "flex items-center justify-center rounded-[var(--borderRadius-xl)]",
                isActive
                  ? "bg-[var(--colors-palette-primary-lighter)] text-[var(--colors-palette-primary-default)]"
                  : "text-[var(--colors-text-secondary)]",
              )}
              style={{ width: "var(--spacing-10)", height: "var(--spacing-10)" }}
            >
              <Icon style={{ width: "var(--spacing-5)", height: "var(--spacing-5)" }} strokeWidth={1.75} />
            </Button>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-[var(--spacing-3)]">
        <Button
          variant="icon"
          aria-label="Settings"
          className="flex items-center justify-center text-[var(--colors-text-secondary)]"
          style={{ width: "var(--spacing-10)", height: "var(--spacing-10)" }}
        >
          <Settings style={{ width: "var(--spacing-5)", height: "var(--spacing-5)" }} strokeWidth={1.75} />
        </Button>
        <div
          className="flex items-center justify-center rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-primary-lighter)] text-[length:var(--typography-fontSize-xs)] font-[number:var(--typography-fontWeight-semibold)] text-[var(--colors-palette-primary-default)]"
          style={{ width: "var(--spacing-9)", height: "var(--spacing-9)" }}
          aria-label="Account"
        >
          SR
        </div>
      </div>
    </aside>
  );
}
