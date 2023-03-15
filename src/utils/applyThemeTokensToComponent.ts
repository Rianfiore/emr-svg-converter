import { regex } from "./regex"

export function applyThemeTokensToComponent(code: string, tokens: string[]) {
  const codeSplitted = code.split(' ')
  const newCodeWithTokens: string[] = []
  let indexOfCodeWithColorProp = 0

  codeSplitted.map(codeStr => {

    if(codeStr.match(regex.matchByHexadecimalCode)) {
      const [codeStrProp, codeStrHexCode] = codeStr.split('=')

      if (codeStrHexCode.includes(tokens[indexOfCodeWithColorProp])) {
        newCodeWithTokens.push(`${codeStrProp}=${codeStrHexCode}`)
      } else {
        newCodeWithTokens.push(`${codeStrProp}={${tokens[indexOfCodeWithColorProp]}}\n`)
      }

      indexOfCodeWithColorProp++
    } else {
      newCodeWithTokens.push(codeStr)
    }

  })

  return newCodeWithTokens.join(' ')
}