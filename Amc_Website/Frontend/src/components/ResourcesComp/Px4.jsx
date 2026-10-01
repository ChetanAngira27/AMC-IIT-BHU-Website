import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdownContent = `
## Prerequisites

Before proceeding, ensure you have the **PX4 Developer Toolchain** installed for your specific operating system. This includes the necessary cross-compilers for NuttX and simulation dependencies.

---

## 1. Download PX4 Source Code

The PX4 source is hosted on GitHub. Always use the \`--recursive\` flag to initialize all required submodules.

\`\`\`bash
git clone https://github.com/PX4/PX4-Autopilot.git --recursive
\`\`\`

> 💡 **Note:** If you already have the developer toolchain installed, this repository may already exist on your system.

---

## 2. First Build: Simulation (SITL)

PX4 SITL (Software In The Loop) allows you to run the full autopilot stack on your computer.

\`\`\`bash
cd PX4-Autopilot
# Launch Gazebo SITL with an x500 quadcopter
make px4_sitl gz_x500
\`\`\`

Once launched, you can control the vehicle via the PX4 shell:

\`\`\`bash
# Arm and takeoff
commander takeoff

# Return to land
commander land
\`\`\`

---

## 3. Build for Hardware (Pixhawk/NuttX)

Building for physical flight controllers requires specifying the board target.

### Common Build Targets
| Hardware | Command |
| :--- | :--- |
| **Pixhawk 6X** | \`make px4_fmu-v6x_default\` |
| **Pixhawk 5X** | \`make px4_fmu-v5x_default\` |
| **Pixhawk 4** | \`make px4_fmu-v5_default\` |
| **Pixracer** | \`make px4_fmu-v4_default\` |

### Flash Firmware to Hardware
To upload directly to a board connected via USB, append \`upload\` to the command:

\`\`\`bash
make px4_fmu-v5_default upload
\`\`\`

---

## 4. Build Target Syntax

PX4 uses a specific syntax for build commands to manage vendors, models, and simulation viewers.

\`\`\`text
make [VENDOR_][MODEL][_VARIANT] [VIEWER_MODEL_DEBUGGER_WORLD]
\`\`\`

**Breakdown:**
- **VENDOR:** The silicon/board vendor (e.g., \`px4\`)
- **MODEL:** The board model or \`sitl\`
- **VARIANT:** Usually \`default\`
- **VIEWER:** Simulation engine (e.g., \`gz\`, \`jmavsim\`, or \`none\`)

---

## 5. Troubleshooting & Maintenance

### Submodule Synchronization
If you encounter missing files during build, refresh your submodules:

\`\`\`bash
git submodule update --recursive
make distclean
\`\`\`

### Missing Python Packages
If the build system complains about missing dependencies:

\`\`\`bash
pip3 install --user pyserial jinja2 numpy pandas pyyaml packaging
\`\`\`

---

### Resources
- [Official PX4 Documentation](https://docs.px4.io/main/en/)
- [PX4 GitHub Repository](https://github.com/PX4/PX4-Autopilot)
- [QGroundControl Setup](https://docs.qgroundcontrol.com/)
`;

export default function PX4Installation() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30 overflow-x-hidden">
      <header className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 bg-cyan-500/5 blur-[120px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-400 ring-1 ring-inset ring-cyan-500/20 mb-6 uppercase tracking-wider">
            Firmware & SITL Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-tight">
            PX4 <span className="text-cyan-400">Autopilot</span> Installation
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mb-8">
            Comprehensive guide to building PX4 from source for simulation and 
            real hardware targets including Pixhawk and NuttX boards.
          </p>
          <a 
            href="https://docs.px4.io/main/en/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Explore Official PX4 Docs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-12 md:px-8 lg:py-28">
        <article className="
          prose prose-invert prose-slate max-w-none
          prose-headings:break-words
          prose-h2:text-white prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-16 md:prose-h2:mt-24 prose-h2:mb-8 prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-4
          prose-h3:text-cyan-400 prose-h3:text-lg md:prose-h3:text-xl prose-h3:font-bold prose-h3:mt-12
          prose-p:text-slate-400 prose-p:text-base md:prose-p:text-[18px] prose-p:leading-8
          prose-strong:text-cyan-100 prose-strong:font-bold
          prose-blockquote:border-l-cyan-500 prose-blockquote:bg-slate-900/50 prose-blockquote:py-2 prose-blockquote:px-4 md:prose-blockquote:px-8 prose-blockquote:rounded-r-xl
          prose-hr:border-slate-800 prose-hr:my-12 md:prose-hr:my-20
          prose-table:border prose-table:border-slate-800
          prose-th:bg-slate-900 prose-th:px-4 prose-th:py-3 prose-th:text-cyan-300
          prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-slate-800
          prose-pre:max-w-[85vw] md:prose-pre:max-w-full
        ">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // Responsive table wrapper
              table: ({ children }) => (
                <div className="overflow-x-auto my-8 border border-slate-800 rounded-lg">
                    <table className="min-w-full text-left text-sm">
                        {children}
                    </table>
                </div>
              ),
              code({ inline, className, children }) {
                const match = /language-(\w+)/.exec(className || '')
                if (!inline && match) {
                  return (
                    <div className="my-10 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                      {/* Terminal UI Chrome */}
                      <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                          PX4 Build Console — {match[1]}
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            padding: '1.75rem',
                            background: 'transparent',
                            fontSize: '14px',
                            lineHeight: '1.8',
                          }}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  )
                }
                return (
                  <code className="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-sm break-all">
                    {children}
                  </code>
                )
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  )
}