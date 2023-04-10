import { applyThemeTokensToComponent } from "@/utils/applyThemeTokensToComponent";
import { applyUseThemeHookToComponent } from "@/utils/applyUseThemeHookToComponent";
import { getThemeTokenByHexColor } from "@/utils/getThemeTokenByHexColor";
import { regex } from "@/utils/regex";

export function convertHexToEMRTheme(code: string) {
  const hexCodes = code.match(regex.matchByHexadecimalCode) ?? [];
  const colorsWithEMRTheme = getThemeTokenByHexColor(hexCodes);
  const codeWithUseTheme = applyUseThemeHookToComponent(code);
  const componentCode = applyThemeTokensToComponent(
    codeWithUseTheme,
    colorsWithEMRTheme
  );
  const codeOnlySvgTags = componentCode
    .split("return")[1]
    .replace("(", "")
    .replace(")", "")
    .replace(";", "")
    .split(" ")
    .reverse()
    .join(" ")
    .replace("}", "")
    .split(" ")
    .reverse()
    .reduce((acc: string[], thermSplitted) => {
      if (thermSplitted.includes("={")) {
        const newTherm = thermSplitted.replace("{", `"`).replace("}", `"`);
        acc.push(newTherm);
      } else {
        acc.push(thermSplitted);
      }
      return acc;
    }, [])
    .join(" ");

  return { codeOnlySvgTags, componentCode };
}
