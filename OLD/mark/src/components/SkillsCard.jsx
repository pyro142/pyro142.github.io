const tools = ['Terraform', 'Ansible', 'Docker', 'K8s', 'AWS', 'Linux', 'Python', 'Git', 'CI/CD', 'Nginx']

export default function SkillsCard() {
  return (
    <div className="bento-card noise-overlay p-5 h-full min-h-[120px]">
      <span className="text-xs text-neutral-500 uppercase tracking-widest mb-3 block">Toolbox</span>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] border border-[#2a2a2a] text-xs text-neutral-300 hover:border-[#7c3aed55] hover:text-white transition-all duration-200"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
