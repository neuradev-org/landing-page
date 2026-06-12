import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-24 resize-none rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-900 leading-relaxed outline-none transition-colors",
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

export { Textarea }
