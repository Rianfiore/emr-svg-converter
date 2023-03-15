import { defaultTheme } from "@/styles/theme";

export function getThemeTokenByHexColor(hexColors: string[]) {
    const themeColors = Object.entries(defaultTheme.colors.brand)

    const arrHex = hexColors.reduce((arrHexColors: string[], hexColor, index) => {

      const themeColorFinded = themeColors.find(themeColor => themeColor[1] === hexColor)

      if (themeColorFinded && hexColor === themeColorFinded[1]) {
        arrHexColors[index] = `theme.colors.brand.${themeColorFinded[0]}`
      } else if(!themeColorFinded) {
        arrHexColors[index] = hexColor
      }

      return arrHexColors
    }, [])

    return arrHex
}