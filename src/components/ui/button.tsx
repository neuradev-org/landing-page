import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-40 aria-invalid:ring-destructive/30 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#4338CA] hover:shadow-[0_12px_28px_-6px_rgba(79,70,230,0.4)]",
        outline:
          "bg-white text-ink-700 border border-ink-200 hover:border-ink-900 hover:text-ink-900",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-ink-600 hover:text-ink-900 hover:bg-ink-50",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/30",
        light:
          "bg-white text-ink-900 hover:bg-warm",
      },
      size: {
        default: "h-9 px-4 text-sm font-medium rounded-md",
        sm: "h-8 px-3 text-xs font-medium rounded-md",
        cta: "h-auto px-6 py-3.5 text-sm font-semibold rounded-xl",
        "cta-sm": "h-auto px-4 py-2 text-sm font-semibold rounded-xl",
        "cta-md": "h-auto px-5 py-3 text-sm font-semibold rounded-xl",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp: any = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
