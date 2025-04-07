import type { LucideIcon } from "lucide-react"

interface ValuesCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ValuesCard({ title, description, icon: Icon }: ValuesCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center pb-24">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-[#4863AC]" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

