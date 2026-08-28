import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "w-full border bg-[var(--colors-common-white)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] font-[number:var(--typography-fontWeight-normal)] text-[var(--colors-text-primary)] outline-none",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
