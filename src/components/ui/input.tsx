import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-900 outline-none transition-colors",
        "placeholder:text-ink-400",
        "focus:border-brand focus:bg-white",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
