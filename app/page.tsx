import HomeCard from "@/components/HomeCard";

const HomeCards = [
  {
    title: "Spotify Showdown",
    description: "Play shared or your own Spotify playlists in a knockout style tournament.\nConnect your Spotify account to play tournaments with Spotify playlists where you can listen to and like all songs within your tournament.",
    badgeTexts: ["Android App", "Spotify API", "2.6k+ Downloads"],
    imageSrc: "/promotion_imgs/spotify_showdown.webp",
    buttonLink: "https://play.google.com/store/apps/details?id=com.bn.songvsong",
    buttonLinkTooltipText: "Get on Google Play",
  },
  {
    title: "Just Chillax",
    description: "An interactive recreation of a 2000s bedroom, providing you with a nostalgia trip to a time where you could waste it.\nExplore the room, delve into and watch 2000's TV and have a go on a Windows XP computer to relive your childhood memories..",
    badgeTexts: ["React", "ThreeJS"],
    imageSrc: "/promotion_imgs/justchillax.png",
    buttonLink: "https://justchillax.vercel.app/",
    buttonLinkTooltipText: "Explore Now",
  },
  {
    title: "Binge Optimizer",
    description: "Search and add movies and TV shows to your list to get relevant recommendations.\nExplore each film or TV show with up-to-date details such as reviews, cast and the streaming platforms that provide them.\nEase subscription fatigue with this quick and simple platform.",
    badgeTexts: ["React", "TMDb API"],
    imageSrc: "/promotion_imgs/bingeoptimizer.png",
    buttonLink: "https://bingeoptimizer.vercel.app/",
    buttonLinkTooltipText: "Start Optimizing Now",
  },
]

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-6">
      {HomeCards.map((card, i) => (
        <HomeCard 
          key={i}
          title={card.title}
          description={card.description}
          badgeTexts={card.badgeTexts}
          imageSrc={card.imageSrc}
          buttonLink={card.buttonLink}
          buttonLinkToolTipText={card.buttonLinkTooltipText}
          animationDelay={i * 200}
        />
      ))}
    </section>
  );
}
