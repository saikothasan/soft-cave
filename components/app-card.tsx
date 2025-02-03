import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AppCardProps {
  title: string
  image: string
  category: string
  rating: number
  downloads: number
  slug: string
}

export function AppCard({ title, image, category, rating, downloads, slug }: AppCardProps) {
  return (
    <div className="group relative bg-card rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/app/${slug}`} className="absolute inset-0">
        <span className="sr-only">View {title}</span>
      </Link>
      <div className="aspect-[4/3] relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold group-hover:text-primary line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between mt-2 mb-3">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-primary text-primary mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{downloads.toLocaleString()} downloads</p>
        <Button className="w-full" variant="secondary">
          Download Now
        </Button>
      </div>
    </div>
  )
}

