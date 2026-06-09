interface Props {
  className?: string
  title: string
  description: string
  createdAt: Date
}

function formatRelativeDate(date: Date) {
  const diff = Date.now() - date.getTime()

  const hours = Math.floor(diff / (1000 * 60 * 60))

  if (hours < 1) return "Just now"
  if (hours < 24) return `${hours}h ago`

  const days = Math.floor(hours / 24)

  if (days === 1) return "Yesterday"

  return `${days}d ago`
}

export function NoteItem({ title, description, createdAt, className }: Props) {
  return (
    <article className={`flex flex-col gap-0.5 ${className || ""}`}>
      <h3 className="text-lg font-semibold tracking-wider">{title}</h3>
      <p className="text-sm text-muted-foreground font-medium">{description}</p>
      <p className="text-xs text-muted-foreground">
        <time dateTime={createdAt.toISOString()}>{formatRelativeDate(createdAt)}</time>
      </p>
    </article>
  )
}
