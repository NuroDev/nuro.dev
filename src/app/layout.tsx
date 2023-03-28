import { Inter as FontSans } from "next/font/google";
import { ServerThemeProvider } from "next-themes";

import { Analytics } from "./Analytics.client";
import { Background } from "~/components/Background/index.client";
import { Click } from "./Click.client";
import { cn } from "~/utils/cn";
import { ColorScheme } from "~/types/theme";

import "~/styles/globals.css";

import type { NextLayoutProps } from "~/types/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: NextLayoutProps): JSX.Element {
  return (
    <ServerThemeProvider
      attribute="class"
      defaultTheme={ColorScheme.SYSTEM}
      themes={Object.values(ColorScheme)}
    >
      <html
        lang="en"
        className={cn(fontSans.variable, "scroll-smooth font-sans antialiased")}
      >
        <body
          className="bg-grid bg-gray-50 from-gray-200 to-gray-200 bg-[0_0] text-gray-500 dark:bg-gray-900 dark:from-gray-700 dark:to-gray-700"
          style={{
            backgroundSize: "25px 25px",
          }}
        >
          <Analytics />
          <Background />
          <Click />
          {children}
        </body>
      </html>
    </ServerThemeProvider>
  );
}
