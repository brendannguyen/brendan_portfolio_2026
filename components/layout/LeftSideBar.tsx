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
import { Badge } from "../ui/badge";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { Shine } from "../animate-ui/primitives/effects/shine";
import { motion } from "framer-motion";

export function LeftSidebar() {

  const isMobileLarge = useMediaQuery({ minWidth: 381, maxWidth: 540 })
  const isMobileSmall = useMediaQuery({ maxWidth: 380 })
  const isDesktopSmall = useMediaQuery({ minWidth: 541, maxWidth: 1020 })
  const isMobile = useMediaQuery({ maxWidth: 540 })

  const sizeClass = isMobileSmall
  ? "text-[60px]"
  : isMobileLarge
  ? "text-[80px]"
  : "text-[120px]";

  const imageClass = isDesktopSmall
  ? "w-[150px]"
  : isMobile
  ? "w-[100px]"
  : "w-1/2"


  return (
    <div className="w-full min-h-full flex justify-center items-center pointer-events-auto" style={{direction: "ltr"}}>
      <div className="w-full space-y-6 justify-center flex flex-col pointer-events-auto">
        <Fade>
          <Magnetic>
          <Tilt>
            <TiltContent>
              <p className={"font-bold opacity-80 drop-shadow-lg text-title-text-color " + sizeClass} style={{ lineHeight: "0.9" }}>
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
                  <CardContent className={"space-y-2 text-sm pointer-events-auto flex gap-4 " + (isMobile && " flex-col items-center text-center")}>
                    <div className={"relative aspect-square overflow-hidden rounded-xl " + (imageClass)}>
                      <Shine color="white" className={"aspect-square rounded-xl"}>
                        <motion.div
                          animate={{
                            borderRadius: [
                              "20% 40% 40% 20%",
                              "28% 36% 44% 18%",
                              "35% 25% 30% 45%",
                              "26% 48% 38% 30%",
                              "32% 22% 28% 50%",
                              "20% 40% 40% 20%"
                            ]
                          }}
                          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <img src="/portrait/bn_portrait_square.jpg" className="object-cover" />
                        </motion.div>
                      </Shine>
                    </div>
                    <div className="flex flex-col flex-wrap gap-2">
                      <p>A final-year software engineering student with a lifelong commitment to learning and development.</p>
                      <Magnetic range={80} strength={0.25}><p className="font-medium">Striving to create positive change through software.</p></Magnetic>
                    </div>
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
                  <CardContent className="text-md gap-2 flex flex-wrap">
                    <Magnetic><Badge className="text-sm">Software</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">Filmmaking</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">Front-end</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">Back-end</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">AWS Services</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">Infrastructure as Code</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">Kubernetes</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">Adobe CC</Badge></Magnetic>
                    <Magnetic><Badge className="text-sm">...</Badge></Magnetic>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <Link href="/about#skills-expanded" className="flex items-center">
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
                  <CardContent className="gap-4 text-sm justify-center flex items-center flex-wrap">
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