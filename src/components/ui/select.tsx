import * as SelectPrimitive from "@radix-ui/react-select";
import { ArrowDownIcon } from "@/components/icons/solar";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Select({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root {...props} />;
}

function SelectValue({ ...props }: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-between gap-[var(--spacing-2)] border bg-[var(--colors-common-white)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] font-[number:var(--typography-fontWeight-medium)] text-[var(--colors-text-primary)] outline-none",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ArrowDownIcon
          className="shrink-0 text-[var(--colors-text-secondary)]"
          style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "z-50 overflow-hidden border bg-[var(--colors-common-white)] text-[var(--colors-text-primary)] shadow-[var(--shadows-dropdown)]",
          className,
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-[var(--spacing-1)]">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex cursor-pointer items-center rounded-[var(--borderRadius-md)] px-[var(--spacing-2)] py-[var(--spacing-2)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] outline-none data-[highlighted]:bg-[var(--colors-palette-primary-lighter)] data-[highlighted]:text-[var(--colors-palette-primary-default)]",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
