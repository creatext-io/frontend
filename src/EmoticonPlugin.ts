import { useEffect } from "react";
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
  if (textContent === ":)") {
    node.replace($createColoredNode("This is a suggestion", "grey"));
  }
}

function useEmoticons(editor: LexicalEditor) {
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      TextNode,
      emoticonTransform
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
