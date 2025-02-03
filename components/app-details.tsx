import type { App } from "@/lib/types"

interface AppDetailsProps {
  app: App
}

export function AppDetails({ app }: AppDetailsProps) {
  return (
    <div className="grid gap-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">About this app</h2>
        <p className="text-muted-foreground">{app.description}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Key Features</h3>
        <ul className="grid gap-2 text-sm">
          {app.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

