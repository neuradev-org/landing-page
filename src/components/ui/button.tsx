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
          "bg-ink-900 text-paper hover:bg-ink-950 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(30,26,19,0.45)]",
        outline:
          "bg-transparent text-ink-800 border border-ink-900/25 hover:border-ink-900 hover:bg-cream",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-ink-600 hover:text-ink-900 hover:bg-ink-900/5",
        link: "text-brand underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/30",
        light:
          "bg-paper text-ink-900 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(0,0,0,0.4)]",
      },
      size: {
        default: "h-9 px-4 text-sm font-medium rounded-full",
        sm: "h-8 px-3 text-xs font-medium rounded-full",
        cta: "h-auto px-7 py-3.5 text-sm font-semibold rounded-full",
        "cta-sm": "h-auto px-4 py-2 text-sm font-semibold rounded-full",
        "cta-md": "h-auto px-5 py-3 text-sm font-semibold rounded-full",
        icon: "size-9 rounded-full",
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
