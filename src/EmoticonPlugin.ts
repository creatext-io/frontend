import { useEffect, useRef } from "react";
import { $createEmoticonNode } from "./EmoticonNode";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  $getSelection,
  LexicalEditor,
  TextNode,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Transform } from "lexical/LexicalEditor";
import { $createColoredNode } from "./SuggestionNode";

function emoticonTransform(node: TextNode) {
  const textContent = node.getTextContent();
  console.log(textContent, "this is runnign")
  if (textContent === ":)") {
    // node.replace($createColoredNode("This is a suggestion", "grey"));
    node.insertAfter($createColoredNode("This is a suggestion", "grey"))
  }
}

function useEmoticons(editor: LexicalEditor) {
  const ref =  useRef({
    count: 0
  })
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      TextNode,
      (node) => {
        const textContent = node.getTextContent();
        console.log(textContent, "this is runnign")
        if (textContent === "Hey" && ref.current.count === 0) {
          
          ref.current.count = ref.current.count + 1 
          // node.replace($createColoredNode("This is a suggestion", "grey"));
          node.insertAfter($createColoredNode("This is a suggestion", "grey"))
        }     
      }
    );
    
    return () => {
      removeTransform();
    };
  }, [editor]);
}

export default function EmoticonPlugin() {
  const [editor] = useLexicalComposerContext();
  console.log(editor);
  useEmoticons(editor);
  return null;
}
