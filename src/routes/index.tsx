import { Separator } from "@/modules/core/components/design-system/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/modules/core/components/design-system/sidebar"
import { NotesWorkspaces } from "@/modules/notes/components/notes-workspaces"
import { AppSidebar } from "@/modules/ui-shell/components/app-sidebar"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="rounded-xl overflow-hidden">
        <div className="flex h-full flex-col overflow-hidden">
          <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2" />
          </header>

          <div className="flex-1 overflow-hidden">
            <NotesWorkspaces />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
