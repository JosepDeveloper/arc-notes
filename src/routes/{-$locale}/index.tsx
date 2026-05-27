import { Button } from "@/modules/core/components/design-system/button"
import { Editor } from "@/modules/editor/components/editor"
import { ClientOnly, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/{-$locale}/")({
  component: Home,
})

const content = {
  en: {
    title: "Welcome to TanStack Start",
    button: "Click me",
    loading: "Loading",
  },
  es: {
    title: "Bienvenido a TanStack Start",
    button: "Haz clic aquí",
    loading: "Cargando",
  },
  fr: {
    title: "Bienvenue sur TanStack Start",
    button: "Cliquez ici",
    loading: "Chargement",
  },
} as const

function Home() {
  type Locale = keyof typeof content

  const { locale } = Route.useParams()

  function isLocale(value: string): value is Locale {
    return value in content
  }

  const currentLocale: Locale = locale && isLocale(locale) ? locale : "en"

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{content[currentLocale].title}</h1>

      <Button>{content[currentLocale].button}</Button>

      <ClientOnly fallback={<p>{content[currentLocale].loading}</p>}>
        <Editor />
      </ClientOnly>
    </div>
  )
}
