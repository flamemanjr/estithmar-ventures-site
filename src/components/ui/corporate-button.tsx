import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const corporateButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-gotham-medium text-sm corporate-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
        outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface CorporateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof corporateButtonVariants> {
  asChild?: boolean;
}

const CorporateButton = React.forwardRef<HTMLButtonElement, CorporateButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(corporateButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CorporateButton.displayName = "CorporateButton";

export { CorporateButton, corporateButtonVariants };