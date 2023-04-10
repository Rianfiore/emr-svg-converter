"use client";

import { CodeEditor, SVGPreview } from "@/components";
import { ConvertSvgToReactComponentUseCase } from "@/.core/useCases/convert-to-react-component.use-case";
import { SvgConverterGateway } from "@/.core/gateways/svgConverter.gateway";
import { useState } from "react";
import { convertHexToEMRTheme } from "@/.scripts/convertHexToEMRTheme";
import * as S from "./page.styles";
import { Button } from "@/components/button";

export default function Home() {
  const [inputCode, setInputCode] = useState<string>();
  const [outputCode, setOutputCode] = useState<string>();
  const [svgTags, setSvgTags] = useState<string>()

  function handleConvertSvg() {
    const convertSvgToTsxUseCase = new ConvertSvgToReactComponentUseCase(
      new SvgConverterGateway()
    );

    convertSvgToTsxUseCase
      .execute({ code: inputCode ?? "", componentName: "SVGComponent" })
      .then((outputCodeResponse) => {
        const {codeOnlySvgTags, componentCode} = convertHexToEMRTheme(outputCodeResponse);
        setOutputCode(componentCode);
        setSvgTags(codeOnlySvgTags)
      }).catch((err) => {
        console.error(err)
      });
  }

  return (
    <S.Main>
      <SVGPreview svgTags={svgTags} fallback={<div></div>}/>
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
