import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AppCard } from "@/components/app-card"
import { NewsletterSubscribe } from "@/components/newsletter-subscribe"
import { SEO } from "@/components/seo"
import { getAllApps, getEditorChoiceApps } from "@/lib/api"

export default async function Home() {
  const allApps = await getAllApps()
  const featuredApp = allApps[0] // Assuming the first app is the featured one
  const editorsChoice = await getEditorChoiceApps(3)
  const featuredGames = allApps.filter((app) => app.category === "Games").slice(0, 3)

  return (
    <div className="flex flex-col">
      <SEO
        title="Download Free Android Apps"
        description="Mini APK is your go-to source for downloading free Android apps and games. Discover the latest and most popular applications for your device."
        canonical="/"
      />

      <div className="bg-gradient-to-r from-primary to-primary-foreground text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Download Free Android Apps</h1>
          <div className="max-w-xl mx-auto flex gap-2">
            <Input placeholder="Search apps..." className="bg-white text-black" />
            <Button variant="secondary">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured App</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AppCard {...featuredApp} />
            <div>
              <h3 className="text-xl font-semibold mb-4">{featuredApp.title}</h3>
              <p className="text-muted-foreground mb-4">{featuredApp.description}</p>
              <Link href={`/app/${featuredApp.slug}`}>
                <Button>Learn More</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Editor's Choice</h2>
            <Link href="/editors-choice" className="text-sm text-muted-foreground hover:text-primary">
              View All
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorsChoice.map((app) => (
              <AppCard key={app.id} {...app} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Games</h2>
            <Link href="/category/games" className="text-sm text-muted-foreground hover:text-primary">
              View All
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((app) => (
              <AppCard key={app.id} {...app} />
            ))}
          </div>
        </section>

        <NewsletterSubscribe />
      </div>
    </div>
  )
}

