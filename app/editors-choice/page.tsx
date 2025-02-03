import { AppCard } from "@/components/app-card"
import { SEO } from "@/components/seo"
import { getEditorChoiceApps } from "@/lib/api"

export default async function EditorsChoicePage() {
  const editorChoiceApps = await getEditorChoiceApps(12)

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Editor's Choice Apps"
        description="Discover the best Android apps handpicked by our editors. Download top-rated and highly recommended applications from Mini APK."
        canonical="/editors-choice"
      />
      <h1 className="text-3xl font-bold mb-6">Editor's Choice Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {editorChoiceApps.map((app) => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  )
}

