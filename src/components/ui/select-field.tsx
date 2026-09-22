import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SelectField({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        suppressHydrationWarning
        className={cn("field-control field-select", className)}
        {...props}
      >
        {children}
      </select>
      <span className="field-chevron" aria-hidden="true" />
    </div>
  );
}
