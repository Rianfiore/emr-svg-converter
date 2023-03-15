import  { IAceEditorProps } from "react-ace/lib/ace";

export interface CodeEditorProps extends Partial<IAceEditorProps>{
  language?: 'html' | 'typescript'
  title: string
}