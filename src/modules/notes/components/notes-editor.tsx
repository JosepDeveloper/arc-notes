import { Skeleton } from "@/modules/core/components/design-system/skeleton"

type Props = {
  className?: string
}

export function NotesEditor({ className }: Props) {
  return (
    <section className={className}>
      <Skeleton className="h-full w-full" />
    </section>
  )
}
