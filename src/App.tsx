import { useEffect, useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import _ from 'lodash'
import './App.css'
import 'quill/dist/quill.snow.css';

const tools = [
	['bold', 'italic', 'underline', 'strike'],
  [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color']}]
];

const API = 'https://www.scrible.page/auto-complete' // move to env

function App() {
  const editorText = useRef('')
  const autoComplete = useRef(''); 
  const keyStroke = useRef(true);
  const quillRef: any = useRef(null);

  const  cleanText = (str: any) => {
    return str.replace( /(<([^>]+)>)/ig, '');
  }

  const replaceNbsps = (str: any) => {
    return str.replace(/&(nbsp|amp|quot|lt|gt);/g, " ");
  }

  const createEventListeners = () => {
    const quill = quillRef.current.editingArea;
    quill.addEventListener('keydown', (e) => {
      if(autoComplete.current) {
        if(e.keyCode == '9') {
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
    if(!keyStroke.current || !val) {
      return;
    }
    const text = replaceNbsps(cleanText(val))
    const payload = {
      text: text.trim()
    }
    const data = await fetch(API, {method: 'POST', body: JSON.stringify(payload),  headers: {
      'Content-Type': 'application/json'
    }})
    const value = await data.json();
    editorText.current = text;
    autoComplete.current = value.completion.trim();
    quillRef.current.editor.clipboard.dangerouslyPasteHTML(text + `<b style="color: rgba(117, 117, 117, 0.3);">${value.completion.trim()}</b>`)
    quillRef.current.editor.setSelection(text.length)
    keyStroke.current = false;
  }

  const debounceHandleFetch = _.debounce(handleFetch, 1000)


  return (
    <div className="App">
      <ReactQuill onChangeSelection={(e) => {if(autoComplete.current) {quillRef.current.editor.setSelection(editorText.current.length)}}} modules={{toolbar: tools}} ref={quillRef} onChange={debounceHandleFetch} />
    </div>
  )
}

export default App
