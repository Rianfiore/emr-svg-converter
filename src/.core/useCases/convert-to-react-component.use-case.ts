"use-client"

import { convertToReactComponentType, SvgConverter } from "../entities/SvgConverter";
import {transform} from "@svgr/core";
import {format} from 'prettier'
import babelParser from 'prettier/parser-babel';
import { optimize } from 'svgo';

export class ConvertSvgToReactComponentUseCase {
  constructor(private svgConverter: SvgConverter) {}

  async execute(convertToReactComponentParams: convertToReactComponentType): Promise<string> {
    const {componentName, code} = convertToReactComponentParams

    const codeWithSVGO = optimize(code, {
      plugins: [{ name: 'preset-default' }],
    }).data;

    
    const tsx = await transform(codeWithSVGO, {typescript: true, expandProps: 'end', exportType: "named", namedExport: componentName}, { componentName: componentName});


    return this.svgConverter.convertToReactComponent({code: format(tsx, {parser: 'babel', plugins: [babelParser]} ), componentName: componentName});
  }
} 