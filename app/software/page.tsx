import SoftwareCard from "@/components/SoftwareCard";


export const metadata = {
  title: "Brendan | Software",
  description: "Everything software.",
};

export default function SoftwarePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-6">
      {SoftwareCards.map((card, i) => (
        <SoftwareCard 
          key={i}
          title={card.title}
          description={card.description}
          badgeTexts={card.badgeTexts}
          media={card.media}
          buttonLink={card.buttonLink}
          buttonLinkToolTipText={card.buttonLinkTooltipText}
          animationDelay={i * 200}
        />
      ))}
    </section>
  );
}

const SoftwareCards = [
  {
    title: "Binge Optimizer",
    description: "Using TMDB API, I wanted to create a platform that can help provide relevant recommendations based on my current list of content that I want to see more of. This all came about when I was struggling to find something to watch one afternoon and lists from crappy sites like buzzfeed weren't giving me any good ideas. So I decided to figure out how to do this myself. This project required a lot of thinking and it helped to think of everything as its own object in the problem space.\n\nI also tried something new and designed the layout/overall design of the website using Figma before implementing any code.This helped a lot in the developing process as I had a clear reference when coding.\n\nOverall, this was fun and now I'll never struggle to find something to watch again.",
    media: [
      {
        title: "Binge Optimizer",
        type: "image",
        src: "/software_media/bingeoptimizer.png",
      },
      {
        title: "Binge Optimizer Video",
        type: "video",
        src: "https://www.youtube.com/embed/j_eng2lPVUA?si=Gb2pdnUeYoSIU5iI",
      }
    ],
    badgeTexts: ["React", "TMDb API", "JavaScript"],
    buttonLink: "https://bingeoptimizer.vercel.app/",
    buttonLinkTooltipText: "Start Optimizing Now",
  },
  {
    title: "Spotify Showdown",
    description: "Using the Spotify API for web and android, I created an android app that allows a user to log in using their spotify account, search public playlists (including their own) and use those to play a knockout styled tournament between songs to find out which song is the best. It provides previews of songs to compare and full songs (when previews aren't available) if the user has Spotify Premium, it also allows users to like songs which will be added to their Spotify liked songs or access the song page on Spotify. \n\nThis project came about when my friends and I would compare songs in a similar fashion using an outdated website and was built using Java and Android Studio.",
    media: [
      {
        title: "Spotify Showdown",
        type: "image",
        src: "/promotion_imgs/spotify_showdown.webp",
      },
      {
        title: "Spotify Showdown App Walkthrough",
        type: "video",
        src: "https://www.youtube.com/embed/XoZDzux3nIc?si=bs-MhNQrEc2RnmmS",
      },
      {
        title: "Spotify Showdown Code",
        type: "video",
        src: "https://www.youtube.com/embed/Ck35GfFSfZ0?si=A7JIabvCalksX0tr",
      }
    ],
    badgeTexts: ["Spotify API", "Java", "Android Studio"],
    buttonLink: "https://play.google.com/store/apps/details?id=com.bn.songvsong",
    buttonLinkTooltipText: "Get on Google Play",
  },
  {
    title: "Just Chillax",
    description: "I wanted to continue my learning and improvement in web development using React and Three.js, so I decided to start creating a web 2000s experience using 3D scenes. \n\nThe idea of Just Chillax is to allow users to interact with a 2000s bedroom such as watching TV or using the computer in the scene, as well as interacting with other objects in the room. Giving a nostalgic experience for people using the web application.",
    media: [
      {
        title: "Just Chillax Promo",
        type: "image",
        src: "/promotion_imgs/justchillax.png",
      },
      {
        title: "Just Chillax Blender",
        type: "image",
        src: "/software_media/blender_model2.png",
      },
      {
        title: "Just Chillax Video",
        type: "video",
        src: "https://www.youtube.com/embed/AVCQRZpAXDc?si=37O0kU8SM15VuIrJ",
      },
    ],
    badgeTexts: ["React", "YouTube API", "JavaScript", "ThreeJS"],
    buttonLink: "https://justchillax.vercel.app/",
    buttonLinkTooltipText: "Explore Now",
  },
  {
    title: "JRVS (University Project)",
    description: "In a year long software practice unit, as a group of 15 people, using the SAFe agile framework, we were tasked with creating an e-learning web application for teenages to learn about A.I. Taking on the role of a system architect, the SA team were tasked with researching and choosing the appropriate tech stack and libraries, and supporting team members in spikes. My agile team is assigned to develop the lesson content and UI elements for the content which includes lessons, quizzes, videos, and other content types. This involved creating page components to display this content, and creating models for content to fectch from the MongoDB database. This includes using controllers and an provider to request lesson content in JSON format.\n\nBIG THANKS to our group presenters in the milestone presentation (9:32 for demo) video!",
    media: [
      {
        title: "Team 1 Deliverables",
        type: "image",
        src: "/software_media/jrvs1.png",
      },
      {
        title: "Team 2 Deliverables",
        type: "image",
        src: "/software_media/jrvs3.png",
      },
      {
        title: "Team 3 Deliverables",
        type: "image",
        src: "/software_media/jrvs2.png",
      },
      {
        title: "Team 4 Deliverables",
        type: "image",
        src: "/software_media/jrvs4.png",
      },
      {
        title: "JRVS WIP Demo Video",
        type: "video",
        src: "https://www.youtube.com/embed/_owp_3VytH0?si=D5ScflMUfAWhEFeB",
      },
    ],
    badgeTexts: ["React", "MongoDB", "JavaScript", "Express", "Software Practice"],
    buttonLink: "https://github.com/Monash-FIT3170/JRVS",
    buttonLinkTooltipText: "See GitHub Repo",
  },
  {
    title: "Old Personal Portfolio Website",
    description: "In the old website, I decided to use React as I have had previous experience using this for other projects. I strived for the website to be responsive especially for mobile as my old one was not so mobile friendly. I made use of the react-responsive to make the website adaptable to different screen sizes. I also wanted the website to be simple and with a slight bit of flair which is where tsparticles came into play for the background.",
    media: [
      {
        title: "Old website",
        type: "image",
        src: "/software_media/portfolio_responsive.png",
      }
    ],
    badgeTexts: ["React", "JavaScript", "React-Responsive", "tsParticles", "MUI Library"],
    buttonLink: "https://old-brendannguyen.vercel.app",
    buttonLinkTooltipText: "Old Portfolio Website",
  },
  {
    title: "Fiery Dragons Game (University Project)",
    description: "In an object-oriented design unit, as a group of four, we were tasked with replicating the Fiery Dragons board game into a software system that follows OOP principles and making use of common processes and techniques. We decided to use Java and the JavaSwing framework for the GUI of the game.\n\nThe project involved four sprints comprised of planning, individual prototypes, prototype review and a final consolidated prototype, and the final sprint involved implementing extension features to the game.",
    media: [
      {
        title: "Menu",
        type: "image",
        src: "/software_media/fierydragonsmenu.png",
      },
      {
        title: "Game Board",
        type: "image",
        src: "/software_media/fierydragonsgame.png",
      }
    ],
    badgeTexts: ["Java", "JavaSwing", "Object Oriented Design", "Design Patterns"],
    buttonLink: "https://www.dropbox.com/scl/fi/q0r4hpimr213k4y2jxzy9/FieryDragons.jar?rlkey=vbirsddsp7jh3o2blxrqsaps9&st=3hbyno6w&dl=0",
    buttonLinkTooltipText: "Dropbox",
  },
  {
    title: "Beat Em Up Game Prototype (University Project)",
    description: "During a games programming unit, I learnt C++ and programming using Unreal Engine 5. The project required me to create self defined core mechanics for the game in C++. These mechancis were force abilities and the buying and placing of traps for enemies. I improved my C++ programming skills as well as learning UE5 such as AI, UI, and using blueprints with C++ classes. I also learnt how to use particle systems (Niagara System) for particples within the game and how to implement C++ interactions with these effects.\n\nThis was a new and amazing learning experience as I learnt new skills in C++ and Unreal Engine 5, providing me with the basic foundation to continuously develop on my own.",
    media: [
      {
        title: "Game",
        type: "video",
        src: "https://www.youtube.com/embed/AchB0tI2EpY?si=skBsK3spYePZUkXQ",
      },
    ],
    badgeTexts: ["C++", "Unreal Engine 5", "Games Programming"],
    buttonLink: "https://www.dropbox.com/scl/fi/niowj4vv9e3l1pbl3yyer/Game-Prototype.zip?rlkey=hh6kqajs70ifzbwpcr00dya78&st=e2xqf51y&dl=0",
    buttonLinkTooltipText: "Dropbox",
  },
  {
    title: "Agile Project Tool Web Application",
    description: "During a software engineering practice unit, in a group of six, we were assigned to implement a web application to be used an scrum agile tool to log sprints, product backlogs and see contribution times for developers and clients. We had to undertake this project while also using Scrum agile practices such as team stand up meetings, backlogs and numerous sprints.\n\nWe implemented the web application using EJS, CSS, JavaScript and Node.js (which was new to me and the team).",
    media: [
      {
        title: "Web Tool",
        type: "image",
        src: "/software_media/webtool.png",
      },
      {
        title: "Product Backlog for Project",
        type: "image",
        src: "/software_media/product_backlog.png",
      },
      {
        title: "Burndown Chart for Project",
        type: "image",
        src: "/software_media/burndownchart.png",
      },
    ],
    badgeTexts: ["CSS", "JavaScript", "NodeJS", "EJS", "Scrum Agile"],
    buttonLink: "",
    buttonLinkTooltipText: "",
  },
  {
    title: "Quality Testing & CI/CD",
    description: "For a quality testing unit, I explored and set up a CI/CD pipeline on GitLab to run test files and static analysis tools such as flake8, mypy, pycodestyle, pydocstyle and pylint. Learning approaches taken to ensure high quality code that meets coding standards revealed the importance in implementing these approaches.\n\nThe difference between the initial code and the cleaned up code after analysis and testing made the code cleaner, simplier and ensures as little coding bugs as possible. I also implemented test cases using python unittest.",
    media: [
      {
        title: "Unit Testing",
        type: "image",
        src: "/software_media/unittesting.png",
      },
      {
        title: "CI/CD Pipeline",
        type: "image",
        src: "/software_media/pipeline.png",
      },
      {
        title: "Pycode Testing",
        type: "image",
        src: "/software_media/pycodetesting.png",
      }
    ],
    badgeTexts: ["Python", "GitLab", "CI/CD", "Pytest"],
    buttonLink: "",
    buttonLinkTooltipText: "",
  },
  {
    title: "Arduino Traffic System",
    description: "In a team of four, we were tasked with creating a simplified version of a traffic system using LEDs, and appropriate sensors to detect pedestrians and cars, as well as implementing a day and night cyle for traffic lights. Security features such as a login system with lock-out were implemented with Python along with the traffic system integration with Arduino. A heartbeat signal was also implemented to make the system restart after 'power' is cut off for a specified amount of time.\n\nThe implemented software can be interacted with to monitor the system and make changes to light timing as well.",
    media: [
      {
        title: "Traffic System Breadboard",
        type: "image",
        src: "/software_media/arduinotraffic.jpg",
      },
      {
        title: "Traffic System Python Code",
        type: "video",
        src: "https://www.youtube.com/embed/O_IO_gHcM9Y?si=VQ1KtXtxmWfUiQmW",
      },
    ],
    badgeTexts: ["Python", "Arduino", "Electronics"],
    buttonLink: "",
    buttonLinkTooltipText: "",
  },
]