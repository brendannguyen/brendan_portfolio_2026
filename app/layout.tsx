import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import { TooltipProvider } from "@/components/animate-ui/components/animate/tooltip";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brendan Nguyen",
  description: "Brendan Nguyen Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <BubbleBackground
          interactive={true}
          className="absolute inset-0 flex items-center justify-center z-10 bg-background"
          colors={{ first: "5, 23, 32", second: "3, 39, 60", third: "0, 53, 84", fourth: "0, 77, 116", fifth: "0, 100, 148", sixth: "0, 109, 164" }}
        />
        <TooltipProvider>
          <div className="fixed top-4 left-0 w-full z-50">
            <div className="relative flex items-center justify-center w-full">
              {/* Centered Header */}
              <div className="pointer-events-auto">
                <Header />
              </div>
              {/* Toggle just to the right of the header */}
              <div className="absolute left-1/2 translate-x-[calc(50%+10rem)] pointer-events-auto top-5">
                <ThemeTogglerButton
                  variant="accent"
                  size="sm"
                  className="bg-card rounded-xl"
                  modes={['light', 'dark']}
                />
              </div>
            </div>
          </div>
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </body>
  </html>
);

}
