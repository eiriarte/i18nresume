import type { Skill } from "./interfaces";
import { useContext } from "react";
import CollapsibleSection from "./CollapsibleSection";
import Pill from "./Pill";
import { LocaleContext } from "./I18NResume";
import OpacityFilter from "./OpacityFilter";

export default function SectionSkills({
  skills,
}: {
  skills: Skill[] | undefined;
}) {
  const localeContext = useContext(LocaleContext);
  if (!skills?.length) return null;
  return (
    <CollapsibleSection id="skills" heading={localeContext.strings.skills}>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <OpacityFilter
            key={skill.key as string}
            keywords={skill.keywords ?? []}
            inline={true}
          >
            <Pill name={skill.name ?? ""} level={skill.level} />
          </OpacityFilter>
        ))}
      </div>
    </CollapsibleSection>
  );
}
