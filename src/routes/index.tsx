import { Button } from "@/modules/core/components/design-system/button"
import { Editor } from "@/modules/editor/components/editor"
import { ClientOnly, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>

      <Button>Click me</Button>

      <ClientOnly fallback={<p>Loading</p>}>
        <Editor />
      </ClientOnly>
    </div>
  )
}
