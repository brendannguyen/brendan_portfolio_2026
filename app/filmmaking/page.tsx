import { Tooltip, TooltipTrigger } from "@/components/animate-ui/components/animate/tooltip";
import { Cctv } from "@/components/animate-ui/icons/cctv";
import { Clapperboard } from "@/components/animate-ui/icons/clapperboard";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Router } from "@/components/animate-ui/icons/router";
import { ThumbsUp } from "@/components/animate-ui/icons/thumbs-up";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";
import FilmCard from "@/components/FilmCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export const metadata = {
  title: "Brendan | Filmmaking",
  description: "See my video content.",
};

export default function FilmPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-6 min-w-[35rem]">
      {FilmCards.map((card, i) => (
        <FilmCard 
          key={i}
          title={card.title}
          videoSrc={card.src}
          badgeTexts={card.badgeTexts}
          animationDelay={card.animationDelay}
        />
      ))}
    </section>
  );
}

const FilmCards = [
  {
    title: "Artificial Observation",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x813av5",
    badgeTexts: ["After Effects", "Editing", "Found Footage"],
    animationDelay: 0
  },
  {
    title: "The House Always Wins.",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x8266rj",
    badgeTexts: ["After Effects", "Alternative Animation", "Stop Motion"],
    animationDelay: 200
  },
  {
    title: "Hey Little Buddy.",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x8266qs",
    badgeTexts: ["After Effects", "Animation", "Comedy", "Future Machina"],
    animationDelay: 400
  },
  {
    title: "The Brick",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x7wubcr",
    badgeTexts: ["Editing", "Satire", "Comedy"],
    animationDelay: 600
  },
    {
    title: "Insistent Anxiousness (Soundscape)",
    src: "https://geo.dailymotion.com/player/xpiw2.html?video=x7scm2p",
    badgeTexts: ["Sound Editing", "Soundscape", "Circumplex Model"],
    animationDelay: 800
  },
]