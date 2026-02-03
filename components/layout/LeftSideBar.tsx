"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tilt, TiltContent } from "../animate-ui/primitives/effects/tilt";
import { Slide } from "../animate-ui/primitives/effects/slide";
import { Fade } from "../animate-ui/primitives/effects/fade";
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { IconButton } from "../animate-ui/components/buttons/icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../animate-ui/components/animate/tooltip";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Pickaxe } from "../animate-ui/icons/pickaxe";
import { Router } from "../animate-ui/icons/router";
import { MessageCircleHeart } from "../animate-ui/icons/message-circle-heart";
import { ArrowRight } from "../animate-ui/icons/arrow-right";
import Link from "next/link";
import { Pin } from "../animate-ui/icons/pin";
import { Magnetic } from "../animate-ui/primitives/effects/magnetic";

import { HuggingFaceIcon } from "@/app/icons/HuggingFaceIcon";
import { GooglePlayIcon } from "@/app/icons/GooglePlayIcon";
import { LeetCodeIcon } from "@/app/icons/LeetCodeIcon";

export function LeftSidebar() {
  return (
    <div className="w-full min-h-full flex justify-center items-center pointer-events-auto">
      <div className="w-full space-y-6 justify-center flex flex-col pointer-events-auto">
        <Fade>
          <Magnetic>
          <Tilt>
            <TiltContent>
              <p className="text-[120px] font-bold opacity-80 drop-shadow-lg text-title-text-color" style={{ lineHeight: "0.9" }}>
                <span>BRENDAN</span><br />
                <span>NGUYEN</span>
              </p>
            </TiltContent>
          </Tilt>
          </Magnetic>
        </Fade>
        <Fade>
          <Slide>
            <Tilt className="pointer-events-none">
              <TiltContent className="pointer-events-auto">
                <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                  <CardHeader className="flex">
                    <AnimateIcon animateOnView animateOnHover>
                      <MessageCircleHeart />
                    </AnimateIcon>
                    <CardTitle className="text-lg">MESSAGE</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm pointer-events-auto">
                    <p>A final-year software engineering student with a lifelong commitment to learning and development.</p>
                    <p>Striving to create positive change through software.</p>
                  </CardContent>
                </Card>
              </TiltContent>
            </Tilt>
          </Slide>
        </Fade>
        <Fade delay={200}>
          <Slide delay={200}>
            <Tilt className="pointer-events-none">
              <TiltContent className="pointer-events-auto">
                <Card className="w-full bg-current-pos-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                  <CardHeader className="flex">
                    <AnimateIcon animateOnView animateOnHover>
                      <Pin />
                    </AnimateIcon>
                    <CardTitle className="text-lg">CURRENT POSITION</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm pointer-events-auto">
                    <Tooltip side="left">
                      <TooltipTrigger asChild>
                        <p>Software Developer @ <a href="https://www.leidos.com/company/global/australia" target="_blank" rel="noopener noreferrer" className="hover:underline">Leidos Australia.</a></p>
                      </TooltipTrigger>
                      <TooltipContent>
                        Since January 2025.
                      </TooltipContent>
                    </Tooltip>
                  </CardContent>
                </Card>
              </TiltContent>
            </Tilt>
          </Slide>
        </Fade>
        <Fade delay={400}>
          <Slide delay={400}>
            <Tilt className="pointer-events-none">
              <TiltContent className="pointer-events-auto">
                <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg">
                  <CardHeader className="flex">
                    <AnimateIcon animateOnView animateOnHover>
                      <Pickaxe />
                    </AnimateIcon>
                    <CardTitle className="text-lg">SKILLS</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-md">
                    <p>FRONT-END, BACK-END, AWS SERVICES, INFRASTRUCTURE AS CODE, K8s, ADOBE CC...</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <Link href="/about" className="flex items-center">
                          <AnimateIcon animateOnHover>
                            <ArrowRight />
                          </AnimateIcon>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        See more
                      </TooltipContent>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </TiltContent>
            </Tilt>
          </Slide>
        </Fade>
        <Fade delay={600}>
          <Slide delay={600}>
            <Tilt className="pointer-events-none">
              <TiltContent className="pointer-events-auto">
                <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg">
                  <CardHeader className="flex">
                    <AnimateIcon animateOnView animateOnHover>
                      <Router />
                    </AnimateIcon>
                    <CardTitle className="text-lg">SOCIALS</CardTitle>
                  </CardHeader>
                  <CardContent className="gap-4 text-sm justify-center flex items-center">
                    <Magnetic range={40} strength={0.25}>
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <a href="https://www.linkedin.com/in/brendan-nguyen-8894b7220/" target="_blank" rel="noopener noreferrer" className="inline-flex pointer-events-auto"
                        ><IconButton className="hover:cursor-pointer"><LinkedInLogoIcon /></IconButton></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                    </Magnetic>
                    <Magnetic range={40} strength={0.25}>
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <a href="https://github.com/brendannguyen" target="_blank" rel="noopener noreferrer" className="inline-flex pointer-events-auto"
                        ><IconButton className="hover:cursor-pointer"><GitHubLogoIcon /></IconButton></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                    </Magnetic>
                    <Magnetic range={40} strength={0.25}>
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <a href="https://play.google.com/store/apps/dev?id=4725217607813660973" target="_blank" rel="noopener noreferrer" className="inline-flex pointer-events-auto"
                        ><IconButton className="hover:cursor-pointer"><GooglePlayIcon className="w-4 h-4"/></IconButton></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Google Play</p>
                      </TooltipContent>
                    </Tooltip>
                    </Magnetic>
                    <Magnetic range={40} strength={0.25}>
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <a href="https://huggingface.co/bread03" target="_blank" rel="noopener noreferrer" className="inline-flex pointer-events-auto"
                        ><IconButton className="hover:cursor-pointer"><HuggingFaceIcon className="w-4 h-4"/></IconButton></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Hugging Face</p>
                      </TooltipContent>
                    </Tooltip>
                    </Magnetic>
                    <Magnetic range={40} strength={0.25}>
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <a href="https://leetcode.com/akimbear/" target="_blank" rel="noopener noreferrer" className="inline-flex pointer-events-auto"
                        ><IconButton className="hover:cursor-pointer"><LeetCodeIcon className="w-4 h-4"/></IconButton></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LeetCode</p>
                      </TooltipContent>
                    </Tooltip>
                    </Magnetic>
                  </CardContent>
                </Card>
              </TiltContent>
            </Tilt>
          </Slide>
        </Fade>
      </div>
    </div>
  );
}