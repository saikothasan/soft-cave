import Link from "next/link"
import { SEO } from "@/components/seo"
import { getCategories } from "@/lib/api"

export default async function SitemapPage() {
  const categories = await getCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Sitemap"
        description="Browse the sitemap of Mini APK to easily navigate through our website and find the content you're looking for."
        canonical="/sitemap"
      />
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/editors-choice" className="hover:underline">
                Editor's Choice
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/category/${category.toLowerCase()}`} className="hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

