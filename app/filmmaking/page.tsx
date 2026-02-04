import FilmCard from "@/components/FilmCard";


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
          animationDelay={i * 200}
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