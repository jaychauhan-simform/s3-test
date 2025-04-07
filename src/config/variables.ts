export interface ColorValues {
  "clr-white": string;
  "clr-black": string;
  "clr-primary-50": string;
  "clr-primary-100": string;
  "clr-primary-200": string;
  "clr-primary-300": string;
  "clr-primary-400": string;
  "clr-primary-500": string;
  "clr-neutral-50": string;
  "clr-neutral-100": string;
  "clr-neutral-200": string;
  "clr-neutral-300": string;
  "clr-neutral-400": string;
}

export const themes: Record<"default" | "dark", ColorValues> = {
  default: {
    "clr-white": "#ffffff",
    "clr-black": "#000000",
    "clr-primary-50": "#a6deee",
    "clr-primary-100": "#1d9e9d",
    "clr-primary-200": "#016b63",
    "clr-primary-300": "#058a9a",
    "clr-primary-400": "#0D6EFD",
    "clr-primary-500": "#0c5159",
    "clr-neutral-50": "#0a0a0a",
    "clr-neutral-100": "#171717",
    "clr-neutral-200": "#262626",
    "clr-neutral-300": "#212529",
    "clr-neutral-400": "#ebeaec",
  },
  dark: {
    "clr-white": "#ffffff",
    "clr-black": "#000000",
    "clr-primary-50": "#a6deee",
    "clr-primary-100": "#1d9e9d",
    "clr-primary-200": "#058a9a",
    "clr-primary-300": "#016b63",
    "clr-primary-400": "#0D6EFD",
    "clr-primary-500": "#0c5159",

    "clr-neutral-50": "#0a0a0a",
    "clr-neutral-100": "#171717",
    "clr-neutral-200": "#262626",
    "clr-neutral-300": "#212529",
    "clr-neutral-400": "#ebeaec",
  },
} as const;

export const breakpoints = {
  xs: "(min-width: 480px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
} as const;

export const breakpointsDown = {
  xs: "(max-width: 479px)",
  sm: "(max-width: 575px)",
  md: "(max-width: 767px)",
  lg: "(max-width: 991px)",
  xl: "(max-width: 1199px)",
  xxl: "(max-width: 1599px)",
} as const;

export const spacingValues = [4, 8, 16, 24] as const;

export const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36] as const;

export const fontWeights = [300, 400, 500, 600, 700, 800, 900] as const;

export const displayValues = ["none", "block", "inline", "inline-block", "flex", "grid"] as const;

export const alignItemsValues = [
  "center",
  "start",
  "end",
  "flex-start",
  "flex-end",
  "baseline",
] as const;

export const justifyContentValues = ["center", "flex-start", "flex-end", "space-between"] as const;

export const flexDirectionValues = ["column", "row"] as const;

export const textAlignValues = ["left", "center", "right"] as const;
