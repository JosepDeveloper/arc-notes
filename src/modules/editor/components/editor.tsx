import YooptaEditor, { createYooptaEditor } from "@yoopta/editor"
import { Bold, Italic } from "@yoopta/marks"
import Paragraph from "@yoopta/paragraph"
import { useEffect, useState } from "react"

const plugins = [Paragraph]
const marks = [Bold, Italic]

export function Editor() {
  // biome-ignore lint/suspicious/noExplicitAny: false positive
  const [editor, setEditor] = useState<any>(null)

  useEffect(() => {
    setEditor(createYooptaEditor({ plugins, marks, value: undefined }))
  }, [])

  if (!editor) return null

  return (
    <YooptaEditor
      editor={editor}
      onChange={(value) => console.log(value)}
      style={{
        paddingBottom: 100,
      }}
      placeholder="Type something..."
    />
  )
}
