export interface App {
  id: string
  slug: string
  title: string
  description: string
  image: string
  version: string
  size: string
  category: string
  developer: string
  lastUpdated: string
  downloads: number
  rating: number
  tags: string[]
  features: string[]
  requirements: {
    android: string
    storage: string
  }
  contentPath: string
  screenshots: string[]
  content: string
}

export interface AppMeta {
  id: string
  slug: string
  title: string
  description: string
  image: string
  category: string
  lastUpdated: string
  rating: number
  downloads: number
}

