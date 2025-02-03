import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { App, AppMeta } from "./types"

const appsDirectory = path.join(process.cwd(), "content/apps")

export async function getAppBySlug(slug: string): Promise<App | null> {
  try {
    const fullPath = path.join(appsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      ...data,
      slug,
      content,
    } as App
  } catch (error) {
    return null
  }
}

export async function getAllApps(): Promise<AppMeta[]> {
  const files = fs.readdirSync(appsDirectory)
  const apps = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(appsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)
      const slug = file.replace(/\.md$/, "")

      return {
        ...data,
        slug,
      } as AppMeta
    })

  return apps.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
}

export async function getAppsByCategory(category: string): Promise<AppMeta[]> {
  const allApps = await getAllApps()
  return allApps.filter((app) => app.category.toLowerCase() === category.toLowerCase())
}

export async function getRelatedApps(category: string, currentSlug: string, limit = 3): Promise<AppMeta[]> {
  const allApps = await getAllApps()
  return allApps.filter((app) => app.category === category && app.slug !== currentSlug).slice(0, limit)
}

export async function getCategories(): Promise<string[]> {
  const allApps = await getAllApps()
  const categories = new Set(allApps.map((app) => app.category))
  return Array.from(categories).sort()
}

export async function getEditorChoiceApps(limit = 6): Promise<AppMeta[]> {
  const allApps = await getAllApps()
  // In a real-world scenario, you might have a specific field for editor's choice
  // For this example, we'll just return the top rated apps
  return allApps.sort((a, b) => b.rating - a.rating).slice(0, limit)
}

