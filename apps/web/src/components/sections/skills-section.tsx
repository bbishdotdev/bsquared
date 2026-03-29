import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/lib/skill-colors";

interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsSectionProps {
  categories: readonly SkillCategory[];
  blurFadeDelay: number;
}

export function SkillsSection({
  categories,
  blurFadeDelay,
}: SkillsSectionProps) {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>

        <div className="mt-2 space-y-4">
          {categories.map((category, catIndex) => (
            <BlurFade
              key={category.name}
              delay={blurFadeDelay * 10 + catIndex * 0.05}
            >
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`text-xs px-2 py-0.5 ${getCategoryColor(category.name)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
