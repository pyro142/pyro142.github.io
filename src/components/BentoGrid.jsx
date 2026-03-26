import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkCard from './WorkCard'
import SkillsCard from './SkillsCard'
import ContactCard from './ContactCard'
import ProjectPanel from './ProjectPanel'
import { projects } from '../data/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function Card({ children, className = '', i = 0 }) {
  return (
    <motion.div className={className} custom={i} variants={cardVariants} initial="hidden" animate="show">
      {children}
    </motion.div>
  )
}

export default function BentoGrid({ visible }) {
  const [activeProject, setActiveProject] = useState(null)

  if (!visible) return null

  return (
    <>
          <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
      >

        <section id="work" className="px-4 md:px-8 max-w-6xl mx-auto pb-24 pt-6">
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'minmax(100px, auto)' }}>

            {/* About card */}
            <Card i={0} className="col-span-12 md:col-span-7 row-span-2">
              <div className="bento-card noise-overlay h-full min-h-[260px] p-7 flex flex-col justify-between bg-gradient-to-br from-[#141414] to-[#0f0f1a]">
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest mb-3 block">About</span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-4">
                    Infrastructure first,<br />
                    <span className="text-[#a78bfa]">everything else second.</span>
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                    I specialise in building and maintaining the systems that keep everything running — servers, networks, pipelines, and the boring (critical) stuff in between.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-4">
                  {['Linux', 'Networking', 'Automation', 'Cloud'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] text-xs text-neutral-400">{tag}</span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Status */}
            <Card i={1} className="col-span-12 md:col-span-5">
              <div className="bento-card noise-overlay h-full min-h-[120px] p-6 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95]">
                <span className="text-xs text-purple-300 uppercase tracking-widest mb-2 block">Currently</span>
                <p className="font-display font-bold text-xl text-white leading-snug">Open to new infrastructure roles</p>
                <p className="text-purple-300 text-sm mt-1">Based in the UK · Remote friendly</p>
              </div>
            </Card>

            {/* Toolbox */}
            <Card i={2} className="col-span-12 md:col-span-5">
              <SkillsCard />
            </Card>

            {/* ChatApp card */}
            <Card i={3} className="col-span-12 md:col-span-6">
              <WorkCard
                title={projects.chatapp.title}
                description={projects.chatapp.description}
                image="/images/chatapp-screenshot.png"
                tags={projects.chatapp.tags}
                accent={projects.chatapp.accent}
                onClick={() => setActiveProject(projects.chatapp)}
                arrow={false}
              />
            </Card>

            {/* Placeholder card */}
            <Card i={4} className="col-span-12 md:col-span-6">
              <WorkCard
                title={projects.placeholder.title}
                description={projects.placeholder.description}
                tags={projects.placeholder.tags}
                accent={projects.placeholder.accent}
                onClick={() => setActiveProject(projects.placeholder)}
              />
            </Card>

            {/* Skills bars */}
            <Card i={5} className="col-span-12 md:col-span-8">
              <div className="bento-card noise-overlay p-7 h-full min-h-[180px]" id="skills">
                <span className="text-xs text-neutral-500 uppercase tracking-widest mb-4 block">Skills</span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { label: 'Linux / Unix', level: 90 },
                    { label: 'Networking', level: 85 },
                    { label: 'AWS / Cloud', level: 75 },
                    { label: 'Docker / K8s', level: 70 },
                    { label: 'Python / Bash', level: 80 },
                    { label: 'CI/CD', level: 72 },
                  ].map(({ label, level }) => (
                    <div key={label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs text-neutral-300">{label}</span>
                        <span className="text-xs text-neutral-600">{level}%</span>
                      </div>
                      <div className="h-1 bg-[#222] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card i={6} className="col-span-12 md:col-span-4" id="contact">
              <ContactCard />
            </Card>
          </div>
        </section>
      </motion.div>

      {/* Slide-in project panel */}
      <AnimatePresence>
        {activeProject && (
          <ProjectPanel
            key={activeProject.id}
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
