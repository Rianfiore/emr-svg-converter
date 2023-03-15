import { applyThemeTokensToComponent } from "@/utils/applyThemeTokensToComponent";
import { applyUseThemeHookToComponent } from "@/utils/applyUseThemeHookToComponent";
import { getThemeTokenByHexColor } from "@/utils/getThemeTokenByHexColor";
import { regex } from "@/utils/regex";

export function convertHexToEMRTheme(code: string) {
  const hexCodes = code.match(regex.matchByHexadecimalCode) ?? []
  const colorsWithEMRTheme = getThemeTokenByHexColor(hexCodes)  
  const codeWithUseTheme = applyUseThemeHookToComponent(code)
  
  return applyThemeTokensToComponent(codeWithUseTheme, colorsWithEMRTheme)
}