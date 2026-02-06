import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { MessageCircleMore } from "@/components/animate-ui/icons/message-circle-more";
import { LiquidButton } from "@/components/animate-ui/primitives/buttons/liquid";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/animate-ui/primitives/radix/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Brendan | Contact",
  description: "Get in touch.",
};

export default function ContactPage() {

  const user = 'brendan.nguyen04';
  const site = 'gmail.com';

  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-6">
      <Fade >
        <Slide >
          <Tilt className="pointer-events-none">
            <TiltContent className="pointer-events-auto">
              <Card className="w-full bg-card opacity-80 border-none drop-shadow-lg pointer-events-auto">
                <CardHeader className="flex">
                  <AnimateIcon animateOnView animateOnHover>
                    <MessageCircleMore />
                  </AnimateIcon>
                  <CardTitle className="text-lg">Contact Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-md pointer-events-auto flex flex-col gap-4">
                  <p>
                    Contact me through LinkedIn or via the email below.
                  </p>
                  <Collapsible>
                    <CollapsibleTrigger><LiquidButton className="text-sm font-medium px-4 py-2 h-10 overflow-hidden [--liquid-button-color:var(--primary)] [--liquid-button-background-color:var(--color-current-pos-card)] text-primary hover:text-primary-foreground rounded-xl">Reveal Email</LiquidButton></CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <Magnetic range={40} strength={0.25}>
                        <a href={'mailto:' + user + '@' + site} style={{textDecoration: 'none'}}>{user + '@' + site}</a>
                      </Magnetic>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </TiltContent>
          </Tilt>
        </Slide>
      </Fade>

    </section>
  );
}