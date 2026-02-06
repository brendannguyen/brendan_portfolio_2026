import BlogCard from "@/components/BlogCard";


export const metadata = {
  title: "Brendan | Blog",
  description: "See what I have to say.",
};

export default function AboutMePage() {
  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-6">
      {BlogCards.map((card, i) => (
        <BlogCard 
          key={i}
          title={card.title}
          date={card.date}
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


const BlogCards = [
  {
    title: "More projects coming soon...",
    date: "05/02/2026",
    description: "Another project is in the works...",
    media: [
      {
        title: "More to come.",
        type: "image",
        src: "/blog_media/noonecares.jpg",
      },
    ],
    badgeTexts: [],
    buttonLink: "",
    buttonLinkTooltipText: "",
  },
  {
    title: "Portfolio website now mobile friendly!",
    date: "04/02/2026",
    description: "Using react-responsive, I made the UI responsive to device dimensions, including a drawer mobile navigation as the normal header was not mobile friendly. Now time for another project.",
    media: [
      {
        title: "Mobile Friendly Website",
        type: "image",
        src: "/blog_media/portfolio_mobile_2026.png",
      },
    ],
    badgeTexts: ["react-responsive"],
    buttonLink: "",
    buttonLinkTooltipText: "",
  },
  {
    title: "New look portfolio website for 2026 onwards.",
    date: "04/02/2026",
    description: "Using react, nextjs, with some animation ui libraries, I updated my portfolio with a new look and feel.\n\nIt now looks more modern and with up to date information. \n\nHowever, I still need to make it mobile friendly.",
    media: [
      {
        title: "New website",
        type: "image",
        src: "/blog_media/2026website.png",
      },
    ],
    badgeTexts: [],
    buttonLink: "",
    buttonLinkTooltipText: "",
  },
  {
    title: "Spotify Showdown Update",
    date: "09/07/2024",
    description: "Users can now see trending/popular playlists in their country, and can now play those.",
    media: [
      {
        title: "Spotify Showdown",
        type: "image",
        src: "/promotion_imgs/spotify_showdown.webp",
      },
    ],
    badgeTexts: ["Android Studio", "App Development"],
    buttonLink: "https://play.google.com/store/apps/details?id=com.bn.songvsong",
    buttonLinkTooltipText: "Get on Google Play",
  },
  {
    title: "I'll never struggle to find a movie to watch again.",
    date: "20/06/2024",
    description: "I pretty much have completed the binge optimizer app, and is currently deployed, there are some minor things that need adjusting but other than that, completely usable and useful. Similarly to my other projects, I have deployed it on Vercel for now, so give it a try and like me, you will never run out of movies and shows to watch.\n\nAs previously mentioned, this app gives you recommendations of new content to watch based on a list of movies and shows chosen by you, so allways receive relevant recommodations based on your tastes. It uses TMDB API to fetch content data and also uses react-youtube to provide you with trailers and videos of all content shown on binge optimizer.\n\nThis app was mainly for me, I constantly struggle to find new content to watch. Enjoy :)",
    media: [
      {
        title: "Binge Optimizer",
        type: "image",
        src: "/software_media/bingeoptimizer.png",
      },
    ],
    badgeTexts: ["Vercel", "React", "TMDb API"],
    buttonLink: "https://bingeoptimizer.vercel.app/",
    buttonLinkTooltipText: "Explore More",
  },
  {
    title: "First time utilizing Figma before coding",
    date: "15/06/2024",
    description: "I have an idea for a new project that gives recommendations of new movies and tv shows based on your tastes. It also should give details about each content to the user. I started the project by first using Figma to design the app and its layout. This isis one of the first times I have decided to use Figma before coding, and it has helped a lot.\n\nI now have a clear foundation and reference when developing and also mentally encouraged and motivated me to put more effort into the project since I had fun and can see a design for the app.",
    media: [
      {
        title: "Binge Optimizer Figma",
        type: "image",
        src: "/blog_media/bingeoptimizerfigma.jpg",
      },
    ],
    badgeTexts: ["Figma", "React", "Design Process"],
    buttonLink: "https://www.figma.com/design/nKI8g9aA2swEQTlB4iLYwx/Binge-Optimizer?node-id=12-2&t=BZIzfs7SeDA3KiAS-1",
    buttonLinkTooltipText: "Figma Project",
  },
  {
    title: "GitHub LFS Usage Limits are gonna kill me...",
    date: "10/06/2024",
    description: "So yep...I exceeded my LFS usage limits and couldn't deploy my projects anymore or clone my repositories RIP. So I decided to figure out how to avoid using LFS as much as possible. This meant going through all large files (mainly videos) and hosting them on YouTube and using iframes instead. This also meant that I had to somehow reduce the file size of my 3D model for my 'Just Chillax' web app.\n\nAfter trying to compress using gltfjsx and gltfpack, it combined meshes and caused material bugs. I thought I was done for the day until I came across GM Viewer which saved my life. I used this to optimise my texture resolution to a suitable size which reduced the model by more than half the size. This also increased performance of viewing the model as well, so in the end, the annoyance of GitHub LFS limits became a positive. Thankfully. :)",
    media: [
      {
        title: "GM Viewer",
        type: "image",
        src: "/blog_media/gmviewer.png",
      },
    ],
    badgeTexts: ["GitHub", "Git LFS", "GLB Compression"],
    buttonLink: "https://githubdragonfly.github.io/viewers/templates/GM%20Viewer.html",
    buttonLinkTooltipText: "GM Viewer",
  },
  {
    title: "Portfolio Website Upgrade!!!",
    date: "09/06/2024",
    description: "My previous portfolio website needed an upgrade. To be honest, it looked old and like a dark web website using html and css. I decided to again use React and JavaScript to create a new website that was modern, responsive and fun to make. I made heavy use of the MUI libary, especially its Grid component for entries on each page which gave a more finished look that was adaptive to different screens.\n\nThere were some challenges with the navigation bar on top but overall a fun experience again and it was great to create components that could be reused, unlike the previous website where I was repeating code again and again. Similarly to the Just Chillax app, I deployed my new website on Vercel. Enjoy the website!",
    media: [
      {
        title: "Old portfolio website",
        type: "image",
        src: "/software_media/portfolio_responsive.png",
      },
    ],
    badgeTexts: ["React", "tsParticles", "React-Responsive", "Vercel"],
    buttonLink: "",
    buttonLinkTooltipText: "",
  },
  {
    title: "Completion of Just Chillax",
    date: "07/06/2024",
    description: "After a long semester, I finally had the time to finish the just chillax web app, I made adjustments to the TV component, fixing bugs when changing channels and displaying a media bar of the current video playing. I also took time to understand and implement a responsive application for desktop and mobile devices. I made use of react-responsive to query screen sizes and adjust the components accordingly. This was a huge learning experience and a fun challenge and I am more than happy with the results.\n\nThe app is now deployed on Vercel which offers deployment for free which is great. Only thing left to do is add more videos to the data list for the TV to play. I have so far added movies, music and trailers and hope to finish the other channels soon as well.",
    media: [
      {
        title: "Just Chillax",
        type: "image",
        src: "/promotion_imgs/justchillax.png",
      },
      {
        title: "Just Chillax Mobile",
        type: "image",
        src: "/blog_media/justchillaxmobile.jpg",
      },
    ],
    badgeTexts: ["React", "React Three Fiber", "React-Responsive", "Vercel"],
    buttonLink: "https://justchillax.vercel.app/",
    buttonLinkTooltipText: "Explore Now",
  },
  {
    title: "React Three Fiber and more additions (and bugs)...",
    date: "06/04/2024",
    description: "I have continued with my web app and its come a long way since the last blog, there are way more interactive elements in the scene, with addition of sound and music corresponding to those interacting items, using a combination of use-sound and html Audio. The next thing I had to implement was the computer in the scene, which I did with the help of winXP, there are still some bugs in putting a html element in a r3f canvas but it does the job for now. Added a camera movement when interacting with the computer as well.\n\nLearning r3f is difficult especially with confusing documentation but I've enjoyed the challenge so far. The next step is to implement the TV similar to my00stv, which I am thinking of doing by using the Youtube API and iframe to put that into the canvas in a similar way to the computer.\n\nI've also enjoyed (learning as I go) figuring out react hooks and how to use them to interact with components. Reminder to fix winXP bugs with screen size as windows can juse be dragged off the screen :(",
    media: [
      {
        title: "Just Chillax Bug",
        type: "image",
        src: "/blog_media/webapppcbug.png",
      },
    ],
    badgeTexts: ["React", "React Three Fiber", "WinXP"],
    buttonLink: "https://github.com/ShizukuIchi/winXP",
    buttonLinkTooltipText: "WinXP",
  },
  {
    title: "Learning Three.JS and React",
    date: "04/04/2024",
    description: "I have recently been delving into React and Three.js web application development and wanted to create a website using 3D elements that is inspired by my00stv.com. I wanted to create 3D bedroom set in the 2000s, where you can interact with objects in the room, and use the TV and Computer in the scene, similar to the TV in my00stv.com.\n\nWhat I realised really quickly was I had to create this bedroom in Blender first, so I did. Now that I made the bedroom in blender, I need to put that in my web application, so i used React Three Fiber to do this. I first used gltfjsx to convert my .glb model into a react component with some minor adjustments. I also added multiple functions for interaction with the window and lamp in the scene, and added this components to the canvas in my App.js. I hope to continue adding to the web app and hopefully publish the website to the public one day...\n\nThis takes way more work than I realised, making me learn skills in 3D modelling using Blender which I have found fun to do. Next time, I add more interactivity with objects in the scene, and then get on with implementing the TV.",
    media: [
      {
        title: "Blender Model",
        type: "image",
        src: "/blog_media/blender_model.png",
      },
      {
        title: "Model with textures",
        type: "image",
        src: "/blog_media/blender_model2.png",
      },
      {
        title: "Code",
        type: "image",
        src: "/blog_media/04042024code1.png",
      },
      {
        title: "Code",
        type: "image",
        src: "/blog_media/04042024code2.png",
      },
    ],
    badgeTexts: ["Blender", "ThreeJS", "React"],
    buttonLink: "https://www.my00stv.com/",
    buttonLinkTooltipText: "my00stv.com",
  },
  {
    title: "Training and deploying a DL model",
    date: "01/03/2024",
    description: "This is my first attempt of creating and training a model on my own machine by using a linux environment on windows which was a task in itself. After managing to get all that up and running with the necessary dependencies, I made use of Jupyter and the notebook feature to test and train my model. The model uses a great dataset I found that represents categories of music into spectrograms.\n\nI fine tuned my model doing 80 epochs because I began to find diminishing returns and wanted to get my model on and running. The model has 80.5% accuracy rate and tends to get confused with hip-hip and rock based on the confusion matrix. I would have liked this to be better in terms of accuracy but decided that I don't wanna waste my time anymore on training. The next step was to implement the model onto Hugging Face to host.\n\nAfter some (many) google searches later, I finally got a working python code to deploy the model on Hugging Face using gradio. I tested the hugging space with a 30sec extract from Jay-Z's 'The Story of OJ' which is very much a hip-hop song.",
    media: [
      {
        title: "Confusion Matrix",
        type: "image",
        src: "/blog_media/training_music_model1.png",
      },
      {
        title: "Country Song Test",
        type: "image",
        src: "/blog_media/training_music_model2.png",
      },
      {
        title: "Hugging Face Code",
        type: "image",
        src: "/blog_media/training_music_gradio_code.png",
      },
      {
        title: "Final App on Hugging Face",
        type: "image",
        src: "/blog_media/jayzthestoryofoj.png",
      },
    ],
    badgeTexts: ["Deep Learning", "Jupyter", "Hugging Face"],
    buttonLink: "https://huggingface.co/spaces/bread03/music_classifier",
    buttonLinkTooltipText: "Hugging Face App",
  },
  {
    title: "Diving into AI and Deep Learning",
    date: "28/02/2024",
    description: "I have always wanted to delve into AI and machine learning but was always daunted by the task of it but luckily I came across a great learning resource by fast.ai. So far I am up to lesson 2 of the course, and hope to deploy a my own macine learning project. So far in following the course, I have experimented with fastai and Pytorch, creating and training a simple data classification model for cats and dogs. Although quite simple, this is my first dive into deep learning.\n\nSo far I have learnt the basics of deep learning, how to set yp and train a simple model using fastai and how to fine tune the model. I hope to improve on error rate adn training a model for other types of media.",
    media: [
      {
        title: "Cat/Dog Classification",
        type: "image",
        src: "/blog_media/cat_dog_model1.png",
      },
      {
        title: "Cat/Dog Classification",
        type: "image",
        src: "/blog_media/cat_dog_model2.png",
      },
    ],
    badgeTexts: ["Fast.ai", "Deep Learning", "PyTorch"],
    buttonLink: "https://course.fast.ai/",
    buttonLinkTooltipText: "Fast.ai Course",
  },
]