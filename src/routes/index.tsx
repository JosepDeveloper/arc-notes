import { Separator } from "@/modules/core/components/design-system/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/modules/core/components/design-system/sidebar"
import { Skeleton } from "@/modules/core/components/design-system/skeleton"
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
        <div className="flex h-dvh flex-col overflow-hidden">
          <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2" />
          </header>

          <div className="flex-1 p-4 overflow-hidden">
            <Skeleton className="h-full w-full rounded-lg" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
