import { regex } from "@/utils/regex";
import { DefaultTheme } from "styled-components";

export function convertEMRThemeToHex(svgCode: string, theme: DefaultTheme) {
  const themeColors = Object.entries(theme.colors.brand);

  const svgCodeWithHex = svgCode
    .split(` `)
    .reduce((acc: string[], thermSplitted) => {
      if (thermSplitted.match(regex.matchByThemeToken)) {
        const [propertySplitted, themeTokenSplitted] = thermSplitted.split("=");
        const lengthOfThemeTokenSplitted = themeTokenSplitted.length - 2;
        const themeTokenFromSplit = themeTokenSplitted.substring(
          1,
          lengthOfThemeTokenSplitted
        );
        const [[, themeTokenAsHex]] = themeColors.filter((themeColor) => {
          return `theme.colors.brand.${themeColor[0]}` === themeTokenFromSplit;
        });

        acc.push(`${propertySplitted}=${themeTokenAsHex}`);
      } else {
        acc.push(thermSplitted);
      }

      return acc;
    }, []);

  return svgCodeWithHex.join(` `);
}
