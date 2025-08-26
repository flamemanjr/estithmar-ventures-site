import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const corporateButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-gotham-medium text-sm transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/40 shadow-sm hover:shadow-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border focus-visible:ring-secondary/40 shadow-sm hover:shadow-md",
        outline: "border border-input text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/40 shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/40",
        "ghost-dark": "text-white border border-white/40 hover:border-white hover:bg-white/10 focus-visible:ring-white/40",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        "rounded-lg": "h-14 px-8 py-4 rounded-2xl",
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