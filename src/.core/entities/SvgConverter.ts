export type convertToReactComponentType = {
  code: string,
  componentName: string
}

export interface SvgConverter {
  convertToReactComponent(convertToReactComponentParams: convertToReactComponentType): string;
}