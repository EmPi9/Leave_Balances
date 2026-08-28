import {
  BellIcon,
  BriefcaseIcon,
  CalendarIcon,
  CameraIcon,
  ChartIcon,
  ChatIcon,
  DocumentTextIcon,
  FileTextIcon,
  MagniferIcon,
  StarIcon,
  UserIcon,
  WalletIcon,
} from "@/components/icons/solar";
import { IllustratedAvatar } from "@/components/leave-balances/EmployeeAvatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RAIL_ITEMS = [
  { id: "search", icon: MagniferIcon, label: "Search", circled: true },
  { id: "people", icon: UserIcon, label: "People" },
  { id: "docs", icon: DocumentTextIcon, label: "Documents" },
  { id: "leave", icon: CameraIcon, label: "Leave", active: true },
  { id: "access", icon: BriefcaseIcon, label: "Jobs" },
  { id: "reports", icon: ChartIcon, label: "Reports" },
  { id: "wallet", icon: WalletIcon, label: "Wallet" },
  { id: "records", icon: FileTextIcon, label: "Records" },
  { id: "calendar", icon: CalendarIcon, label: "Calendar" },
] as const;

const NAV_ITEMS = [
  { id: "leave-balances", label: "Leave Balances", active: true },
  { id: "leave-requests", label: "Leave requests", active: false },
  { id: "public-holidays", label: "Public Holidays", active: false },
] as const;

const iconBox = { width: "var(--spacing-5)", height: "var(--spacing-5)" };

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
        <ShiftMark />

        <nav className="mt-[var(--spacing-8)] flex flex-1 flex-col items-center gap-[var(--spacing-3)]">
          {RAIL_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = "active" in item && item.active;
            const isCircled = "circled" in item && item.circled;

            return (
              <Button
                key={item.id}
                variant="icon"
                aria-label={item.label}
                className={cn(
                  "flex items-center justify-center text-[var(--colors-text-primary)]",
                  isActive &&
                    "rounded-[var(--borderRadius-xl)] bg-[var(--colors-palette-primary-lighter)]",
                  isCircled &&
                    "rounded-[var(--borderRadius-xl)] border border-[var(--colors-palette-primary-dark)] text-[var(--colors-palette-primary-dark)]",
                )}
                style={{ width: "var(--spacing-10)", height: "var(--spacing-10)" }}
              >
                <Icon style={iconBox} />
              </Button>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-[var(--spacing-4)]">
          <IconWithBadge label="Notifications" icon={BellIcon} />
          <IconWithBadge label="Messages" icon={ChatIcon} />
          <ThemeSwitch />
          <div
            className="overflow-hidden rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-gray-200)]"
            style={{ width: "var(--spacing-9)", height: "var(--spacing-9)" }}
            aria-label="Account"
          >
            <IllustratedAvatar />
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
              className={cn(
                "rounded-[var(--borderRadius-xl)] px-[var(--spacing-4)] py-[var(--spacing-2)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)]",
                item.active
                  ? "bg-[var(--colors-palette-primary-lighter)] font-[number:var(--typography-fontWeight-semibold)] text-[var(--colors-text-primary)]"
                  : "font-[number:var(--typography-fontWeight-medium)] text-[var(--colors-text-secondary)]",
              )}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function ShiftMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-label="ShiftRoom"
      className="text-[var(--colors-text-primary)]"
    >
      <g transform="translate(16 16) skewX(-26) translate(-16 -16)">
        <rect x="6" y="6" width="20" height="7.5" rx="2.5" />
        <rect x="6" y="18.5" width="20" height="7.5" rx="2.5" />
      </g>
    </svg>
  );
}

function IconWithBadge({
  label,
  icon: Icon,
}: {
  label: string;
  icon: typeof BellIcon;
}) {
  return (
    <Button
      variant="icon"
      aria-label={label}
      className="relative flex items-center justify-center text-[var(--colors-text-primary)]"
      style={{ width: "var(--spacing-10)", height: "var(--spacing-10)" }}
    >
      <Icon style={iconBox} />
      <span
        className="absolute rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-primary-default)]"
        style={{
          width: "var(--spacing-2)",
          height: "var(--spacing-2)",
          top: "var(--spacing-1)",
          right: "var(--spacing-1)",
        }}
      />
    </Button>
  );
}

function ThemeSwitch() {
  return (
    <div
      className="relative rounded-[var(--borderRadius-full)] bg-[var(--colors-palette-gray-250)]"
      style={{ width: "var(--spacing-10)", height: "var(--spacing-6)" }}
      aria-hidden
    >
      <span
        className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-[var(--borderRadius-full)] bg-[var(--colors-common-white)] text-[var(--colors-text-primary)] shadow-[var(--shadows-sm)]"
        style={{
          width: "var(--spacing-5)",
          height: "var(--spacing-5)",
          left: "var(--spacing-1)",
        }}
      >
        <StarIcon style={{ width: "var(--spacing-3)", height: "var(--spacing-3)" }} />
      </span>
    </div>
  );
}
