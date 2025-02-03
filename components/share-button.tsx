"use client"

import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ShareButton() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const shareOptions = [
    {
      name: "Copy Link",
      action: () => {
        navigator.clipboard.writeText(shareUrl)
      },
    },
    {
      name: "Share on Twitter",
      action: () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`)
      },
    },
    {
      name: "Share on Facebook",
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
      },
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {shareOptions.map((option) => (
          <DropdownMenuItem key={option.name} onClick={option.action}>
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

