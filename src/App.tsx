import { useEffect, useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import _ from 'lodash'
import './App.css'
import 'quill/dist/quill.snow.css';

const tools = [
  ['bold', 'italic', 'underline'],
];

const API = 'https://api.scrible.page/auto-complete' // move to env

function App() {
  const editorText = useRef('')
  const autoComplete = useRef('');
  const keyStroke = useRef(true);
  const quillRef: any = useRef(null);

  const cleanText = (str: any) => {
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  const replaceNbsps = (str: any) => {
    return str.replace(/&(nbsp|amp|quot|lt|gt);/g, " ");
  }

  const createEventListeners = () => {
    const quill = quillRef.current.editingArea;
    quill.addEventListener('keydown', (e: any) => {
      if (autoComplete.current) {
        if (e.keyCode == '9') {
          const autoCompleted = autoComplete.current
          quillRef.current.editor.clipboard.dangerouslyPasteHTML(editorText.current + autoCompleted)
          autoComplete.current = '';
          quillRef.current.editor.setSelection(editorText.current.length + autoCompleted.length)
        }
        else {
          const space = '&nbsp;'
          quillRef.current.editor.clipboard.dangerouslyPasteHTML(editorText.current + space)
          autoComplete.current = '';
          quillRef.current.editor.setSelection(editorText.current.length);
        }
      }
      else {
        keyStroke.current = true;
      }
    })
  }

  useEffect(() => {
    createEventListeners()
  }, [])


  const handleFetch = async (val: any) => {
    if (!keyStroke.current || !val) {
      return;
    }
    const text = replaceNbsps(cleanText(val))
    const payload = {
      text: text.trim()
    }
    const data = await fetch(API, {
      method: 'POST', body: JSON.stringify(payload), headers: {
        'Content-Type': 'application/json'
      }
    })
    const value = await data.json();
    editorText.current = text;
    autoComplete.current = value.completion.trim();
    quillRef.current.editor.clipboard.dangerouslyPasteHTML(text + `<b style="color: rgba(117, 117, 117, 0.3);">${value.completion.trim()}</b>`)
    quillRef.current.editor.setSelection(text.length)
    keyStroke.current = false;
  }

  const debounceHandleFetch = _.debounce(handleFetch, 1000)


  return (
    <>
    <section className='p-8'>
      <div className="App max-w-3xl flex flex-col mx-auto my-0 rounded-lg bg-white">
        <ReactQuill 
          placeholder='start writing soomething...'
          className='w-full quill-container' 
          onChangeSelection={(e) => { 
            if (autoComplete.current) { 
              quillRef.current.editor.setSelection(editorText.current.length)
            } 
          }}
          modules={{ toolbar: tools }} 
          ref={quillRef} 
          onChange={debounceHandleFetch} 
        />
      </div>
    </section>
    <footer className='flex justify-center sticky mt-4'>2022 @ scrible</footer>
    </>
  )
}

export default App
