"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "./animate-ui/components/animate/tooltip"
import { AnimateIcon } from "./animate-ui/icons/icon"
import { Fade } from "./animate-ui/primitives/effects/fade"
import { Magnetic } from "./animate-ui/primitives/effects/magnetic"
import { Slide } from "./animate-ui/primitives/effects/slide"
import { Tilt, TiltContent } from "./animate-ui/primitives/effects/tilt"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ExternalLinkIcon } from "./animate-ui/icons/external-link"
import { Layers } from "./animate-ui/icons/layers"
import Link from "next/link"
import Image from "next/image"
import { Shine } from "./animate-ui/primitives/effects/shine"
import { Badge } from "./ui/badge"


interface HomeCardProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  badgeTexts?: string[],
  buttonLink?: string;
  buttonLinkToolTipText?: string;
  animationDelay?: number;
}

export default function HomeCard({
  title = "Home Card",
  description = "",
  imageSrc = "",
  buttonLink = "/",
  badgeTexts = [],
  buttonLinkToolTipText = "See more.",
  animationDelay = 0,
}: HomeCardProps) {

    return (
      <Fade delay={animationDelay}>
        <Slide delay={animationDelay}>
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                <CardHeader className="flex">
                  <AnimateIcon animateOnHover>
                    <Layers />
                  </AnimateIcon>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 text-md pointer-events-auto flex gap-4">
                  <Shine color="white" className="rounded-xl mb-4 w-1/2" delay={animationDelay}>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shrink-0">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  </Shine>
                  <div className="flex-1 flex flex-col gap-4">
                    <p className="whitespace-pre-line">{description}</p>
                    <div className="flex gap-2">
                      {Array.isArray(badgeTexts)
                        ? badgeTexts.map((badgeText, i) => (
                          <Magnetic key={i}><Badge>{badgeText}</Badge></Magnetic>
                        )) : <></>}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Magnetic range={40} strength={0.25}>
                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <Link target="_blank" rel="noopener noreferrer" href={buttonLink} className="flex items-center">
                          <AnimateIcon animateOnHover>
                            <ExternalLinkIcon />
                          </AnimateIcon>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{buttonLinkToolTipText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </Magnetic>
                </CardFooter>
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>
    )
}