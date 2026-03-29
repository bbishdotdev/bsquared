import { BlurFade } from "@/components/ui/blur-fade";

interface Belief {
  title: string;
  description: string;
}

export interface BeliefsSectionProps {
  beliefs: readonly Belief[];
  blurFadeDelay: number;
}

export function BeliefsSection({ beliefs, blurFadeDelay }: BeliefsSectionProps) {
  return (
    <section id="beliefs">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 5}>
          <h2 className="text-xl font-bold">Beliefs</h2>
        </BlurFade>
        <div className="space-y-4">
          {beliefs.map((belief, index) => (
            <BlurFade
              key={belief.title}
              delay={blurFadeDelay * 5 + (index + 1) * 0.05}
            >
              <div>
                <p className="font-semibold text-sm">{belief.title}</p>
                <p className="text-sm text-muted-foreground">
                  {belief.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
