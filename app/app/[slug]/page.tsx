import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AppCard } from "@/components/app-card"
import { MarkdownContent } from "@/components/markdown-content"
import { getAppBySlug, getRelatedApps } from "@/lib/api"
import { AppDetails } from "@/components/app-details"
import { AppScreenshots } from "@/components/app-screenshots"
import { ShareButton } from "@/components/share-button"
import { ReportButton } from "@/components/report-button"
import { SEO } from "@/components/seo"

interface AppPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const app = await getAppBySlug(params.slug)

  if (!app) {
    return {
      title: "App Not Found | Mini APK",
    }
  }

  return {
    title: `Download ${app.title} ${app.version} APK | Mini APK`,
    description: app.description,
    openGraph: {
      title: `Download ${app.title} ${app.version} APK`,
      description: app.description,
      images: [app.image],
    },
  }
}

export default async function AppPage({ params }: AppPageProps) {
  const app = await getAppBySlug(params.slug)

  if (!app) {
    notFound()
  }

  const relatedApps = await getRelatedApps(app.category, params.slug)

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`Download ${app.title} ${app.version} APK`}
        description={app.description}
        canonical={`/app/${params.slug}`}
        ogImage={app.image}
      />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            <div>
              <div className="bg-card rounded-lg border p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden">
                    <Image
                      src={app.image || "/placeholder.svg"}
                      alt={app.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h1 className="text-2xl font-bold mb-2">{app.title}</h1>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{app.developer}</span>
                          <span>•</span>
                          <span>{app.category}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShareButton />
                        <ReportButton />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 fill-primary text-primary" />
                        <span className="ml-1 font-semibold">{app.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{app.downloads.toLocaleString()} downloads</div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button size="lg" className="w-full md:w-auto">
                      <Download className="w-4 h-4 mr-2" />
                      Download APK v{app.version}
                    </Button>
                  </div>
                </div>

                {app.screenshots && app.screenshots.length > 0 && <AppScreenshots screenshots={app.screenshots} />}

                <Separator className="my-6" />

                <AppDetails app={app} />

                <Separator className="my-6" />

                {app.content ? (
                  <MarkdownContent content={app.content} />
                ) : (
                  <p className="text-muted-foreground">No additional content available for this app.</p>
                )}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-card rounded-lg border p-4">
                <h2 className="font-semibold mb-4">App Info</h2>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <dt className="text-muted-foreground">Version</dt>
                  <dd className="text-right font-medium">{app.version}</dd>
                  <dt className="text-muted-foreground">Size</dt>
                  <dd className="text-right font-medium">{app.size}</dd>
                  <dt className="text-muted-foreground">Android</dt>
                  <dd className="text-right font-medium">{app.requirements.android}</dd>
                  <dt className="text-muted-foreground">Updated</dt>
                  <dd className="text-right font-medium">{app.lastUpdated}</dd>
                </dl>
              </div>

              <div>
                <h2 className="font-semibold mb-4">Related Apps</h2>
                <div className="grid gap-4">
                  {relatedApps.map((app) => (
                    <AppCard key={app.id} {...app} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

