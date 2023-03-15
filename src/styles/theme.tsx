const defaultColors = {
  interface: {
    white000: "#FFFFFF",
    grey000: "#FBFBFD",
    grey100: "#EDF0F2",
    grey200: "#C2CED6",
    grey300: "#9BA5AB",
    grey400: "#606A71",
    grey500: "#363E46",
    grey600: "#1D2224",
  },
  status: {
    red000: "#F5E1E1",
    red100: "#FF5B5B",
    red200: "#E64444",
    yellow000: "#F5F4E1",
    yellow100: "#F7F161",
    yellow200: "#E9C610",
    green000: "#D3FCE9",
    green100: "#77E2AC",
    green200: "#35BD78",
    green300: "#22965B",
    blue000: "#E2F5FF",
    blue100: "#BEE8FF",
    blue200: "#6BCAFF",
    blue300: "#49B1EB",
    blue400: "#2185D0",
  },
} as const;

const defaultToken = {
  font: {
    regular: 400,
    semibold: 600,

    sizes: {
      small: "1.2rem",
      medium: "1.4rem",
      large: "1.6rem",
      xlarge: "1.8rem",
      xxlarge: "3.2rem",
      xx2large: "4.8rem",
      xx3large: "6.4rem",
    },

    lineHeight: {
      medium: 1.3,
      large: 1.5,
    },
  },

  spacing: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    xx2large: "6.4rem",
    xx3large: "7.2rem",
    xx4large: "8rem",
    xx5large: "8.8rem",
    xx6large: "9.6rem",
    xx7large: "19.2rem",
  },

  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },

  borderRadius: {
    medium: "0.4rem",
    large: "1.6rem",
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },

  breakpoints: {
    tablet: "600px",
    laptop: "992px",
    desktop: "1025px",
    hd: "1366px",
    fullhd: "1920px",
    quadhd: "2560px",
  },
} as const;

export const defaultTheme = {
  favicon: "",
  logo: "",
  title: "",
  colors: {
    ...defaultColors,
    brand: {
      light000: "#EFFFF7",
      light100: "#D3FCE9",
      light200: "#27EA8F",
      pure: "#35BD78",
      dark000: "#009A5A",
      dark100: "#007344",
      dark200: "#004D2D",
    },
  },
  ...defaultToken,
} as const;

export const saoLeopoldoMandic = {
  favicon: "",
  logo: "",
  icon: "",
  title: "São Leopoldo Mandic",
  name: "São LeopoldoMandic",
  colors: {
    ...defaultColors,
    brand: {
      light000: "#DEE3FF",
      light100: "#909EEF",
      light200: "#5260AB",
      pure: "#252F67",
      dark000: "#1E2653",
      dark100: "#181F44",
      dark200: "#090C1A",
    },
  },
  ...defaultToken,
} as const;

export const revalida = {
  favicon: "",
  logo: "",
  title: "Revalida",
  colors: {
    ...defaultColors,
    brand: {
      light000: "#effefa",
      light100: "#c9fef3",
      light200: "#93fce9",
      pure: "#04a598",
      dark000: "#087d75",
      dark100: "#0c635f",
      dark200: "#0f524e",
    },
  },
  ...defaultToken,
} as const;

export const unisa = {
  favicon: "",
  logo: "",
  title: "UNISA",
  colors: {
    ...defaultColors,
    brand: {
      light000: "#d0eaff",
      light100: "#aedbff",
      light200: "#76B0E0",
      pure: "#3490dc",
      dark000: "#004F90",
      dark100: "#01426e",
      dark200: "#003152",
    },
  },
  ...defaultToken,
} as const;
