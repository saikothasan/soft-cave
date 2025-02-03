import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Mini APK</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Mini APK is your trusted source for downloading free Android apps and games. We provide a safe and easy
              way to discover and install the latest applications.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/games" className="text-sm hover:underline">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/category/social" className="text-sm hover:underline">
                  Social
                </Link>
              </li>
              <li>
                <Link href="/category/productivity" className="text-sm hover:underline">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="text-sm hover:underline">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Mini APK. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

