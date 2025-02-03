import { AppCard } from "@/components/app-card"
import { SEO } from "@/components/seo"
import { getAllApps } from "@/lib/api"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""
  const allApps = await getAllApps()
  const searchResults = allApps.filter(
    (app) =>
      app.title.toLowerCase().includes(query.toLowerCase()) ||
      app.description.toLowerCase().includes(query.toLowerCase()) ||
      app.category.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title={`Search Results for "${query}" | Mini APK`}
        description={`Find Android apps and games matching your search for "${query}" on Mini APK.`}
        canonical={`/search?q=${encodeURIComponent(query)}`}
      />
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((app) => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          No results found for "{query}". Try a different search term.
        </p>
      )}
    </div>
  )
}

