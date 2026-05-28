import { Separator } from "@/modules/core/components/design-system/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/modules/core/components/design-system/sidebar"
import { AppSidebar } from "@/modules/ui-shell/components/app-sidebar"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 " />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="aspect-video h-12 w-full rounded-lg bg-muted/50" />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
