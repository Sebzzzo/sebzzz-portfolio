import { education, skills } from "@/data/profile";
import Reveal from "./Reveal";

export default function EducationSkills() {
  return (
    <div className="p-8 lg:pl-12 lg:pr-10 lg:py-14 w-full">
      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl md:text-3xl tracking-[0.02em] text-[var(--text)] mb-8">
          EDUCACIÓN &amp; HABILIDADES
        </h2>

        {/* SUB-BLOCK: EDUCATION */}
        <div className="mb-8">
          <h3 className="label text-[var(--accent)] mb-4">EDUCACIÓN</h3>
          <ul role="list" className="border-t border-[var(--line)]">
            {education.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-start gap-4 py-3.5 border-b border-[var(--line)]"
              >
                <div>
                  <h4 className="text-[14px] font-semibold text-[var(--text)] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[13px] text-[var(--muted)] mt-0.5">
                    {item.institution}
                  </p>
                </div>
                <span className="text-[13px] font-medium text-[var(--accent)] tabular-nums whitespace-nowrap pt-0.5">
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* SUB-BLOCK: SKILLS */}
        <div>
          <h3 className="label text-[var(--accent)] mb-4">HABILIDADES</h3>
          <ul role="list" className="flex flex-wrap gap-[10px]">
            {skills.map((skill, index) => (
              <li
                key={skill}
                className="animate-chip border border-[var(--line)] bg-transparent rounded-[6px] px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] font-medium text-[var(--muted)] hover:border-[var(--line-accent)] hover:text-[var(--text)] hover:bg-[rgba(214,20,30,0.08)] transition-all duration-200 cursor-default select-none"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

