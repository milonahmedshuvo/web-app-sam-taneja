"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/utils/tailClass"


interface AccordionProps {
  items: {
    title: string
    content: React.ReactNode
  }[]
  defaultOpen?: number
}

export function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen !== undefined ? defaultOpen : null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full rounded-md">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}

interface AccordionItemProps {
  title: string
  content: React.ReactNode
  isOpen: boolean
  onClick: () => void
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const contentRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="mb-2 overflow-hidden rounded-md bg-slate-50">
      <button
        className="flex w-full items-center justify-between p-4 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full border",
              isOpen ? "border-primary text-primary" : "border-muted-foreground text-muted-foreground",
            )}
          >
            {isOpen ? "✓" : ""}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 1000}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0">{content}</div>
      </div>
    </div>
  )
}
