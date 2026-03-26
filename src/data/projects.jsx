// Project data for work cards + detail panels
// Edit this file to update your portfolio projects

export const projects = {
  chatapp: {
    id: 'chatapp',
    title: 'ChatApp',
    tagline: 'A cinematic communication experience designed for high-stakes digital environments. Secure, instant, and refined.',
    description: 'A real-time messaging application focused on speed and security. Leverages WebSockets for sub-100ms latency and end-to-end encryption.',
    tags: ['React', 'Socket.io', 'Node.js'],
    accent: '#7c3aed',
    heroGradient: 'linear-gradient(135deg, #1a0a2e 0%, #0f0a1a 100%)',
    heroContent: (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="w-72 rounded-xl border border-[#333] bg-[#111] p-4 text-xs font-mono">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-neutral-600 text-[10px] uppercase tracking-widest">Encrypted Session</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-24 bg-[#7c3aed33] rounded" />
            <div className="ml-auto w-fit px-3 py-1.5 rounded-lg bg-[#7c3aed] text-white text-[10px]">
              WebSockets humming. 🔌
            </div>
            <div className="text-[10px] text-neutral-600">Type a secure message...</div>
          </div>
        </div>
      </div>
    ),
    sections: [
      {
        label: 'The Mission',
        heading: 'Redefining Real-Time Reliability.',
        content: 'ChatApp was built from necessity — a truly private, low-latency communication tool. The goal was a system managing thousands of concurrent WebSocket connections while ensuring every byte remains cryptographically sealed.',
      },
      {
        label: 'Core Architecture',
        heading: 'Precision Features.',
        features: [
          { icon: '⇄', title: 'Real-time Messaging', body: 'High-performance WebSockets via Socket.io for instantaneous state updates across global regions.' },
          { icon: '🛡', title: 'E2E Encryption', body: 'Every message is encrypted client-side before it hits the wire. Absolute privacy, by design.' },
          { icon: '📡', title: 'User Presence', body: 'Dynamic heartbeat system to monitor active connections and user states in real-time.' },
          { icon: '📈', title: 'Scalable Infra', body: 'Node.js event-driven architecture optimised for horizontal and vertical scaling with minimal overhead.' },
        ],
      },
      {
        label: 'The Engine',
        heading: 'Tech Stack.',
        pills: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS', 'MongoDB'],
      },
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/pyro142', primary: true },
      { label: 'Live Demo', href: '#', primary: false },
    ],
  },

  placeholder: {
    id: 'placeholder',
    title: 'Your Project',
    tagline: 'Replace this with a short punchy description of what the project does and why it matters.',
    description: 'Add your own project here — update src/data/projects.jsx with your details.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    accent: '#ea580c',
    heroGradient: 'linear-gradient(135deg, #1a0f0a 0%, #0f0a0a 100%)',
    heroContent: null,
    sections: [
      {
        label: 'The Problem',
        heading: 'What were you solving?',
        content: 'Describe the problem or context here. What gap did this project fill? Who was it for?',
      },
      {
        label: 'The Build',
        heading: 'How you built it.',
        features: [
          { icon: '⚙️', title: 'Feature One', body: 'Describe a key technical feature or architectural decision.' },
          { icon: '🚀', title: 'Feature Two', body: 'Another interesting aspect of the implementation.' },
          { icon: '🔒', title: 'Feature Three', body: 'Security, reliability, or performance consideration.' },
          { icon: '📊', title: 'Outcome', body: 'What was the result? Numbers, uptime, users, or impact.' },
        ],
      },
      {
        label: 'Stack',
        heading: 'Technologies used.',
        pills: ['Tool 1', 'Tool 2', 'Tool 3', 'Tool 4'],
      },
    ],
    links: [
      { label: 'View on GitHub', href: '#', primary: true },
    ],
  },
}
