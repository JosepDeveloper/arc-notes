import { Separator } from "@/modules/core/components/design-system/separator"
import { NoteItem } from "./note-item"

const notesMock = [
  {
    title: "Project Architecture",
    description: "Define feature-based modules, shared UI components, and data access boundaries.",
    createdAt: new Date(),
  },
  {
    title: "Meeting Notes",
    description: "Reviewed authentication flow, note syncing, and offline-first requirements.",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    title: "CS2 Practice Routine",
    description: "15 min aim training, 20 min DM, 5 Premier matches, review demos afterward.",
    createdAt: new Date(Date.now() - 24 * 3 * 60 * 60 * 1000),
  },
  {
    title: "Shopping List",
    description: "Coffee beans, monitor arm, USB-C cable, keyboard switches, desk mat.",
    createdAt: new Date(Date.now() - 24 * 5 * 60 * 60 * 1000),
  },
]

export function NotesList() {
  return (
    <section>
      <ul className="flex flex-col ">
        {notesMock.map((note) => (
          <li key={note.title}>
            <NoteItem {...note} className="p-4" />
            <Separator />
          </li>
        ))}
      </ul>
    </section>
  )
}
