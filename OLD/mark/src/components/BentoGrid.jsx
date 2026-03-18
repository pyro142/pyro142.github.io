import FadeIn from './FadeIn'
import WorkCard from './WorkCard'
import SkillsCard from './SkillsCard'
import ContactCard from './ContactCard'

export default function BentoGrid() {
  return (
    <section id="work" className="px-4 md:px-8 max-w-6xl mx-auto pb-24">
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(100px, auto)',
        }}
      >
        {/* ── Row 1 ── */}

        {/* About/intro card — wide left */}
        <FadeIn delay={0} className="col-span-12 md:col-span-7 row-span-2">
          <div className="bento-card noise-overlay h-full min-h-[260px] p-7 flex flex-col justify-between bg-gradient-to-br from-[#141414] to-[#0f0f1a]">
            <div>
              <span className="text-xs text-neutral-500 uppercase tracking-widest mb-3 block">About</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-4">
                Infrastructure first,<br />
                <span className="text-[#a78bfa]">everything else depends on it.</span>
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                I specialise in building and maintaining the systems that keep everything running: servers, networks, users, and the boring (critical) stuff in between.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              {['Cloud', 'On Premise', 'Automation', 'Entra'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] text-xs text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Currently working on — narrow right top */}
        <FadeIn delay={0.1} className="col-span-12 md:col-span-5">
          <div className="bento-card noise-overlay h-full min-h-[120px] p-6 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95]">
            <span className="text-xs text-purple-300 uppercase tracking-widest mb-2 block">Currently</span>
            <p className="font-display font-bold text-xl text-white leading-snug">
              Open to new infrastructure roles
            </p>
            <p className="text-purple-300 text-sm mt-1">
              Based in the UK · Remote friendly
            </p>
          </div>
        </FadeIn>

        {/* Skills pill card — narrow right bottom */}
        <FadeIn delay={0.15} className="col-span-12 md:col-span-5">
          <SkillsCard />
        </FadeIn>

        {/* ── Row 2 ── */}

        {/* Work card 1 */}
        <FadeIn delay={0.2} className="col-span-12 md:col-span-6">
          <WorkCard
            title="Hybrid to Clodu Migration"
            description="Migrating from a hybid environment to Azure only, including workstations, users & servers."
            tags={['Azure', 'Powershell', 'Intune']}
            accent="#16a34a"
            href="#"
          />
        </FadeIn>

        {/* Work card 2 */}
        <FadeIn delay={0.25} className="col-span-12 md:col-span-6">
          <WorkCard
            title="Another Project"
            description="Another project to add later."
            tags={['later', 'later', 'later']}
            accent="#0c6cea"
            href="#"
          />
        </FadeIn>

        {/* ── Row 3 ── */}

        {/* Skills deep-dive */}
        <FadeIn delay={0.3} className="col-span-12 md:col-span-8" id="skills">
          <div className="bento-card noise-overlay p-7 h-full min-h-[180px]">
            <span className="text-xs text-neutral-500 uppercase tracking-widest mb-4 block">Skills</span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: 'Intune', level: 85 },
                { label: 'Entra ID', level: 90 },
                { label: 'Azure Cloud', level: 75 },
                { label: 'Javascript', level: 45 },
                { label: 'Powershell', level: 80 },
                { label: 'Project Management', level: 72 },
              ].map(({ label, level }) => (
                <div key={label} className="group">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs text-neutral-300">{label}</span>
                    <span className="text-xs text-neutral-600">{level}%</span>
                  </div>
                  <div className="h-1 bg-[#222] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] rounded-full transition-all duration-1000"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contact card */}
        <FadeIn delay={0.35} className="col-span-12 md:col-span-4" id="contact">
          <ContactCard />
        </FadeIn>
      </div>
    </section>
  )
}
