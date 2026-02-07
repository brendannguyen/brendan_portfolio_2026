import { GalleryVertical } from "@/components/animate-ui/icons/gallery-vertical";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { ImageZoom } from "@/components/animate-ui/primitives/effects/image-zoom";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";
import FilmCard from "@/components/FilmCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import MediaQuery from "react-responsive";


export const metadata = {
  title: "Brendan | Filmmaking",
  description: "See my video content.",
};

export default function FilmPage() {
  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-6">

      <Fade >
        <Slide >
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className={"w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto "}>
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <GalleryVertical />
                  </AnimateIcon>
                  <CardTitle className="text-lg">Experiences</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 text-md pointer-events-auto flex flex-col gap-4">
                  <Carousel opts={{loop: true}} className="w-full">
                    <CarouselContent className="">
                      {filmPhotos.map((m, i) => (
                        <CarouselItem key={i} className="relative basis-1/4">
                          <Shine color="white" className="rounded-xl aspect-[9/16] min-h-[100px] max-h-[250px]"><div className={"relative min-h-[100px] max-h-[250px] aspect-[9/16] overflow-hidden rounded-xl"}>
                              <ImageZoom zoomScale={1.5}>
                                <Image
                                  src={m.src}
                                  alt={m.title}
                                  fill
                                  className="object-cover rounded-xl"
                                />
                              </ImageZoom>
                          </div></Shine>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {filmPhotos && filmPhotos.length > 1 &&
                    <div className="flex justify-center gap-4 mt-4">
                      <CarouselPrevious className="text-white static translate-y-0" />
                      <CarouselNext className="text-white static translate-y-0" />
                    </div>}
                  </Carousel>
                </CardContent>
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>

      {FilmCards.map((card, i) => (
        <FilmCard 
          key={i}
          title={card.title}
          videoSrc={card.src}
          badgeTexts={card.badgeTexts}
          animationDelay={200 + (i * 200)}
        />
      ))}
    </section>
  );
}

const filmPhotos = [
  {
    src: "/experience_gallery/20221226_184346.jpg",
    title: "title"
  },
  {
    src: "/experience_gallery/20221228_132622.jpg",
    title: "title"
  },
  {
    src: "/experience_gallery/20230101_143746.jpg",
    title: "title"
  },
  {
    src: "/experience_gallery/20230102_202014.jpg",
    title: "title"
  },
  {
    src: "/experience_gallery/20230108_215251.jpg",
    title: "title"
  },
  {
    src: "/experience_gallery/IMG-20230108-WA0005.jpg",
    title: "title"
  },
  {
    src: "/experience_gallery/IMG-20230127-WA0000.jpg",
    title: "title"
  },
  {
    src: "/experience_gallery/20210130_173441.jpg",
    title: "title"
  },
]

const FilmCards = [
  {
    title: "Artificial Observation",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x813av5",
    badgeTexts: ["After Effects", "Editing", "Found Footage"],
  },
  {
    title: "The House Always Wins.",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x8266rj",
    badgeTexts: ["After Effects", "Alternative Animation", "Stop Motion"],
  },
  {
    title: "Hey Little Buddy.",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x8266qs",
    badgeTexts: ["After Effects", "Animation", "Comedy", "Future Machina"],
  },
  {
    title: "The Brick",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x7wubcr",
    badgeTexts: ["Editing", "Satire", "Comedy"],
  },
    {
    title: "Insistent Anxiousness (Soundscape)",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x7scm2p",
    badgeTexts: ["Sound Editing", "Soundscape", "Circumplex Model"],
  },
]