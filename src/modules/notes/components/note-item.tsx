interface Props {
  className?: string
  title: string
  description: string
  createdAt: Date
}

function formatRelativeDate(date: Date) {
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(hours / 24)

  if (hours < 1) return "Just now"
  if (hours < 24) return `${hours}h ago`
  if (days === 1) return "Yesterday"
  if (days < 7) return `${days}d ago`

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  })
}

export function NoteItem({ title, description, createdAt, className }: Props) {
  return (
    <article className={`flex flex-col gap-0.5 ${className || ""}`}>
      <h3 className="text-lg font-semibold tracking-wider">{title}</h3>
      <p className="text-sm text-muted-foreground font-medium">{description}</p>
      <p className="text-xs text-muted-foreground">
        <time dateTime={createdAt.toString()}>{formatRelativeDate(createdAt)}</time>
      </p>
    </article>
  )
}
