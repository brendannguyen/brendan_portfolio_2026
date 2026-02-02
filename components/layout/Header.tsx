"use client";

import Link from "next/link";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Blocks } from "../animate-ui/icons/blocks";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../animate-ui/components/animate/tooltip";
import { User } from "../animate-ui/icons/user";
import { Terminal } from "../animate-ui/icons/terminal";
import { Clapperboard } from "../animate-ui/icons/clapperboard";
import { Brush } from "../animate-ui/icons/brush";
import { MessageCircleMore } from "../animate-ui/icons/message-circle-more";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-6 px-6 py-3 rounded-xl
        bg-card   
    ">
      <nav className="flex items-center gap-6">
        {/* HomePage */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/" className="flex items-center">
              <AnimateIcon animateOnHover>
                <Blocks />
              </AnimateIcon>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>

        {/* About Me */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/about" className="flex items-center">
              <AnimateIcon animateOnHover>
                <User />
              </AnimateIcon>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>About Me</p>
          </TooltipContent>
        </Tooltip>

        {/* Software */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/software" className="flex items-center">
              <AnimateIcon animateOnHover>
                <Terminal />
              </AnimateIcon>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Software</p>
          </TooltipContent>
        </Tooltip>

        {/* Filmmaking */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/filmmaking" className="flex items-center">
              <AnimateIcon animateOnHover>
                <Clapperboard />
              </AnimateIcon>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Filmmaking</p>
          </TooltipContent>
        </Tooltip>

        {/* Blog */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/blog" className="flex items-center">
              <AnimateIcon animateOnHover>
                <Brush />
              </AnimateIcon>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Blog</p>
          </TooltipContent>
        </Tooltip>

        {/* Contact */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/contact" className="flex items-center">
              <AnimateIcon animateOnHover>
                <MessageCircleMore />
              </AnimateIcon>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Me</p>
          </TooltipContent>
        </Tooltip>

      </nav>
    </header>
  );
}