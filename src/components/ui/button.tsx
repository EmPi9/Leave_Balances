import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap border-0 bg-transparent p-0 outline-none",
  {
    variants: {
      variant: {
        ghost: "cursor-pointer",
        icon: "cursor-pointer shrink-0",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, asChild = false, type = "button", ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      ref={ref}
      type={asChild ? undefined : type}
      {...props}
    />
  );
});

export { Button, buttonVariants };
