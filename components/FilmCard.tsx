"use client"

import { AnimateIcon } from "./animate-ui/icons/icon"
import { Fade } from "./animate-ui/primitives/effects/fade"
import { Magnetic } from "./animate-ui/primitives/effects/magnetic"
import { Slide } from "./animate-ui/primitives/effects/slide"
import { Tilt, TiltContent } from "./animate-ui/primitives/effects/tilt"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Shine } from "./animate-ui/primitives/effects/shine"
import { Badge } from "./ui/badge"
import { GalleryVertical } from "./animate-ui/icons/gallery-vertical"
import MediaQuery, { useMediaQuery } from "react-responsive"


interface FilmCardProps {
  videoSrc?: string;
  title?: string;
  badgeTexts?: string[],
  animationDelay?: number;
}

export default function FilmCard({
  title = "Film Card",
  videoSrc = "",
  badgeTexts = [],
  animationDelay = 0,
}: FilmCardProps) {

  const isMobile = useMediaQuery({ maxWidth: 1020 })

    return (
      <Fade delay={animationDelay}>
        <Slide delay={animationDelay}>
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className={"w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto " + (!isMobile && " min-w-[35rem]")}>
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <GalleryVertical />
                  </AnimateIcon>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 text-md pointer-events-auto flex flex-col gap-4">
                  <div className="flex gap-2 flex-wrap">
                    {Array.isArray(badgeTexts)
                    ? badgeTexts.map((badgeText, i) => (
                        <Magnetic key={i}><Badge>{badgeText}</Badge></Magnetic>
                    )) : <></>}
                  </div>
                  <MediaQuery minWidth={1021}>
                    <Shine color="white" className="rounded-xl w-full" delay={animationDelay}>
                      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                        <iframe
                          src={videoSrc}
                          allowFullScreen
                          allow="autoplay; fullscreen; picture-in-picture; web-share"
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </Shine>
                  </MediaQuery>
                  <MediaQuery maxWidth={1020}>
                    <Shine color="white" className="rounded-xl w-full" delay={animationDelay}>
                      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                        <iframe
                          src={videoSrc}
                          allowFullScreen
                          allow="autoplay; fullscreen; picture-in-picture; web-share"
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </Shine>
                  </MediaQuery>
                </CardContent>
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>
    )
}