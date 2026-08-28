import avatar from "@/assets/avatar.png";
import {
  BadgeBellIcon,
  BadgeClipboardIcon,
  LogoMark,
  RailSearchIcon,
  ThemeSwitchIcon,
  railIcons,
} from "@/components/icons";
import { Button } from "@/components/ui/button";

const RAIL_ITEMS = [
  { id: "search", label: "Search", node: <RailSearchIcon /> },
  { id: "people", label: "People", node: railIcons.user() },
  { id: "docs", label: "Documents", node: railIcons.docs() },
  { id: "leave", label: "Leave", node: railIcons.calendarClock() },
  { id: "access", label: "Access", node: railIcons.lock() },
  { id: "reports", label: "Reports", node: railIcons.chart() },
  { id: "wallet", label: "Wallet", node: railIcons.wallet() },
  { id: "records", label: "Records", node: railIcons.file() },
  { id: "calendar", label: "Calendar", node: railIcons.calendar() },
] as const;

const NAV_ITEMS = [
  { id: "leave-balances", label: "Leave Balances", active: true },
  { id: "leave-requests", label: "Leave requests", active: false },
  { id: "public-holidays", label: "Public Holidays", active: false },
] as const;

export function Sidebar() {
  return (
    <aside
      className="flex h-full shrink-0 overflow-hidden rounded-[var(--layout-shell-radius)] bg-[var(--colors-background-neutral)]"
      style={{ width: "calc(var(--layout-nav-width-mini) + var(--layout-nav-width))" }}
    >
      <div
        className="flex h-full shrink-0 flex-col items-center bg-[var(--colors-common-white)] py-[var(--spacing-5)]"
        style={{ width: "var(--layout-nav-width-mini)" }}
      >
        <LogoMark />

        <nav className="mt-[var(--spacing-8)] flex flex-1 flex-col items-center gap-[var(--spacing-3)]">
          {RAIL_ITEMS.map((item) => (
            <Button
              key={item.id}
              variant="icon"
              aria-label={item.label}
              className="flex items-center justify-center"
            >
              {item.node}
            </Button>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-[var(--spacing-2)]">
          <Button variant="icon" aria-label="Notifications" className="flex items-center justify-center">
            <BadgeBellIcon />
          </Button>
          <Button variant="icon" aria-label="Tasks" className="flex items-center justify-center">
            <BadgeClipboardIcon />
          </Button>
          <div aria-hidden>
            <ThemeSwitchIcon />
          </div>
          <div
            className="overflow-hidden rounded-[var(--borderRadius-full)]"
            style={{ width: "var(--spacing-9)", height: "var(--spacing-9)" }}
            aria-label="Account"
          >
            <img src={avatar} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-[var(--spacing-5)] py-[var(--spacing-5)]">
        <h2 className="text-[length:var(--typography-fontSize-lg)] font-[number:var(--typography-fontWeight-bold)] leading-[var(--typography-lineHeight-tight)] text-[var(--colors-text-primary)]">
          Leaves
          <br />
          and Attendance
        </h2>

        <nav className="mt-[var(--spacing-8)] flex flex-col gap-[var(--spacing-1)]">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className={
                item.active
                  ? "rounded-[var(--borderRadius-xl)] bg-[var(--colors-palette-primary-lighter)] px-[var(--spacing-4)] py-[var(--spacing-2)] text-[length:var(--typography-fontSize-sm)] font-[number:var(--typography-fontWeight-semibold)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-primary)]"
                  : "rounded-[var(--borderRadius-xl)] px-[var(--spacing-4)] py-[var(--spacing-2)] text-[length:var(--typography-fontSize-sm)] font-[number:var(--typography-fontWeight-medium)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-secondary)]"
              }
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
