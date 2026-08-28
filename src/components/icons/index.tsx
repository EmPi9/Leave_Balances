import type { SVGProps } from "react";
import badgeBell from "@/assets/icons/badge-bell.svg";
import badgeClipboard from "@/assets/icons/badge-clipboard.svg";
import checkboxChecked from "@/assets/icons/checkbox-checked.svg";
import collapse from "@/assets/icons/collapse.svg";
import filters from "@/assets/icons/filters.svg";
import logo from "@/assets/icons/logo.svg";
import railCalendar from "@/assets/icons/rail-calendar.svg";
import railCalendarClock from "@/assets/icons/rail-calendar-clock.svg";
import railChart from "@/assets/icons/rail-chart.svg";
import railDocs from "@/assets/icons/rail-docs.svg";
import railFile from "@/assets/icons/rail-file.svg";
import railLock from "@/assets/icons/rail-lock.svg";
import railUser from "@/assets/icons/rail-user.svg";
import railWallet from "@/assets/icons/rail-wallet.svg";
import themeSwitch from "@/assets/icons/theme-switch.svg";
import { cn } from "@/lib/utils";

type GlyphProps = SVGProps<SVGSVGElement>;

function Glyph({ className, children, viewBox = "0 0 20 20", ...props }: GlyphProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

function Asset({
  src,
  alt = "",
  width,
  height,
  className,
}: {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      draggable={false}
      className={cn("shrink-0 select-none", className)}
    />
  );
}

export function LogoMark() {
  return <Asset src={logo} alt="ShiftRoom" width={26} height={26} />;
}

export function RailSearchIcon({ className }: { className?: string }) {
  return (
    <Glyph viewBox="0 0 41 41" className={className} width={41} height={41}>
      <path
        d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H33C37.1421 0.5 40.5 3.85786 40.5 8V33C40.5 37.1421 37.1421 40.5 33 40.5H8C3.85786 40.5 0.5 37.1421 0.5 33V8Z"
        fill="var(--colors-common-white)"
        stroke="var(--colors-palette-primary-dark)"
      />
      <path
        fill="var(--colors-text-primary)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 13.25C16.4959 13.25 13.25 16.4959 13.25 20.5C13.25 24.5041 16.4959 27.75 20.5 27.75C24.5041 27.75 27.75 24.5041 27.75 20.5C27.75 16.4959 24.5041 13.25 20.5 13.25ZM12.25 20.5C12.25 15.9437 15.9437 12.25 20.5 12.25C25.0563 12.25 28.75 15.9437 28.75 20.5C28.75 22.4307 28.087 24.2048 26.9756 25.6182L29.6036 28.2462C29.7988 28.4414 29.7988 28.758 29.6036 28.9532L28.9532 29.6036C28.758 29.7988 28.4414 29.7988 28.2462 29.6036L25.6182 26.9756C24.2048 28.087 22.4307 28.75 20.5 28.75C15.9437 28.75 12.25 25.0563 12.25 20.5Z"
      />
    </Glyph>
  );
}

export const railIcons = {
  user: (className?: string) => <Asset src={railUser} alt="" width={41} height={41} className={className} />,
  docs: (className?: string) => <Asset src={railDocs} alt="" width={41} height={41} className={className} />,
  calendarClock: (className?: string) => (
    <Asset src={railCalendarClock} alt="" width={41} height={41} className={className} />
  ),
  lock: (className?: string) => <Asset src={railLock} alt="" width={41} height={41} className={className} />,
  chart: (className?: string) => <Asset src={railChart} alt="" width={41} height={41} className={className} />,
  wallet: (className?: string) => <Asset src={railWallet} alt="" width={41} height={41} className={className} />,
  file: (className?: string) => <Asset src={railFile} alt="" width={41} height={41} className={className} />,
  calendar: (className?: string) => <Asset src={railCalendar} alt="" width={41} height={41} className={className} />,
};

export function BadgeBellIcon() {
  return <Asset src={badgeBell} alt="" width={43} height={43} />;
}

export function BadgeClipboardIcon() {
  return <Asset src={badgeClipboard} alt="" width={43} height={43} />;
}

export function ThemeSwitchIcon() {
  return <Asset src={themeSwitch} alt="" width={41} height={23} />;
}

export function FiltersIcon() {
  return <Asset src={filters} alt="" width={14} height={15} />;
}

export function CollapseIcon() {
  return <Asset src={collapse} alt="" width={14} height={14} />;
}

export function CheckboxCheckedIcon() {
  return <Asset src={checkboxChecked} alt="" width={20} height={20} />;
}

export function CheckboxUncheckedIcon() {
  return (
    <Glyph width={20} height={20} viewBox="0 0 20 20">
      <path
        d="M14 1.5C16.4853 1.5 18.5 3.51472 18.5 6V14C18.5 16.4853 16.4853 18.5 14 18.5H6C3.51472 18.5 1.5 16.4853 1.5 14V6C1.5 3.51472 3.51472 1.5 6 1.5H14Z"
        fill="var(--colors-common-white)"
        stroke="var(--border)"
      />
    </Glyph>
  );
}

export function FileExportIcon(props: GlyphProps) {
  return (
    <Glyph viewBox="0 0 20 20" width={20} height={20} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 2.5C5.00736 2.5 4 3.50736 4 4.75V15.25C4 16.4926 5.00736 17.5 6.25 17.5H13.75C14.9926 17.5 16 16.4926 16 15.25V8.12868C16 7.53197 15.7629 6.95967 15.341 6.53779L12.4622 3.65901C12.0403 3.23705 11.468 3 10.8713 3H6.25C6.25 3 6.25 2.5 6.25 2.5ZM5 4.75C5 4.05964 5.55964 3.5 6.25 3.5H10.5V6.75C10.5 7.7165 11.2835 8.5 12.25 8.5H15V15.25C15 15.9404 14.4404 16.5 13.75 16.5H6.25C5.55964 16.5 5 15.9404 5 15.25V4.75ZM14.3787 7.5H12.25C11.8358 7.5 11.5 7.16421 11.5 6.75V4.62132L14.3787 7.5ZM10 10.25C10 9.97386 9.77614 9.75 9.5 9.75C9.22386 9.75 9 9.97386 9 10.25V13.1893L8.28033 12.4697C8.08474 12.2741 7.7678 12.2741 7.57221 12.4697C7.37663 12.6652 7.37663 12.9822 7.57221 13.1778L9.14645 14.752C9.34197 14.9476 9.65803 14.9476 9.85355 14.752L11.4278 13.1778C11.6234 12.9822 11.6234 12.6652 11.4278 12.4697C11.2322 12.2741 10.9153 12.2741 10.7197 12.4697L10 13.1893V10.25Z"
      />
    </Glyph>
  );
}

export function ChevronUpIcon(props: GlyphProps) {
  return (
    <Glyph viewBox="0 0 16 16" width={16} height={16} {...props}>
      <path
        d="M3.2 10.2L8 5.4L12.8 10.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Glyph>
  );
}

export function ChevronDownIcon(props: GlyphProps) {
  return (
    <Glyph viewBox="0 0 16 16" width={16} height={16} {...props}>
      <path
        d="M3.2 5.8L8 10.6L12.8 5.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Glyph>
  );
}

export function KebabIcon(props: GlyphProps) {
  return (
    <Glyph viewBox="0 0 20 20" width={20} height={20} {...props}>
      <circle cx="5" cy="10" r="1.25" fill="currentColor" />
      <circle cx="10" cy="10" r="1.25" fill="currentColor" />
      <circle cx="15" cy="10" r="1.25" fill="currentColor" />
    </Glyph>
  );
}

export function NotesIcon(props: GlyphProps) {
  return (
    <Glyph viewBox="0 0 16 16" width={16} height={16} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 1.5C4.2835 1.5 3.5 2.2835 3.5 3.25V4.5H3.25C2.55964 4.5 2 5.05964 2 5.75V12.75C2 13.9926 3.00736 15 4.25 15H11.75C12.9926 15 14 13.9926 14 12.75V5.75C14 5.05964 13.4404 4.5 12.75 4.5H12.5V3.25C12.5 2.2835 11.7165 1.5 10.75 1.5H5.25ZM11.5 4.5V3.25C11.5 2.83579 11.1642 2.5 10.75 2.5H5.25C4.83579 2.5 4.5 2.83579 4.5 3.25V4.5H11.5ZM3.25 5.5H12.75C12.8881 5.5 13 5.61193 13 5.75V12.75C13 13.4404 12.4404 14 11.75 14H4.25C3.55964 14 3 13.4404 3 12.75V5.75C3 5.61193 3.11193 5.5 3.25 5.5ZM10.7803 8.21967C10.4874 7.92678 10.0126 7.92678 9.71967 8.21967L7.25 10.6893L6.28033 9.71967C5.98744 9.42678 5.51256 9.42678 5.21967 9.71967C4.92678 10.0126 4.92678 10.4874 5.21967 10.7803L6.71967 12.2803C7.01256 12.5732 7.48744 12.5732 7.78033 12.2803L10.7803 9.28033C11.0732 8.98744 11.0732 8.51256 10.7803 8.21967Z"
      />
    </Glyph>
  );
}

export function MagniferIcon(props: GlyphProps) {
  return (
    <Glyph viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C12.9307 18.25 14.7048 17.587 16.1182 16.4756L18.7462 19.1036C18.9414 19.2988 19.258 19.2988 19.4532 19.1036L20.1036 18.4532C20.2988 18.258 20.2988 17.9414 20.1036 17.7462L17.4756 15.1182C18.587 13.7048 19.25 11.9307 19.25 11C19.25 6.99594 16.0041 3.75 12 3.75H11ZM2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11Z"
      />
    </Glyph>
  );
}
