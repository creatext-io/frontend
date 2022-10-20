import {
  $getRoot,
  $getSelection,
  $createParagraphNode,
  $createTextNode,
  LexicalCommand,
  createCommand,
  $isRangeSelection,
  COMMAND_PRIORITY_EDITOR,
} from "lexical";
import { useCallback, useEffect, useState } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createColoredNode, ColoredNode } from "./SuggestionNode";
import { EmoticonNode } from "./EmoticonNode";
import EmoticonPlugin from "./EmoticonPlugin";

const theme = {
  // Theme styling goes here
  // ...
};

const INSERT_SUGGESTION: LexicalCommand<void> = createCommand();

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();
  });
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
    setActiveEditor(editor);
    console.log("setting active editor");
  }, [editor]);

  const applyStyleText = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();

      if (!$isRangeSelection(selection)) {
        return false;
      }

      const focusNode = selection.focus.getNode();

      if (focusNode !== null) {
        const horizontalRuleNode = $createVideoNode("231");
        console.log(horizontalRuleNode);
        // selection.insertParagraph();
        selection.insertNodes([horizontalRuleNode]);
        // selection.focus
        //   .getNode()
        //   .getTopLevelElementOrThrow()
        //   .insertBefore(horizontalRuleNode);
      }
    });
  }, [editor]);

  const addSuggestionToEditor = () => {
    // Inside the `editor.update` you can use special $ prefixed helper functions.
    // These functions cannot be used outside the closure, and will error if you try.
    // (If you're familiar with React, you can imagine these to be a bit like using a hook
    // outside of a React function component).
  };
  return <button onClick={() => applyStyleText()}>Auto suggest</button>;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [ColoredNode, EmoticonNode],
  };

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text...</div>}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <EmoticonPlugin />
      </LexicalComposer>
    </>
  );
}

export default Editor;
