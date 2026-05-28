import YooptaEditor, { createYooptaEditor } from "@yoopta/editor"
import { Bold, Italic } from "@yoopta/marks"
import Paragraph from "@yoopta/paragraph"
import { useMemo } from "react"

const plugins = [Paragraph]
const marks = [Bold, Italic]

export function Editor() {
  const editor = useMemo(() => createYooptaEditor({ plugins, marks, value: undefined }), [])

  return (
    <YooptaEditor
      editor={editor}
      style={{
        paddingBottom: 100,
      }}
      placeholder="Type something..."
    />
  )
}
