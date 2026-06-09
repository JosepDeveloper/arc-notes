import { Separator } from "@/modules/core/components/design-system/separator"
import { NotesEditor } from "./notes-editor"
import { NotesSidebar } from "./notes-sidebar"

type Props = {
  className?: string
}

export function NotesWorkspaces({ className }: Props) {
  return (
    <section className={`h-full grid grid-cols-[1fr_2fr] ${className || ""}`}>
      <div className="flex h-full">
        <NotesSidebar className="h-full w-full" />
        <Separator orientation="vertical" className="" />
      </div>
      <div className="h-full w-full">
        <NotesEditor className="h-full w-full p-4" />
      </div>
    </section>
  )
}
