//React hooks for managing state, lifecycle events, and references to DOM elements
import { useState, useEffect, useRef } from 'react'
//hooks used to create and manage the editor.
import { EditorContent, useEditor, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// Higlight extension use for text highlighting
import Highlight from '@tiptap/extension-highlight'
// CodeBlock  extension for adding syntax highlighting for code blocks
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
// Lowlight extension use for core highlighting utility
import { lowlight } from 'lowlight/lib/core'
import ts from 'highlight.js/lib/languages/typescript'
import js from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import { Button } from "/components/ui/button"
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, Bold, Italic, Underline, Strikethrough, Code, Star } from "lucide-react"

//  for Syntax Highlighting 
//  These three programming languages (TypeScript, JavaScript, and CSS)  are use for syntax highlighting in code blocks.
lowlight.registerLanguage('typescript', ts)
lowlight.registerLanguage('javascript', js)
lowlight.registerLanguage('css', css)

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: '<p>Hello World! 🌍</p>',
  })
   
 // Check null for ensures the editor instance is initialized before rendering
  if (!editor) {
    return null
  }

  return (
    <div className="p-4">
      {/* Creates a horizontal toolbar (flex) with spacing between buttons and bottom margin. */}
      <div className="flex space-x-2 mb-4">
         {/* Button for textalign left */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'bg-gray-100' : ''}
        >
          <AlignLeft className="h-4 w-4" />
        </Button>

        {/* Button for textalign center */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'bg-gray-100' : ''}
        >
          <AlignCenter className="h-4 w-4" />
        </Button>

        {/* Button for textalign right */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'bg-gray-100' : ''}
        >
          <AlignRight className="h-4 w-4" />
        </Button>
             
             {/* Button for textalign justify */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-100' : ''}
        >
          <AlignJustify className="h-4 w-4" />
        </Button>

        {/* Button for making text bold */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'bg-gray-100' : ''}
        >
          <Bold className="h-4 w-4" />
        </Button>

        {/* Button for making text italic */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'bg-gray-100' : ''}
        >
          <Italic className="h-4 w-4" />
        </Button>

        {/* Button for text Underline */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'bg-gray-100' : ''}
        >
          <Underline className="h-4 w-4" />
        </Button>

        {/* Button for strike */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'bg-gray-100' : ''}
        >
          <Strikethrough className="h-4 w-4" />
        </Button>

        {/* Button for highlighting text  */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? 'bg-gray-100' : ''}
        >
          <Star className="h-4 w-4" />
        </Button>

         {/* Button for toggles a syntax-highlighted code block */}
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'bg-gray-100' : ''}
        >
          <Code className="h-4 w-4" />
        </Button>
      </div>
      <EditorContent editor={editor} className="border p-4 rounded-lg" />
    </div>
  )
}

export default TiptapEditor