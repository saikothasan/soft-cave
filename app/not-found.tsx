import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { CategoryNav } from "@/components/category-nav"
import { SEO } from "@/components/seo"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Please check the URL or go back to the homepage."
        canonical="/404"
      />
      <header className="border-b">
        <div className="bg-[#8BC34A] text-white">
          <div className="container mx-auto px-4">
            <MainNav />
          </div>
        </div>
        <div className="container mx-auto px-4 py-2">
          <CategoryNav />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-4xl font-bold mt-4 mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for no longer exists. Perhaps you can return back to the site's{" "}
            <Link href="/" className="text-primary hover:underline">
              homepage
            </Link>{" "}
            and see if you can find what you are looking for.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

