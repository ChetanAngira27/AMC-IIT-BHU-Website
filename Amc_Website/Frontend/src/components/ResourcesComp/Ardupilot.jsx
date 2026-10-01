import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdownContent = `
<h1 align="center"><b>ArduPilot with ROS 2 Humble Installation Guide</b></h1>

>  **Objective:** This guide will set up a complete development environment including **ArduPilot (source build)**, **Micro-XRCE DDS** communication, and **Gazebo** simulation integration.

---

## 1. Install Dependencies

Begin by updating your system and installing the core version control tools.

\`\`\`bash
sudo apt-get update
sudo apt-get install git gitk git-gui -y
\`\`\`

---

## 2. Clone and Build ArduPilot

### Clone ArduPilot
We need to clone the repository with all submodules to ensure the build environment is complete.

\`\`\`bash
cd ~
git clone --recurse-submodules https://github.com/ArduPilot/ardupilot.git
cd ardupilot
\`\`\`

### Install ArduPilot Prerequisites
ArduPilot provides a script to handle Ubuntu-specific environment setup.

\`\`\`bash
Tools/environment_install/install-prereqs-ubuntu.sh -y
. ~/.profile
\`\`\`

### Configure System Paths
Add the ArduPilot autotest tools to your path to enable SITL commands globally.

\`\`\`bash
echo "export PATH=$PATH:$HOME/ardupilot/Tools/autotest" >> ~/.bashrc
echo "export PATH=/usr/lib/ccache:$PATH" >> ~/.bashrc
source ~/.bashrc
\`\`\`

---

## 3. Communication Protocol: Micro-XRCE

Micro-XRCE-DDS allows high-performance communication between ArduPilot and ROS 2.

### Workspace Setup
\`\`\`bash
mkdir -p ~/ardu_ws/src
cd ~/ardu_ws
vcs import --recursive --input https://raw.githubusercontent.com/ArduPilot/ardupilot/master/Tools/ros2/ros2.repos src
\`\`\`

### Install ROS Dependencies
\`\`\`bash
sudo apt update && rosdep update
source /opt/ros/humble/setup.bash
rosdep install --from-paths src --ignore-src -r -y
\`\`\`

### Install MicroXRCEDDSGen
This tool generates the necessary C++ code for DDS topics.

\`\`\`bash
sudo apt install default-jre -y
git clone --recurse-submodules https://github.com/ardupilot/Micro-XRCE-DDS-Gen.git
cd Micro-XRCE-DDS-Gen
./gradlew assemble
echo "export PATH=\\$PATH:$PWD/scripts" >> ~/.bashrc
source ~/.bashrc
\`\`\`

---

## 4. Simulation with Gazebo

Set up the ArduPilot Gazebo plugin to run physics-based simulations.

\`\`\`bash
cd ~/ardu_ws
vcs import --input https://raw.githubusercontent.com/ArduPilot/ardupilot_gz/main/ros2_gz.repos --recursive src
export GZ_VERSION=harmonic
colcon build --packages-up-to ardupilot_gz_bringup
\`\`\`

---

## 5. Execution

### Run SITL with DDS Enabled
\`\`\`bash
sim_vehicle.py -v ArduCopter --console -DG --enable-dds
\`\`\`

### Launch QGroundControl (GCS)
Ensure you have the correct permissions for serial and USB devices.

\`\`\`bash
sudo usermod -a -G dialout $USER
sudo apt-get remove modemmanager -y
./QGroundControl.AppImage
\`\`\`
`;

export default function ArdupilotRos() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30 overflow-x-hidden">
    
      <header className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 bg-cyan-500/5 blur-[120px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-400 ring-1 ring-inset ring-cyan-500/20 mb-6 uppercase tracking-wider">
            SITL & DDS Setup
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-tight">
            ArduPilot <span className="text-cyan-400">×</span> ROS 2 Humble
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mb-8">
            Complete end-to-end guide for building ArduPilot from source and
            integrating it with ROS 2, Micro-XRCE-DDS, and Gazebo.
          </p>
          <a 
            href="https://ardupilot.org/ardupilot/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Explore Official Docs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-12 md:px-8 lg:py-28">
        <article className="
          prose prose-invert prose-slate max-w-none
          prose-headings:break-words
          prose-h1:hidden
          prose-h2:text-white prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-16 md:prose-h2:mt-24 prose-h2:mb-8 prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-4
          prose-h3:text-cyan-400 prose-h3:text-lg md:prose-h3:text-xl prose-h3:font-bold prose-h3:mt-12
          prose-p:text-slate-400 prose-p:text-base md:prose-p:text-[18px] prose-p:leading-8
          prose-strong:text-cyan-100 prose-strong:font-bold
          prose-blockquote:border-l-cyan-500 prose-blockquote:bg-slate-900/50 prose-blockquote:py-2 prose-blockquote:px-4 md:prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:italic
          prose-hr:border-slate-800 prose-hr:my-12 md:prose-hr:my-20
          prose-pre:max-w-[90vw] md:prose-pre:max-w-full
        ">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ inline, className, children }) {
                const match = /language-(\w+)/.exec(className || '')
                if (!inline && match) {
                  return (
                    <div className="my-10 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl max-w-[85vw] md:max-w-full mx-auto">
                      <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                          <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                          Terminal — {match[1]}
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            padding: '1.5rem',
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