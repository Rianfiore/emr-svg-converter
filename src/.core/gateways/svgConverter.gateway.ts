import { convertToReactComponentType, SvgConverter } from "../entities/SvgConverter";

export class SvgConverterGateway implements SvgConverter {
  convertToReactComponent(convertToReactComponentParams: convertToReactComponentType): string {
    return convertToReactComponentParams.code;
  }
}