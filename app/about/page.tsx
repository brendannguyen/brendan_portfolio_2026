import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/animate-ui/components/animate/tooltip";
import { Blocks } from "@/components/animate-ui/icons/blocks";
import { Cctv } from "@/components/animate-ui/icons/cctv";
import { Clapperboard } from "@/components/animate-ui/icons/clapperboard";
import { Forklift } from "@/components/animate-ui/icons/forklift";
import { Gavel } from "@/components/animate-ui/icons/gavel";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { Heart } from "@/components/animate-ui/icons/heart";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Lightbulb } from "@/components/animate-ui/icons/lightbulb";
import { Pickaxe } from "@/components/animate-ui/icons/pickaxe";
import { Terminal } from "@/components/animate-ui/icons/terminal";
import { User } from "@/components/animate-ui/icons/user";
import { LiquidButton } from "@/components/animate-ui/primitives/buttons/liquid";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Brendan | About Me",
  description: "Learn more about me",
};

const skills = [
  "AWS", "Terraform", "Ansible", "Kubernetes", "MCP", "Python", "JavaScript", "Java", "C", "C++", "React", "NodeJS", "MongoDB", "Splunk", "Machine Learning", "Pytorch", "Geospatial", "Object Oriented Design", "Adobe Premiere Pro", "Adobe Illustrator", "Blender", "Android Studio", "Pro Tools", "UE5", "MIPS Assembly Code", "Git", "MATLAB", "Microsoft Office", "Drafting", "Production Assistance", "Collaborating", "Editing", "Front-end", "Back-end"
]

const interests = [
  "Meeting likeminded people", "Working in a team", "Films", "Computers", "Gaming", "Football (soccer)", "Technology", "Hiking", "Learning new skills", "App Development", "3D Printing", "Gaming Programming", "Design", "Sleeping :)"
]


export default function AboutMePage() {

  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-6">
      <Fade >
        <Slide >
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <User />
                  </AnimateIcon>
                  <CardTitle className="text-lg">About Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-md pointer-events-auto flex flex-col gap-4">
                  <p>
                    I am currently a final year software engineering student at Monash University with a passion for technology and programming, driven to continuously explore the tech space, and learn and develop as a person and as a software engineer.
                  </p>
                  <p>
                    Software experience in research & development projects which includes AWS services, deploying and managing kubernetes clusters, machine learning, geospatial data, devOps, etc. This also includes presenting and demonstrating to key stakeholders and executives, conducting and taking part in school events as a Software Developer for Leidos AU.
                  </p>
                  <p>
                    I also have experiences in the sports media industry and in the retail industry which has taught me valuable lessons and has helped me to develop my collaborating skills to output a product or service that is effective and of as high quality as possible. I am always eager to learn new skills and gain new experiences, so please feel free to contact me relating to potential opportunities in software and filmmaking.
                  </p>
                  <Link href="/Brendan_Nguyen_Quick_Resume.pdf" download className="hover:cursor-pointer w-fit">
                  <LiquidButton className="hover:cursor-pointer text-sm w-fit font-medium px-4 py-2 h-10 overflow-hidden [--liquid-button-color:var(--primary)] [--liquid-button-background-color:var(--color-current-pos-card)] text-primary hover:text-primary-foreground rounded-xl">
                    Download Resume
                  </LiquidButton>
                  </Link>
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
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <Forklift />
                  </AnimateIcon>
                  <CardTitle className="text-lg">Experiences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-md text-experience-text pointer-events-auto flex flex-col gap-4 flex-wrap">
                  <div className="flex justify-between flex-wrap">
                    <div className="flex gap-2">
                      <AnimateIcon animateOnView animateOnHover>
                        <Terminal />
                      </AnimateIcon>
                      <p>Software Developer @ Leidos Australia.</p>
                    </div>
                    <p>January 2026 - Now</p>
                  </div>
                  <div className="flex justify-between flex-wrap">
                    <div className="flex gap-2">
                      <AnimateIcon animateOnView animateOnHover>
                        <Lightbulb />
                      </AnimateIcon>
                      <p>Software Intern @ Leidos Australia.</p>
                    </div>
                    <p>February 2025 - January 2026</p>
                  </div>
                  <div className="flex justify-between flex-wrap">
                    <div className="flex gap-2">
                      <AnimateIcon animateOnView animateOnHover>
                        <Clapperboard />
                      </AnimateIcon>
                      <p>Production Assistant for ATP Media @ Sydney United Cup.</p>
                    </div>
                    <p>2023, 2024</p>
                  </div>
                  <div className="flex justify-between flex-wrap">
                    <div className="flex gap-2">
                      <AnimateIcon animateOnView animateOnHover>
                        <Cctv />
                      </AnimateIcon>
                      <p>Junior Camera Assitant & Runner for ATP Media @ Australian Open.</p>
                    </div>
                    <p>2021, 2022</p>
                  </div>
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
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <Gavel />
                  </AnimateIcon>
                  <CardTitle className="text-lg">Qualifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-md text-experience-text pointer-events-auto flex flex-col gap-4 flex-wrap">
                  <div className="flex justify-between flex-wrap">
                    <div className="flex gap-2">
                      <AnimateIcon animateOnView animateOnHover>
                        <Pickaxe />
                      </AnimateIcon>
                      <p>Bachelor of Software Engineering (Honours) @ Monash University.</p>
                    </div>
                    <p>2022 - 2026</p>
                  </div>
                  <div className="flex justify-between flex-wrap">
                    <div className="flex gap-2">
                      <AnimateIcon animateOnView animateOnHover>
                        <Clapperboard />
                      </AnimateIcon>
                      <p>Bachelor of Communication Media @ RMIT University.</p>
                    </div>
                    <p>2019 - 2021</p>
                  </div>
                  <div className="flex justify-between flex-wrap">
                    <div className="flex gap-2">
                      <AnimateIcon animateOnView animateOnHover>
                        <Hammer />
                      </AnimateIcon>
                      <p>CERT IV Subset in Building Design Drafting @ Chisholm Institute.</p>
                    </div>
                    <p>2017 - 2018</p>
                  </div>
                </CardContent>
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>

      <Fade delay={600}>
        <Slide delay={600}>
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto" id="skills-expanded">
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <Pickaxe />
                  </AnimateIcon>
                  <CardTitle className="text-lg">Skills Expanded</CardTitle>
                </CardHeader>
                <CardContent className=" text-md text-experience-text pointer-events-auto flex gap-2 flex-wrap">
                  {skills.map((skill, i) => (
                    <Magnetic key={i} ><Badge >{skill}</Badge></Magnetic>
                  ))}
                </CardContent>
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>

      <Fade delay={800}>
        <Slide delay={800}>
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <Heart />
                  </AnimateIcon>
                  <CardTitle className="text-lg">Interests</CardTitle>
                </CardHeader>
                <CardContent className=" text-md text-experience-text pointer-events-auto flex gap-2 flex-wrap">
                  {interests.map((interest, i) => (
                    <Magnetic key={i}><Badge >{interest}</Badge></Magnetic>
                  ))}
                </CardContent>
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>
      
    </section>
  );
}