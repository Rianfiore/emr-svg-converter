
export function applyUseThemeHookToComponent(code: string) {
  const [codeWithComponentStructure, codeWithComponentTag] = code.split('=>')
  const componentImports = codeWithComponentStructure.split(';').slice(0, -1)
  const componentArrowFn = codeWithComponentStructure.split(';')[2]
  const codeWithHtmlTags = codeWithComponentTag.split('export')[0]


  return convertArrowFnToStandardFn(componentImports, componentArrowFn, codeWithHtmlTags)
}

function convertArrowFnToStandardFn(imports: string[], arrowFn: string, returnFn: string) {
  imports.push(`\nimport { useTheme } from "styled-components";`)
  const componentName = arrowFn.split(' ')[1]
  const returnFnFormatted = returnFn.replace('(', '').replace(')', '').trimStart().trimEnd()
  const standardFn = `${imports.join(';')}\n\nexport function ${componentName}(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();\n`

  return `${standardFn}
    return (
      ${returnFnFormatted.slice(0,-1)})
}
  `
}