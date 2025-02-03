"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold">
          Mini APK
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search apps..."
              className="w-64 pr-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="sm" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/about" className="hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-gray-200">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-gray-200">
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#8BC34A] shadow-md md:hidden">
          <ul className="flex flex-col py-2">
            <li>
              <Link href="/about" className="block px-4 py-2 hover:bg-[#7CB342]">
                About
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="block px-4 py-2 hover:bg-[#7CB342]">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="block px-4 py-2 hover:bg-[#7CB342]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="block px-4 py-2 hover:bg-[#7CB342]">
                Sitemap
              </Link>
            </li>
          </ul>
          <form onSubmit={handleSearch} className="px-4 py-2">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search apps..."
                className="w-full pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="sm" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
          <div className="px-4 py-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </div>
  )
}

