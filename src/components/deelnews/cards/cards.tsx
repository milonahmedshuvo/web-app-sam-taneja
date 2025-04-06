import { Card } from "antd"
import card from '../../../image/card.jpg'

interface StatsCardProps {
  value: string
  label: string
  color?: string
}

export function StatsCard({ value, label, color = "#1e40af" }: StatsCardProps) {
  return (
    <Card className="!bg-no-repeat !bg-cover !bg-center !w-[400px]" style={{backgroundImage: `url("${card.src}")`}} >
      <div className="p-6 md:p-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1" style={{ color }}>
            {value}
          </h3>
          <p className="text-sm md:text-base text-gray-700">{label}</p>
        </div>
      </div>
    </Card>
  )
}

