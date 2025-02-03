import { notFound } from "next/navigation"
import { AppCard } from "@/components/app-card"
import { SEO } from "@/components/seo"
import { getAppsByCategory, getCategories } from "@/lib/api"

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    slug: category.toLowerCase(),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  return {
    title: `${category} Apps | Mini APK`,
    description: `Download free ${category} apps for Android. Find the latest and most popular ${category} applications on Mini APK.`,
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  const apps = await getAppsByCategory(category)

  if (apps.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title={`${category} Apps`}
        description={`Download free ${category} apps for Android. Find the latest and most popular ${category} applications on Mini APK.`}
        canonical={`/category/${params.slug}`}
      />
      <h1 className="text-3xl font-bold mb-6">{category} Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  )
}

