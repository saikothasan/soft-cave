"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, MessageCircle, GraduationCap, Tv, Gamepad2, Music, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { name: "Communication", icon: MessageCircle, href: "/category/communication" },
    { name: "Education", icon: GraduationCap, href: "/category/education" },
    { name: "Entertainment", icon: Tv, href: "/category/entertainment" },
    { name: "Games", icon: Gamepad2, href: "/category/games" },
    { name: "Music", icon: Music, href: "/category/music" },
    { name: "Video Editor", icon: Video, href: "/category/video-editor" },
  ]

  return (
    <nav className="py-2">
      <div className="md:hidden">
        <Button variant="outline" className="w-full justify-between" onClick={() => setIsOpen(!isOpen)}>
          Categories
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </Button>
        {isOpen && (
          <ul className="mt-2 border rounded-md shadow-sm">
            {categories.map((category) => (
              <li key={category.name} className="border-b last:border-b-0">
                <Link
                  href={category.href}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="hidden md:flex flex-wrap gap-6">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              href={category.href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

