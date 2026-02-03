"use client";

import { useTheme } from "next-themes"
import { Toggle } from "../animate-ui/components/radix/toggle"
import { Moon } from "../animate-ui/icons/moon"
import { Tooltip, TooltipContent, TooltipTrigger } from "../animate-ui/components/animate/tooltip"
import { AnimateIcon } from "../animate-ui/icons/icon"
import { Sun } from "../animate-ui/icons/sun"


export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Toggle
      size="icon"
      pressed={theme === "dark"}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
      className="bg-card rounded-xl p-2 drop-shadow-lg"
    >
      <AnimateIcon animateOnHover>
        {theme === "dark" ? <Moon /> : <Sun />}
      </AnimateIcon>
    </Toggle>
  )
}
