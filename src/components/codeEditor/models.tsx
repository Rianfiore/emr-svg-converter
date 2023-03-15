import { CodeEditorProps } from "./types";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import * as S from "./styles";

const Models = ({ language = "html", title, ...props }: CodeEditorProps) => {
  const defaultProps = {
    width: "100%",
    height: "100%",
    theme: "tomorrow_night",
    showPrintMargin: false,
    setOptions: { useWorker: false },
    ...props,
  };

  const codeEditorModels = {
    html: <AceEditor mode="html" {...defaultProps} />,
    typescript: <AceEditor mode="typescript" {...defaultProps} />,
  };

  return (
    <S.AceEditorStyled>
      <S.Title>{title}</S.Title>
      {codeEditorModels[language]}
    </S.AceEditorStyled>
  );
};

export default Models;
