import { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import Switch from "react-switch";
import _ from "lodash";
import "./App.css";
import "quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const tools = [["bold", "italic", "underline"]];

const apiKey = import.meta.env.VITE_APP_API;

const API = apiKey;

const getDocumentById = (docId: string) => {
  return axios.get(`${import.meta.env.VITE_BASE_API}/document/${docId}`);
};

const removeAutoCompleteElement = () => {
  const autoCompleteElement = document.querySelectorAll(".ql-editor p span");
  (autoCompleteElement as NodeListOf<HTMLElement>).forEach((el) => {
    if (el.style.color === "rgba(117, 117, 117, 0.3)") {
      el.remove();
    }
  });
};

function App() {
  const { docId } = useParams();
  const editorText = useRef("");
  const autoComplete = useRef("");
  const keyStroke = useRef(true);
  const quillRef: any = useRef(null);
  const signalRef: any = useRef(null);
  const [multiLine, setMultiLine] = useState(false);

  const cleanText = (str: any) => {
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  const replaceNbsps = (str: any) => {
    return str.replace(/&(nbsp|amp|quot|lt|gt);/g, " ");
  };

  const createEventListeners = () => {
    const quill = quillRef.current.editingArea;
    quill.addEventListener("keydown", (e: any) => {
      if (autoComplete.current) {
        if (e.keyCode == "9") {
          e.preventDefault();

          const autoCompleted = autoComplete.current;
          removeAutoCompleteElement();

          var n = document
            .querySelector(".ql-editor")
            ?.innerHTML.lastIndexOf("</p>");
          var str2 =
            document.querySelector(".ql-editor")?.innerHTML.substring(0, n) +
            autoCompleted.trim() +
            document.querySelector(".ql-editor")?.innerHTML.substring(n || 0);

          quillRef.current.editor.clipboard.dangerouslyPasteHTML(str2, "api");
          autoComplete.current = "";
          quillRef.current.editor.setSelection(
            editorText.current.length + autoCompleted.length
          );
        } else {
          console.log("NOT TAB KEYYYY");
          removeAutoCompleteElement();
          const space = "&nbsp;";
          quillRef.current.editor.clipboard.dangerouslyPasteHTML(
            document.querySelector(".ql-editor")?.innerHTML + space
          );
          autoComplete.current = "";
          quillRef.current.editor.setSelection(editorText.current.length);
        }
      } else {
        keyStroke.current = true;
      }
    });

    window.addEventListener("click", (e: any) => {
      if (autoComplete.current) {
        quillRef.current.editor.clipboard.dangerouslyPasteHTML(
          editorText.current
        );
        autoComplete.current = "";
        quillRef.current.editor.setSelection(editorText.current.length);
      }
    });
  };

  useEffect(() => {
    createEventListeners();

    if (docId) {
      getDocumentById(docId).then((res) => {
        console.log(res, "GET DOC BY ID");
        editorText.current = res.data.data[0].body;
        quillRef.current.editor.clipboard.dangerouslyPasteHTML(
          res.data.data[0].body
        );
      });
    }
  }, []);

  const handleFetch = async (val: any) => {
    const selection = quillRef.current.unprivilegedEditor.getSelection();
    if (!keyStroke.current || !val) {
      return;
    }
    const text = replaceNbsps(cleanText(val));
    const payload = {
      text: text.trim(),
      multi_line: multiLine,
    };

    /*
      Abort if the cursor is not at the end of the current text.
    */
    if (selection.index !== text.length) {
      return;
    }

    signalRef.current = new AbortController();
    const data = await fetch(API, {
      signal: signalRef.current.signal,
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const value = await data.json();
    /*
      Checking if there is even a completion at all from the API
    */
    if (value.completion) {
      editorText.current = text;
      autoComplete.current = value.completion.trim();
      // innerHTML is <p>  content here   </p>
      var n = val.lastIndexOf("</p>");
      var str2 =
        val.substring(0, n) +
        `<span style="color: rgba(117, 117, 117, 0.3);" data-attr="sdsd">${value.completion.trim()}</span>` +
        val.substring(n);

      console.log(document.querySelector(".ql-editor")?.innerHTML, "innerhtml");
      quillRef.current.editor.clipboard.dangerouslyPasteHTML(str2, "api");
      quillRef.current.editor.setSelection(text.length);
      keyStroke.current = false;
    }
  };

  const debounceHandleFetch = _.debounce(handleFetch, 1000);

  const handleChange = (val: string) => {
    if (signalRef.current) {
      signalRef.current.abort();
    }
    debounceHandleFetch(val);
  };
  console.log(
    editorText,
    quillRef.current,
    document.querySelector(".ql-editor")?.innerHTML
  );
  return (
    <>
      <section className="p-8">
        <div className="App max-w-3xl flex flex-col mx-auto my-0 rounded-lg bg-white">
          <label className="multi-suggestion flex items-center mt-1">
            <span className="mr-3 text-sm">multi line suggestions</span>
            {/* <Switch onChange={(val) => setMultiLine(val)} checked={multiLine} /> */}
            <Switch
              checked={multiLine}
              onChange={(val) => setMultiLine(val)}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={14}
              width={40}
              className="react-switch"
              id="material-switch"
            />
          </label>
          <ReactQuill
            placeholder="start writing something..."
            className="w-full quill-container"
            onChangeSelection={(e: any) => {
              if (
                autoComplete.current &&
                e.index >= editorText.current.length
              ) {
                quillRef.current.editor.setSelection(editorText.current.length);
              }
            }}
            modules={{
              toolbar: tools,
              history: {
                userOnly: true,
              },
            }}
            ref={quillRef}
            onChange={handleChange}
            defaultValue={editorText.current}
          />
        </div>
      </section>

      <footer className="flex justify-center sticky mt-4">
        2022 @ scrible
      </footer>
    </>
  );
}

export default App;
