import { Header } from "@/components/header";
import { GlobalStyle } from "@/styles/globalStyle";
import { ThemeContext } from "@/styles/themeContext";
import HeadComponent from "./head";

export const metadata = {
  title: "EMR SVG Converter",
  description: "Conversor SVG feito pela EMR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <HeadComponent />

      <GlobalStyle />
      <body>
        <ThemeContext theme="defaultTheme">
          <Header />
          {children}
        </ThemeContext>
      </body>
    </html>
  );
}
