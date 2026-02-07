"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Tooltip, TooltipContent, TooltipTrigger } from "../animate-ui/components/animate/tooltip";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Menu } from "../animate-ui/icons/menu";
import Link from "next/link";
import { Blocks } from "../animate-ui/icons/blocks";
import { useState } from "react";
import { User } from "../animate-ui/icons/user";
import { Terminal } from "../animate-ui/icons/terminal";
import { Clapperboard } from "../animate-ui/icons/clapperboard";
import { Brush } from "../animate-ui/icons/brush";
import { MessageCircleMore } from "../animate-ui/icons/message-circle-more";
import { ThemeTogglerButton } from "../animate-ui/components/buttons/theme-toggler";

export default function MobileHeader() {

  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} direction="left" onOpenChange={setOpen}>
      <DrawerTrigger>
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-6 px-6 py-3 rounded-xl
        bg-card opacity-80 drop-shadow-lg
        ">
          <AnimateIcon animateOnHover animateOnTap className="hover:cursor-pointer">
            <Menu />
          </AnimateIcon>
        </header> 
      </DrawerTrigger>
      <DrawerContent className="opacity-80 bg-card border-none rounded-r-xl">
          <DrawerHeader>
          <DrawerTitle>Brendan Nguyen</DrawerTitle>
          <DrawerDescription>Menu</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <div className="flex gap-4 items-center text-lg">
                  <AnimateIcon animateOnView animateOnHover animateOnTap>
                    <Blocks />
                  </AnimateIcon>
                <p>Home</p>
              </div>
            </Link>
            <Link href="/about" className="flex items-center" onClick={() => setOpen(false)}>
              <div className="flex gap-4 items-center text-lg">
                  <AnimateIcon animateOnView animateOnHover animateOnTap>
                    <User />
                  </AnimateIcon>
                <p>About Me</p>
              </div>
            </Link>
            <Link href="/software" className="flex items-center" onClick={() => setOpen(false)}>
              <div className="flex gap-4 items-center text-lg">
                  <AnimateIcon animateOnView animateOnHover animateOnTap>
                    <Terminal />
                  </AnimateIcon>
                <p>Software</p>
              </div>
            </Link>
            <Link href="/filmmaking" className="flex items-center" onClick={() => setOpen(false)}>
              <div className="flex gap-4 items-center text-lg">
                  <AnimateIcon animateOnView animateOnHover animateOnTap>
                    <Clapperboard />
                  </AnimateIcon>
                <p>Filmmaking</p>
              </div>
            </Link>
            <Link href="/blog" className="flex items-center" onClick={() => setOpen(false)}>
              <div className="flex gap-4 items-center text-lg">
                  <AnimateIcon animateOnView animateOnHover animateOnTap>
                    <Brush />
                  </AnimateIcon>
                <p>Blog</p>
              </div>
            </Link>
            <Link href="/contact" className="flex items-center" onClick={() => setOpen(false)}>
              <div className="flex gap-4 items-center text-lg">
                  <AnimateIcon animateOnView animateOnHover animateOnTap>
                    <MessageCircleMore />
                  </AnimateIcon>
                <p>Contact Me</p>
              </div>
            </Link>
          </div>
          <DrawerFooter>
            <div className="flex gap-4 items-center text-lg">
              <ThemeTogglerButton
                variant="accent"
                color="white"
                className="bg-background text-white rounded-xl opacity-80 hover:cursor-pointer hover:bg-background"
                modes={['light', 'dark']}
              />
              <p>Toggle Theme</p>
            </div>
          </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}