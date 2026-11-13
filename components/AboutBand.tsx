import EducationSkills from "./EducationSkills";
import WorkProcess from "./WorkProcess";
import QuotePanel from "./QuotePanel";

export default function AboutBand() {
  return (
    <section
      aria-label="About, process and philosophy"
      className="bg-[var(--bg)] border-b border-[var(--line)]"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[39fr_35fr_26fr]">
        {/* COLUMN 1: EDUCATION & SKILLS (Anchored as #about) */}
        <div
          id="about"
          className="scroll-mt-[64px] md:scroll-mt-[72px] border-b lg:border-b-0 lg:border-r border-[var(--line-accent)] flex flex-col justify-start"
        >
          <EducationSkills />
        </div>

        {/* COLUMN 2: WORK PROCESS (Anchored as #process) */}
        <div
          id="process"
          className="scroll-mt-[64px] md:scroll-mt-[72px] border-b lg:border-b-0 lg:border-r border-[var(--line-accent)] flex flex-col justify-start"
        >
          <WorkProcess />
        </div>

        {/* COLUMN 3: QUOTE PANEL */}
        <div className="flex flex-col justify-stretch">
          <QuotePanel />
        </div>
      </div>
    </section>
  );
}
