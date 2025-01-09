import { useState, useEffect } from 'react'
import { EditorContent, useEditor, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Underline } from '@tiptap/extension-basic-marks'
import { Button } from 'lucide-react'

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
    ],
    content: localStorage.getItem('content') || '<p>Hello World!</p>',
  })

  useEffect(() => {
    if (editor) {
      const content = editor.getHTML()
      localStorage.setItem('content', content)
    }
  }, [editor])

  const saveContent = () => {
    if (editor) {
      const content = editor.getHTML()
      localStorage.setItem('content', content)
      alert('Content saved!')
    }
  }

  const loadContent = () => {
    if (editor) {
      const content = localStorage.getItem('content') || '<p>Hello World!</p>'
      editor.commands.setContent(content)
      alert('Content loaded!')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`px-2 py-1 rounded ${editor?.isActive('bold') ? 'bg-gray-200' : 'bg-white'}`}
          >
            <Button className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 rounded ${editor?.isActive('italic') ? 'bg-gray-200' : 'bg-white'}`}
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className={`px-2 py-1 rounded ${editor?.isActive('underline') ? 'bg-gray-200' : 'bg-white'}`}
          >
            <Underline className="w-4 h-4" />
          </button>
        </div>
        <div className="flex space-x-2">
          <button onClick={saveContent} className="px-2 py-1 rounded bg-blue-500 text-white">
            Save
          </button>
          <button onClick={loadContent} className="px-2 py-1 rounded bg-green-500 text-white">
            Load
          </button>
        </div>
      </div>
      <EditorContent editor={editor} className="border p-4 rounded min-h-[300px] prose" />
    </div>
  )
}
export default RichTextEditor