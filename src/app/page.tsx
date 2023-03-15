"use client";

import { CodeEditor } from "@/components";
import { ConvertSvgToReactComponentUseCase } from "@/.core/useCases/convert-to-react-component.use-case";
import { SvgConverterGateway } from "@/.core/gateways/svgConverter.gateway";
import { useState } from "react";
import { convertHexToEMRTheme } from "@/.scripts/convertHexToEmrTheme";
import * as S from "./page.styles";
import { Button } from "@/components/button";

export default function Home() {
  const [inputCode, setInputCode] = useState<string>();
  const [outputCode, setOutputCode] = useState<string>();

  function handleConvertSvg() {
    const convertSvgToTsxUseCase = new ConvertSvgToReactComponentUseCase(
      new SvgConverterGateway()
    );

    convertSvgToTsxUseCase
      .execute({ code: inputCode ?? "", componentName: "SVGComponent" })
      .then((outputCodeResponse) => {
        const outputCodeWithTheme = convertHexToEMRTheme(outputCodeResponse);
        setOutputCode(outputCodeWithTheme);
      }).catch(() => {
        
      });
  }

  return (
    <S.Main>
      <S.Interface>
        <CodeEditor
          title="SVG INPUT"
          language="html"
          onChange={(e) => setInputCode(e)}
          wrapEnabled={true}
        />
        <CodeEditor
          title="TSX OUTPUT"
          language="typescript"
          onChange={(e) => {
            setOutputCode(e);
          }}
          value={outputCode}
          wrapEnabled={true}
        />
      </S.Interface>
      <Button onClick={handleConvertSvg}>Converter</Button>
    </S.Main>
  );
}
