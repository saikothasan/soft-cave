import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function AppScreenshots() {
  // In a real app, these would come from the app data
  const screenshots = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg">
      <div className="flex gap-4 p-4">
        {screenshots.map((screenshot, i) => (
          <Image
            key={i}
            src={screenshot || "/placeholder.svg"}
            alt={`Screenshot ${i + 1}`}
            width={180}
            height={320}
            className="rounded-lg border aspect-[9/16] object-cover"
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

