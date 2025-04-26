/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { createContext, useContext, useState, forwardRef } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/utils/tailClass"


// Create context for the select component
const SelectContext = createContext<{
  value: string
  onValueChange: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}>({
  value: "",
  onValueChange: () => {},
  open: false,
  setOpen: () => {},
})

export interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
  defaultValue?: string
}

export function Select({ children, value, onValueChange, defaultValue }: SelectProps) {
  const [open, setOpen] = useState(false)

  return <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>{children}</SelectContext.Provider>
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = useContext(SelectContext)

    return (
      <button
        ref={ref}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        onClick={() => setOpen(!open)}
        type="button"
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
    )
  },
)
SelectTrigger.displayName = "SelectTrigger"

export interface SelectValueProps {
  placeholder?: string
}

export function SelectValue({ placeholder }: SelectValueProps) {
  const { value } = useContext(SelectContext)

  return <span>{value || placeholder}</span>
}

export interface SelectContentProps {
  className?: string
  children: React.ReactNode
}

export function SelectContent({ className, children }: SelectContentProps) {
  const { open, setOpen } = useContext(SelectContext)

  if (!open) return null

  return (
    <div className="relative z-50">
      <div className="fixed inset-0" onClick={() => setOpen(false)} />
      <div
        className={cn(
          "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
          className,
        )}
      >
        <div className="p-1">{children}</div>
      </div>
    </div>
  )
}

export interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const SelectItem = forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { onValueChange, setOpen } = useContext(SelectContext)

    return (
      <button
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className,
        )}
        onClick={() => {
          onValueChange(value)
          setOpen(false)
        }}
        {...props}
      >
        <span>{children}</span>
      </button>
    )
  },
)
SelectItem.displayName = "SelectItem"
