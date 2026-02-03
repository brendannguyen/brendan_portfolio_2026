import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/animate-ui/components/animate/tooltip";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { LeftSidebar } from "@/components/layout/LeftSideBar";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
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
  <html lang="en" suppressHydrationWarning className={`${robotoCondensed.variable} ${robotoMono.variable}`}>
    <body className={`antialiased h-screen overflow-hidden flex flex-col`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <BubbleBackground
          interactive={false}
          className="fixed inset-0 items-center justify-center bg-background -z-10"
          colors={{ first: "5, 23, 32", second: "3, 39, 60", third: "0, 53, 84", fourth: "0, 77, 116", fifth: "0, 100, 148", sixth: "0, 109, 164" }}
        />
        <TooltipProvider>
          <div className="h-22 max-h-22 flex items-center justify-between px-6">
            <Fade delay={100}>
              <Header />
            </Fade>
            <div className="absolute left-1/2 translate-x-[calc(50%+10rem)] pointer-events-auto top-9">
              <Fade delay={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ThemeTogglerButton
                      variant="accent"
                      size="sm"
                      className="bg-card rounded-xl opacity-80 hover:cursor-pointer"
                      modes={['light', 'dark']}
                    />
                </TooltipTrigger>
                  <TooltipContent>
                    Toggle Theme
                  </TooltipContent>
                </Tooltip>
              </Fade>
            </div>
          </div>

          {/* Remaining space below header */}
          <div className="flex-1 overflow-hidden relative">
            
            {/* Centering wrapper */}
            <div className="
              absolute inset-0
              flex justify-center
              px-8 pb-8 max-w-7xl mx-auto max-h-full
            ">
              
              {/* Two-column container */}
              <div className="
                flex gap-8 max-w-6xl w-full
                max-h-full
              ">
                
                {/* Left column (fixed height, no scroll) */}
                <aside
                  className="
                    w-128 shrink-0 p-4 rounded-xl
                    overflow-y-auto min-h-0
                  "
                >
                  <LeftSidebar />
                </aside>

                {/* Right column (scrollable) */}
                <main className="
                  flex-1 rounded-xl p-6
                  overflow-y-auto min-h-0
                ">
                  {children}
                </main>

              </div>
            </div>

          </div>


        </TooltipProvider>
      </ThemeProvider>
    </body>
  </html>
);

}
