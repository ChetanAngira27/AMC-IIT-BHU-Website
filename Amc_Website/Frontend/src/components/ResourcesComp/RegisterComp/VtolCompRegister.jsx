import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import axios from 'axios';
import bgVideo from '../../../assets/Competetions/Register/Registervideo.mp4';
import upiImage from '../../../assets/Payment/UpiImage.png';

const name = "Vtol'26";
const totalPrice = 2000;
const API_URL = "http://localhost:3000/teamRegister";

const VtolcompRegister = () => {
  const containerRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [teamSize, setTeamSize] = useState(0);
  const [txnId, setTxnId] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [userTeamName, setUserTeamName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backendError, setBackendError] = useState("");
  const [backendSuccess, setBackendSuccess] = useState(false);

  const [leader, setLeader] = useState({
    name: '', phone: '', roll: '', email: '', dept: ''
  });

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());

    const ctx = gsap.context(() => {
      gsap.from('.form-panel', {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power4.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [submitted]);

  useEffect(() => {
    setTeamMembers(prev =>
      Array.from({ length: teamSize }, (_, i) =>
        prev[i] || { name: '', roll: '', dept: '' }
      )
    );
  }, [teamSize]);

  const handleLeaderChange = (field, value) => {
    setLeader(prev => ({ ...prev, [field]: value }));
  };

  const handleMemberChange = (index, field, value) => {
    setTeamMembers(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleDownload = () => window.print();

  const handleSubmit = async () => {
    if (!userTeamName) {
      setBackendError("Squadron Name (Team Name) is required.");
      return;
    }

    setIsSubmitting(true);
    setBackendError("");
    setBackendSuccess(false);

    try {
      const m = teamMembers;
      const payload = {
        teamName: userTeamName,
        leader: leader.name,
        leaderemail: leader.email,
        leaderRollNum: Number(leader.roll),
        leaderDept: leader.dept,
        num: Number(leader.phone),
        TransactionId: txnId,
        mate1Name: m[0]?.name || null, mate1RollNum: m[0]?.roll ? Number(m[0].roll) : null, mate1Dept: m[0]?.dept || null,
        mate2Name: m[1]?.name || null, mate2RollNum: m[1]?.roll ? Number(m[1].roll) : null, mate2Dept: m[1]?.dept || null,
        mate3Name: m[2]?.name || null, mate3RollNum: m[2]?.roll ? Number(m[2].roll) : null, mate3Dept: m[2]?.dept || null,
        mate4Name: m[3]?.name || null, mate4RollNum: m[3]?.roll ? Number(m[3].roll) : null, mate4Dept: m[3]?.dept || null,
      };

      const res = await axios.post(API_URL, payload);
      if (res.status === 200 || res.status === 201) {
        setBackendSuccess(true);
        setSubmitted(true);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.response?.data?.error || "Connection to Mission Control failed.";
      setBackendError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen w-full bg-black font-['VT323'] py-10 px-4 flex justify-center items-center text-white overflow-y-auto">
        <video src={bgVideo} autoPlay loop muted className="fixed inset-0 w-full h-full object-cover blur-md brightness-[0.3]" />
        
        <div id="invoice-capture" className="relative z-10 w-full max-w-2xl bg-black/80 border-2 border-cyan-500 p-6 md:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.2)] mt-10 md:mt-0">
          <div className="mb-6 border border-green-400 text-green-400 py-2 md:py-3 text-center uppercase tracking-widest text-sm md:text-base">
             Mission Logged Successfully
          </div>

          <h1 className="text-4xl md:text-5xl uppercase tracking-tighter mb-6 text-center md:text-left">Mission Receipt</h1>
          
          <div className="space-y-3 md:space-y-4 text-lg md:text-2xl uppercase">
            <div className="flex flex-col md:flex-row md:justify-between border-b border-cyan-500/20 md:border-none pb-2 md:pb-0">
                <span className="text-cyan-500/70">Squadron</span><span className="text-cyan-400">{userTeamName}</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between border-b border-cyan-500/20 md:border-none pb-2 md:pb-0">
                <span className="text-cyan-500/70">Lead Pilot</span><span>{leader.name}</span>
            </div>
            <div className="flex justify-between border-b border-cyan-500/20 md:border-none pb-2 md:pb-0">
                <span className="text-cyan-500/70">Contact</span><span>{leader.phone}</span>
            </div>
            <div className="flex justify-between border-b border-cyan-500/20 md:border-none pb-2 md:pb-0">
                <span className="text-cyan-500/70">Squadron Size</span><span>{teamSize + 1}</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between border-b border-cyan-500/20 md:border-none pb-2 md:pb-0">
                <span className="text-cyan-500/70">Transaction</span><span className="text-purple-400 break-all">{txnId}</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between border-b border-cyan-500/20 md:border-none pb-2 md:pb-0">
                <span className="text-cyan-500/70">Time</span><span>{currentTime}</span>
            </div>
            <div className="flex justify-between pt-6 text-3xl md:text-4xl">
                <span>Total</span><span className="text-green-400">₹{totalPrice}</span>
            </div>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 no-print">
            <button onClick={handleDownload} className="flex-1 bg-cyan-500 text-black py-3 md:py-4 text-xl md:text-2xl hover:bg-cyan-400 transition-colors">SAVE PDF</button>
            <button onClick={() => window.location.reload()} className="flex-1 border border-white py-3 md:py-4 text-xl md:text-2xl hover:bg-white hover:text-black transition-colors">RETURN</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-black font-['VT323'] py-10 px-4 md:py-20">
      <video src={bgVideo} autoPlay loop muted className="fixed inset-0 w-full h-full object-cover blur-sm brightness-[0.5]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-6">
        
        {backendError && (
          <div className="form-panel border border-red-500 bg-red-900/20 text-red-400 p-4 text-lg md:text-xl animate-pulse text-center">
             ERROR: {backendError}
          </div>
        )}

        <div className="form-panel p-5 md:p-8 backdrop-blur-md text-center md:text-left">
          <p className="text-cyan-400 text-base md:text-xl tracking-[0.3em] uppercase">Deployment Manifest</p>
          <h1 className="text-6xl md:text-9xl text-white uppercase tracking-tighter">{name}</h1>
        </div>

        <div className="form-panel bg-black/40 border border-cyan-500/30 p-5 md:p-8 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl text-cyan-500 uppercase tracking-widest font-bold mb-4">Squadron Designation</h2>
          <input 
            className="cyber-input text-2xl md:text-3xl text-cyan-400" 
            placeholder="ENTER TEAM NAME" 
            value={userTeamName} 
            onChange={e => setUserTeamName(e.target.value)} 
          />
        </div>

        <div className="form-panel bg-black/40 border border-white/10 p-5 md:p-8 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl text-cyan-500 uppercase tracking-widest font-bold mb-6 md:mb-8">Primary Pilot (Leader)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-6 md:gap-y-8">
            <input className="cyber-input" placeholder="PILOT NAME" value={leader.name} onChange={e => handleLeaderChange("name", e.target.value)} />
            <input className="cyber-input" placeholder="PHONE NUMBER" value={leader.phone} maxLength={10} onChange={e => handleLeaderChange("phone", e.target.value)} />
            <input className="cyber-input" placeholder="ROLL IDENTIFICATION" value={leader.roll} onChange={e => handleLeaderChange("roll", e.target.value)} />
            <input className="cyber-input" placeholder="COMM CHANNEL (EMAIL)" value={leader.email} onChange={e => handleLeaderChange("email", e.target.value)} />
            <input className="cyber-input" placeholder="SQUADRON (DEPT)" value={leader.dept} onChange={e => handleLeaderChange("dept", e.target.value)} />
          </div>
        </div>

        <div className="form-panel bg-white/5 border border-white/10 p-5 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl text-white uppercase tracking-widest text-center md:text-left">Recruit Wingmen</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[0, 1, 2, 3, 4].map(num => (
              <button key={num} onClick={() => setTeamSize(num)} 
                className={`w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl font-bold border-2 transition-all ${teamSize === num ? 'bg-cyan-500 text-black border-cyan-400 scale-110' : 'border-white/20 text-white hover:border-cyan-500'}`}>
                0{num}
              </button>
            ))}
          </div>
        </div>

        {teamSize > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((m, i) => (
                <div key={i} className="wingman-panel bg-cyan-950/20 border border-cyan-500/20 p-4 md:p-6 backdrop-blur-lg">
                <p className="text-cyan-500/50 mb-2 uppercase text-sm">Wingman 0{i+1}</p>
                <input className="cyber-input text-lg py-2 mb-4" placeholder="NAME" value={m.name} onChange={e => handleMemberChange(i, "name", e.target.value)} />
                <div className="grid grid-cols-2 gap-4">
                    <input className="cyber-input text-lg py-2" placeholder="ROLL" value={m.roll} onChange={e => handleMemberChange(i, "roll", e.target.value)} />
                    <input className="cyber-input text-lg py-2" placeholder="DEPT" value={m.dept} onChange={e => handleMemberChange(i, "dept", e.target.value)} />
                </div>
                </div>
            ))}
            </div>
        )}

        <div className="form-panel bg-black/60 border border-purple-500/30 p-5 md:p-8 backdrop-blur-xl flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="bg-white p-2 md:p-4 shrink-0">
             <img src={upiImage} alt="QR" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
          </div>
          <div className="w-full">
            <p className="text-purple-400 mb-2 uppercase tracking-widest text-lg md:text-xl text-center md:text-left">Mission Funding (Transaction ID)</p>
            <input className="cyber-input text-center md:text-left" placeholder="ENTER TXN ID" value={txnId} onChange={e => setTxnId(e.target.value)} />
            <p className="text-gray-400 mt-2 text-sm text-center md:text-left">Scan QR • Pay ₹{totalPrice} • Enter ID</p>
          </div>
        </div>
        <div className="form-panel mt-4 p-4 md:p-10 flex justify-center">
          <button
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="w-full md:w-auto px-6 md:px-24 py-4 md:py-8 bg-purple-600 text-black text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] hover:bg-green-400 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
          >
            {isSubmitting ? "TRANSMITTING..." : "FINALIZE MISSION"}
          </button>
        </div>
      </div>
      <style>{`
        .cyber-input { 
            background: rgba(0, 0, 0, 0.4); 
            border-bottom: 2px solid rgba(255, 255, 255, 0.1); 
            padding: 10px 12px; 
            color: white; 
            width: 100%; 
            font-size: 1.25rem; 
            font-family: 'VT323', monospace; 
            transition: all 0.3s; 
        }
        @media (min-width: 768px) {
            .cyber-input { 
                font-size: 1.5rem; 
                padding: 12px 16px; 
            }
        }
        .cyber-input:focus { 
            border-bottom-color: #22d3ee; 
            outline: none; 
            background: rgba(34, 211, 238, 0.05); 
        }
      `}</style>
    </div>
  );
};

export default VtolcompRegister;