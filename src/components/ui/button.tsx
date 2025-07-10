import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-hero text-primary-foreground hover:scale-105 shadow-glow transition-all duration-300 font-semibold",
        glass: "bg-background/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-background/20 transition-all duration-300",
        // NexIA Brand Variants
        primary: "bg-[#2D1B69] text-white border border-[#3D2970] hover:bg-[#3D2970] hover:border-[#6B46C1] hover:shadow-[0_4px_20px_rgba(45,27,105,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300",
        gradient: "bg-gradient-to-r from-[#1F0F4A] via-[#2D1B69] to-[#4D3980] text-white hover:shadow-[0_6px_30px_rgba(45,27,105,0.5)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden transition-all duration-300",
        "nexia-outline": "bg-transparent text-white border-2 border-[#3D2970] hover:bg-[#2D1B69] hover:border-[#6B46C1] hover:shadow-[0_4px_20px_rgba(45,27,105,0.3)] transition-all duration-300",
        "nexia-ghost": "bg-[#2D1B69]/10 text-white border border-[#2D1B69]/30 hover:bg-[#2D1B69]/20 hover:border-[#2D1B69] transition-all duration-300",
        solid: "bg-[#2D1B69] text-white hover:bg-[#1F0F4A] active:bg-[#150A3A] transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // NexIA Brand Sizes
        "nexia-sm": "px-4 py-2 text-sm h-8",
        "nexia-md": "px-6 py-3 text-base h-10",
        "nexia-lg": "px-8 py-4 text-lg h-12"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  gradient?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, gradient = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Special handling for gradient variant
    if (variant === "gradient" && gradient) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4D3980] via-[#2D1B69] to-[#1F0F4A] opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </Comp>
      );
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

// Icon Button Component
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-11 h-11 rounded-full bg-[#2D1B69] text-white border border-[#3D2970] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#1F0F4A] hover:to-[#4D3980] hover:scale-110 hover:shadow-[0_4px_20px_rgba(45,27,105,0.4)] active:scale-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";

// Button Group Component
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex gap-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

export { Button, IconButton, ButtonGroup, buttonVariants };
