import { SvgPreviewProps } from "./types";
import * as Babel from "@babel/standalone";

export const SvgPreview = ({ codeString }: SvgPreviewProps) => {
  const transformedCode = Babel.transform(codeString, {
    presets: ["react"],
  }).code;

  return eval(transformedCode).default;
};
