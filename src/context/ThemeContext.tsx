import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ConfigProvider } from "antd";
import { themes } from "../config/variables";
import GlobalStyle from "@/config/global.style";

type ThemeContextType = [keyof typeof themes, Dispatch<SetStateAction<keyof typeof themes>>];
const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<keyof typeof themes>(() => {
    const theme = localStorage.getItem("data-theme") || "default";
    return theme === "default" ? "default" : "dark";
  });
  const value = useMemo<ThemeContextType>(() => [themeColor, setThemeColor], [themeColor]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeColor);
    localStorage.setItem("data-theme", themeColor);
  }, [themeColor]);
  const currentTheme = themes[themeColor];

  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: `"Montserrat", sans-serif;`,
            lineWidthFocus: 0,
            controlOutlineWidth: 1,
            borderRadius: 4,
            colorPrimary: currentTheme["clr-primary-100"],
            colorText: currentTheme["clr-neutral-300"],
            colorTextSecondary: currentTheme["clr-neutral-400"],
            colorTextTertiary: currentTheme["clr-neutral-300"],
            colorTextQuaternary: currentTheme["clr-neutral-400"],
            colorBgBase: currentTheme["clr-white"],
            colorBgContainer: currentTheme["clr-white"],
            colorBgLayout: currentTheme["clr-neutral-50"],
            colorBorder: "rgba(1,107,99,.6)",
            colorBorderSecondary: currentTheme["clr-neutral-100"],
            colorSplit: currentTheme["clr-neutral-100"],
          },
          components: {
            Button: {
              boxShadow: "none",
              boxShadowSecondary: "none",
              paddingInlineLG: 26,
              fontWeight: 400,
              borderRadiusLG: 30,
              contentFontSizeLG: 14,
              controlHeightLG: 52,
              colorLink: currentTheme["clr-primary-200"],
              colorLinkHover: currentTheme["clr-primary-500"],
            },
            Divider: {
              marginLG: 19,
              lineWidth: 2,
              colorSplit: currentTheme["clr-primary-200"],
            },
            Input: {
              paddingBlock: 6,
              paddingInline: 12,
              colorTextPlaceholder: currentTheme["clr-neutral-200"],
              activeShadow: "0 0 0 .25rem rgba(13,110,253,.25)",
            },
            Form: {
              labelColor: currentTheme["clr-primary-200"],
              labelFontSize: 14,
              labelHeight: 1.66,
              verticalLabelPadding: 0,
              verticalLabelMargin: 0,
              itemMarginBottom: 20,
            },
            Typography: {
              fontWeightStrong: 700,
              fontSizeHeading2: 26,
              lineHeightHeading2: 1.15,
              lineHeight: 1.143,
            },
            Menu: {
              itemSelectedBg: currentTheme["clr-primary-50"],
              itemSelectedColor: currentTheme["clr-neutral-100"],
            },

            Layout: {
              headerBg: currentTheme["clr-white"],
              triggerBg: currentTheme["clr-primary-50"],
            },
          },
          cssVar: true,
          hashed: true,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Invalid hook call");
  }
  return context;
}
