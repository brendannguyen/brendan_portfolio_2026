"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "./animate-ui/components/animate/tooltip"
import { AnimateIcon } from "./animate-ui/icons/icon"
import { Fade } from "./animate-ui/primitives/effects/fade"
import { Magnetic } from "./animate-ui/primitives/effects/magnetic"
import { Slide } from "./animate-ui/primitives/effects/slide"
import { Tilt, TiltContent } from "./animate-ui/primitives/effects/tilt"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ExternalLinkIcon } from "./animate-ui/icons/external-link"
import Link from "next/link"
import Image from "next/image"
import { Shine } from "./animate-ui/primitives/effects/shine"
import { Badge } from "./ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { MessageSquareQuote } from "./animate-ui/icons/message-square-quote"

interface BlogCardProps {
  title?: string;
  date?: string,
  media?: BlogMediaSection[];
  description?: string;
  badgeTexts?: string[],
  buttonLink?: string;
  buttonLinkToolTipText?: string;
  animationDelay?: number;
}

interface BlogMediaSection {
    title: string,
    type: string,
    src: string
}

export default function BlogCard({
  title = "Blog Card",
  date = new Date().toLocaleDateString("en-GB"),
  description = "",
  media = [],
  buttonLink = "/",
  badgeTexts = [],
  buttonLinkToolTipText = "See more.",
  animationDelay = 0,
}: BlogCardProps) {

    return (
      <Fade delay={animationDelay}>
        <Slide delay={animationDelay}>
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <MessageSquareQuote />
                  </AnimateIcon>
                  <CardTitle className="text-lg flex justify-between w-full"><p>{title}</p><p className="opacity-60">{date}</p></CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 text-sm pointer-events-auto flex gap-4">

                  <Carousel className="w-1/2">
                    <CarouselContent>
                      {media.map((m, i) => (
                        <CarouselItem key={i} className="relative">
                          <Shine color="white" className="rounded-xl"><div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                            {m.type === "video" ? (
                              <iframe
                                src={m.src}
                                allow="fullscreen"
                                className="absolute inset-0 w-full h-full rounded-xl"
                              />
                            ) : (
                              <Image
                                src={m.src}
                                alt={m.title}
                                fill
                                className="object-cover rounded-xl"
                              />
                            )}
                          </div></Shine>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {media && media.length > 1 &&
                    <div className="flex justify-center gap-4 mt-4">
                      <CarouselPrevious className="static translate-y-0" />
                      <CarouselNext className="static translate-y-0" />
                    </div>}
                  </Carousel>

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
                {buttonLink === "" ? <></> :
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
                </CardFooter>}
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>
    )
}