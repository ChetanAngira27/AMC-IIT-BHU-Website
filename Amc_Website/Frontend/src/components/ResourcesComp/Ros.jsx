import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdownContent = `
## Installation Steps (Simply copy and paste each command into the terminal. To paste, use \`Ctrl + Shift + V\`)

---

# For Windows

### 1. Open Terminal in Ubuntu & Set Locale:

\`\`\`bash
locale
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
locale
\`\`\`

### 2. Setup Sources:

\`\`\`bash
sudo apt install software-properties-common
sudo add-apt-repository universe
\`\`\`

### Add ROS 2 GPG key with apt:

\`\`\`bash
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
\`\`\`

### Add the ROS 2 repository:

\`\`\`bash
echo "deb [arch=\\$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu \\$(. /etc/os-release && echo \\$UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
\`\`\`

### 3. Install ROS 2 packages:

\`\`\`bash
sudo apt update
sudo apt upgrade
sudo apt install ros-humble-desktop
\`\`\`

### 4. Install Gazebo for ROS 2:

\`\`\`bash
sudo apt install ros-humble-gazebo-ros
\`\`\`

### 5. Environment Setup:

\`\`\`bash
source /opt/ros/humble/setup.bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Install colcon:

\`\`\`bash
sudo apt install python3-colcon-common-extensions
\`\`\`

## Check Installation:

### Open terminal 1:

\`\`\`bash
ros2 run demo_nodes_cpp talker
\`\`\`

### Open terminal 2:

\`\`\`bash
ros2 run demo_nodes_py listener
\`\`\`

---

# For Mac User (Ubuntu ARM)

### Initial System Setup

\`\`\`bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y software-properties-common build-essential cmake git curl wget gnupg lsb-release
\`\`\`

# Installation Guide for ROS 2 Humble and Gazebo Harmonic on Ubuntu 22.04 (ARM)

## 1. ROS 2 Humble Installation

### Set Locale

\`\`\`bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
\`\`\`

### Add ROS 2 Repository

\`\`\`bash
sudo apt install curl gnupg lsb-release
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=\\$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu \\$(. /etc/os-release && echo \\$UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
\`\`\`

### Install ROS 2 Humble

\`\`\`bash
sudo apt update
sudo apt install -y ros-humble-desktop
\`\`\`

### Setup ROS 2 Environment

\`\`\`bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Install Development Tools

\`\`\`bash
sudo apt install -y ros-dev-tools python3-colcon-common-extensions python3-rosdep python3-pip
sudo rosdep init
rosdep update
\`\`\`

## 2. Gazebo Harmonic Installation

### Add Gazebo Repository

\`\`\`bash
sudo curl https://packages.osrfoundation.org/gazebo.gpg --output /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg
echo "deb [arch=\\$(dpkg --print-architecture) signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable \\$(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/gazebo-stable.list > /dev/null
\`\`\`

### Install Gazebo Harmonic

\`\`\`bash
sudo apt update
sudo apt install -y gz-harmonic
\`\`\`

### Environment Setup for ARM

\`\`\`bash
echo "export LIBGL_ALWAYS_SOFTWARE=1" >> ~/.bashrc
echo "export MESA_GL_VERSION_OVERRIDE=3.3" >> ~/.bashrc
echo "export OGRE_RTT_MODE=Copy" >> ~/.bashrc
source ~/.bashrc
\`\`\`

## 3. ROS 2 - Gazebo Integration

### Install Integration Packages

\`\`\`bash
sudo apt update
sudo apt install -y ros-humble-ros-gz-bridge ros-humble-ros-gz-sim ros-humble-ros-gz-interfaces
\`\`\`

### Create a Workspace

\`\`\`bash
mkdir -p ~/ros_gz_ws/src
cd ~/ros_gz_ws/src
\`\`\`

### Build Workspace

\`\`\`bash
export ASAN_OPTIONS=detect_leaks=0
export CCACHE_SLOPPINESS=pch_defines,time_macros
export CCACHE_COMPRESS=1
export CCACHE_MAXSIZE=5G
MAKEFLAGS="-j1" colcon build --symlink-install --packages-select ros_gz_bridge --cmake-args -DCMAKE_CXX_FLAGS="-O1"
colcon build --symlink-install --packages-skip ros_gz_bridge
\`\`\`

### Source the Workspace

\`\`\`bash
echo "source ~/ros_gz_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
\`\`\`

## Final Check

\`\`\`bash
ros2 run demo_nodes_cpp talker
ros2 run demo_nodes_py listener
\`\`\`

### Setup complete!
`


export default function Ros() {
    return (
        <div className="flex min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30 overflow-x-hidden">

            {/* Added ml-0 for mobile, lg:ml-64 for desktop */}
            <main className="flex-1 ml-0 lg:ml-64 w-full">
                <header className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-4 py-12 md:px-8 md:py-20 lg:px-16 mt-5">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 bg-cyan-500/10 blur-[100px]" />
                    <div className="max-w-4xl relative z-10">
                        <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-500/20 mb-4">
                            Step-by-Step Guide
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                            ROS 2 <span className="text-cyan-400">Installation</span> Guide
                        </h1>
                        <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
                            The ultimate guide to setting up your ROS 2 development environment for awesome simulations and robotics projects.<br></br><br />

                            This guide will help you to:
                            <br></br>- Dual Boot your System.
                            <br></br>- Install ROS 2 quickly and painlessly.
                            <br></br>- Jumpstart your robotics project.

                            <br></br><br />
                            System Requirements

                            <br />- Ubuntu 22.04 (Jammy)
                            <br />- At least 4GB RAM (8GB recommended for simulations)
                            <br />- 50GB+ free disk space
                            <br />- Stable internet connection

                            <br />
                            <br />
                            DUAL BOOT or VM BOX Installation<br />
                            Option 1: Dual Boot (Windows)<br></br>

                            🔹 Better performance (full hardware access)<br />

                            🔹 Recommended for serious ROS development<br /><br />
                            <a className='text-red-400 wrap-break-words' href='https://docs.google.com/document/d/1RVChwuKGptD5uSHYs5tflR0sVBAdXiwsjumxEQVBVG4/edit?usp=sharing'>Complete Dual Boot Guide</a>

                            <br /><br />
                            Option 2: Virtual Machine (Windows/Mac)<br />

                            🔹 Safer for beginners (no partitioning)<br />

                            🔹 Easy to delete if something goes wrong<br /><br />

                            <a className='text-red-400 wrap-break-words' href='https://docs.google.com/document/d/1L55AWdZwC15YzvmSWa1djZLB4AHl80aEcOfpS0ie9nM/edit?usp=sharing'>Virtual Machine Setup Guide</a>
                            <br /><br />
                            You need to install Ubuntu 22.04 only --
                            <br />
                            <a className='text-green-500 wrap-break-words' href='https://cdimage.ubuntu.com/releases/22.04/release/'>This ISO file LINK is for 64-bit ARM (ARMv8/AArch64) architecture.</a><br />
                            <br />
                            <a className='text-green-500 wrap-break-words' href='https://releases.ubuntu.com/jammy/'>This ISO file LINK is for AMD64 or EM64T architecture (e.g., Athlon64, Opteron, EM64T Xeon).</a><br /><br />

                            <a className='text-yellow-400 vt323-regular text-2xl md:text-3xl wrap-break-words' href='https://docs.ros.org/en/foxy/index.html'>To Learn Ros2 Follow This Link</a>


                        </p>
                    </div>
                </header>
                <section className="px-4 py-10 md:px-8 md:py-16 lg:px-16 lg:py-24 bg-[#020617]">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className="
                prose prose-invert prose-slate max-w-none
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-headings:break-words
                prose-h1:text-3xl md:prose-h1:text-4xl
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2 prose-h2:mt-12 md:prose-h2:mt-16
                prose-h3:text-lg md:prose-h3:text-xl prose-h3:text-cyan-400 prose-h3:mt-8 md:prose-h3:mt-10
                prose-p:leading-8 prose-p:text-slate-400
                prose-li:text-slate-400
                prose-strong:text-cyan-100
                prose-a:text-cyan-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-cyan-300 prose-a:break-words
                prose-code:text-cyan-300 prose-code:bg-slate-800/50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-blockquote:border-l-cyan-500 prose-blockquote:bg-slate-900/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-pre:max-w-[85vw] md:prose-pre:max-w-full
              "
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({ inline, className, children }) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        if (!inline && match) {
                                            return (
                                                <div className="group relative my-8 max-w-full">
                                                    <div className="absolute -top-3 right-4 px-2 py-1 bg-slate-800 rounded text-[10px] font-bold uppercase tracking-widest text-slate-400 z-10">
                                                        {match[1]}
                                                    </div>
                                                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                                                        <SyntaxHighlighter
                                                            style={vscDarkPlus}
                                                            language={match[1]}
                                                            PreTag="div"
                                                            customStyle={{
                                                                background: '#0f172a',
                                                                padding: '1.5rem',
                                                                margin: 0,
                                                                fontSize: '0.9rem',
                                                                lineHeight: '1.6',
                                                            }}
                                                        >
                                                            {String(children).replace(/\n$/, '')}
                                                        </SyntaxHighlighter>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return (
                                            <code className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-sm text-cyan-300 break-all">
                                                {children}

                                            </code>
                                        )
                                    },
                                }}
                            >
                                {markdownContent}
                            </ReactMarkdown>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}