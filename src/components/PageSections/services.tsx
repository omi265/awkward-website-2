"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// Interactive Browser Screen Mockup component (completely vector & tech-themed)
function BrowserScreen({ type }: { type: "dashboard" | "saas" | "ai" | "fintech" | "design" | "marketing" }) {
  return (
    <div className="w-full h-full bg-white border-[4px] border-black rounded-[24px] shadow-[8px_8px_0px_#000000] overflow-hidden flex flex-col select-none">
      {/* Browser Header Bar */}
      <div className="h-10 border-b-[4px] border-black bg-[#EFEFEF] px-4 flex items-center justify-between shrink-0">
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border-[2px] border-black" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border-[2px] border-black" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border-[2px] border-black" />
        </div>
        <div className="bg-white border-[2px] border-black rounded-lg px-4 py-0.5 text-[8px] lg:text-[10px] font-mono text-slate-500 w-44 truncate text-center font-bold">
          {type === "dashboard" && "localhost:3000/ops"}
          {type === "fintech" && "localhost:3000/underwrite"}
          {type === "saas" && "secure.awkward.studio"}
          {type === "ai" && "local-rag.ai/chat"}
          {type === "design" && "canvas.awkward.studio"}
          {type === "marketing" && "growth.awkward.studio"}
        </div>
        <div className="w-10" />
      </div>
      
      {/* Browser Body Content */}
      <div className="flex-1 p-4 bg-[#FAF9F6] font-mono overflow-hidden flex flex-col justify-between">
        {type === "dashboard" && (
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Header row */}
            <div className="flex justify-between items-center border-b-[2px] border-black/10 pb-2">
              <span className="text-[10px] lg:text-[12px] font-black text-black">OPS_MONITOR_v2</span>
              <span className="text-[8px] text-[#27C93F] bg-[#27C93F]/10 px-1.5 py-0.5 rounded border border-[#27C93F]/25 font-bold">ACTIVE</span>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="border-[2px] border-black rounded-xl p-2 bg-white shadow-[2px_2px_0px_#000]">
                <span className="text-[7px] text-slate-400 block font-bold">TOTAL REVENUE</span>
                <span className="text-[11px] lg:text-[13px] font-black text-black">$92,400</span>
              </div>
              <div className="border-[2px] border-black rounded-xl p-2 bg-white shadow-[2px_2px_0px_#000]">
                <span className="text-[7px] text-slate-400 block font-bold">USERS ONLINE</span>
                <span className="text-[11px] lg:text-[13px] font-black text-black">3,481</span>
              </div>
            </div>
            {/* Simple chart bar list */}
            <div className="flex-1 flex flex-col justify-end space-y-2 mt-3">
              <div className="flex items-center space-x-2">
                <span className="text-[7px] text-slate-400 w-8 font-bold">MON</span>
                <div className="flex-1 h-3 bg-[#F8C419]/25 rounded-full overflow-hidden border-[2px] border-black">
                  <div className="h-full bg-[#F8C419]" style={{ width: "70%" }} />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[7px] text-slate-400 w-8 font-bold">TUE</span>
                <div className="flex-1 h-3 bg-[#F8C419]/25 rounded-full overflow-hidden border-[2px] border-black">
                  <div className="h-full bg-[#F8C419]" style={{ width: "95%" }} />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[7px] text-slate-400 w-8 font-bold">WED</span>
                <div className="flex-1 h-3 bg-[#F8C419]/25 rounded-full overflow-hidden border-[2px] border-black">
                  <div className="h-full bg-[#F8C419]" style={{ width: "55%" }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "saas" && (
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Portal header */}
            <div className="flex justify-between items-center border-b-[2px] border-black/10 pb-2">
              <span className="text-[10px] lg:text-[12px] font-black text-black">PORTAL_GATEWAY</span>
              <span className="text-[8px] text-[#F8C419] bg-[#F8C419]/10 px-1.5 py-0.5 rounded border border-[#F8C419]/30 font-black">SECURE</span>
            </div>
            {/* Secure credentials portal UI */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-3 py-2">
              <div className="w-10 h-10 rounded-full bg-[#F8C419]/10 border-[3px] border-black flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="w-full space-y-2 px-2">
                <div className="h-5 border-[2px] border-black bg-white rounded-lg flex items-center px-2">
                  <span className="text-[8px] text-slate-300">••••••••••••••</span>
                </div>
                <div className="h-6 bg-[#F8C419] border-[2px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_#000]">
                  <span className="text-[8px] lg:text-[9px] font-black text-black">DECRYPT PORTAL</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "ai" && (
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Chat header */}
            <div className="flex justify-between items-center border-b-[2px] border-black/10 pb-2">
              <span className="text-[10px] lg:text-[12px] font-black text-black">COGNITIVE_LLM</span>
              <span className="text-[8px] text-[#27C93F] bg-[#27C93F]/10 px-1.5 py-0.5 rounded border border-[#27C93F]/30 font-bold">RAG_UP</span>
            </div>
            {/* Chat bubbles */}
            <div className="flex-1 flex flex-col justify-end space-y-3 mt-2">
              {/* User Bubble */}
              <div className="self-end bg-slate-200 border-[2px] border-black rounded-xl p-2 max-w-[85%] shadow-[1px_1px_0px_#000]">
                <span className="text-[7px] lg:text-[8px] text-black block leading-tight">Query Q2 expenses from PDF.</span>
              </div>
              {/* AI Bubble */}
              <div className="self-start bg-[#F8C419]/10 border-[2px] border-black rounded-xl p-2 max-w-[90%] flex items-start space-x-1.5 shadow-[1px_1px_0px_#000]">
                <div className="shrink-0 w-3 h-3 rounded bg-[#F8C419] border border-black mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[7px] lg:text-[8px] text-black block leading-tight font-black">AI_REPLY:</span>
                  <span className="text-[6.5px] lg:text-[7.5px] text-slate-700 block leading-snug">Q2 expenses total $84,200. Infrastructure accounts for 72% of total costs.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "fintech" && (
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Portal header */}
            <div className="flex justify-between items-center border-b-[2px] border-black/10 pb-2">
              <span className="text-[10px] lg:text-[12px] font-black text-black">FIN_UNDERWRITE</span>
              <span className="text-[8px] text-[#27C93F] bg-[#27C93F]/10 px-1.5 py-0.5 rounded border border-[#27C93F]/25 font-bold font-mono">VERIFIED</span>
            </div>
            {/* Underwriting stats */}
            <div className="space-y-2 py-1 mt-2">
              <div className="flex justify-between items-center bg-white border-[2px] border-black rounded-lg p-1.5 shadow-[1.5px_1.5px_0px_#000]">
                <span className="text-[6.5px] font-bold text-slate-400">RISK SCORE</span>
                <span className="text-[8.5px] font-black text-[#27C93F]">LOW (92/100)</span>
              </div>
              <div className="flex justify-between items-center bg-white border-[2px] border-black rounded-lg p-1.5 shadow-[1.5px_1.5px_0px_#000]">
                <span className="text-[6.5px] font-bold text-slate-400">CREDIT LIMIT</span>
                <span className="text-[8.5px] font-black text-black">$75,000</span>
              </div>
            </div>
            {/* Disburse funds action */}
            <div className="h-6 bg-[#F8C419] border-[2px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_#000] mt-2">
              <span className="text-[7.5px] font-black text-black">DISBURSE FUNDS</span>
            </div>
          </div>
        )}

        {type === "design" && (
          <div className="flex-1 flex h-full w-full relative">
            {/* Sidebar tool panel */}
            <div className="w-8 border-r-[2px] border-black/10 flex flex-col items-center py-2 space-y-2 shrink-0 bg-white">
              <div className="w-4 h-4 rounded bg-[#F8C419]/20 border border-black flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2l12 11.2-5.8.8 3.5 6-2 1.2-3.5-6-4.2 3.8z"/>
                </svg>
              </div>
              <div className="w-4 h-4 rounded hover:bg-slate-100 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M12 2l9 9-9 9-9-9z"/>
                </svg>
              </div>
              <div className="w-4 h-4 rounded hover:bg-slate-100 flex items-center justify-center">
                <span className="text-[9px] font-black text-slate-500">T</span>
              </div>
              <div className="w-4 h-4 rounded hover:bg-slate-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 border-2 border-slate-500 rounded-sm" />
              </div>
            </div>
            
            {/* Central Canvas */}
            <div 
              className="flex-1 bg-[#FAF9F6] relative overflow-hidden flex flex-col justify-between p-3" 
              style={{ 
                backgroundImage: "radial-gradient(#000000 1.2px, transparent 1.2px)", 
                backgroundSize: "10px 10px",
                opacity: 0.95
              }}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-[7px] font-bold text-slate-400">VECTOR_v1.0</span>
                <span className="text-[7px] text-[#F8C419] font-black">EDITING</span>
              </div>
              {/* Central Vector shape */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="w-16 h-16 border-[3px] border-black rounded-full flex justify-center items-center relative">
                  <div className="absolute inset-0 border-t border-dashed border-slate-400 transform rotate-45" />
                  <div className="absolute inset-0 border-t border-dashed border-slate-400 transform -rotate-45" />
                  <div className="w-10 h-10 border-[2px] border-[#F8C419] transform rotate-45 flex items-center justify-center">
                    <span className="text-[12px] font-bold text-black font-serif transform -rotate-45 font-black">A</span>
                  </div>
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-[2.5px] border-black" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-[2.5px] border-black" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-[2.5px] border-black" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-[2.5px] border-black" />
                </div>
              </div>
              {/* Swatch indicators */}
              <div className="flex justify-center space-x-1.5 pt-1 border-t border-black/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F8C419] border border-black" />
                <span className="w-2.5 h-2.5 rounded-full bg-black border border-black" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 border border-black" />
                <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
              </div>
            </div>
          </div>
        )}

        {type === "marketing" && (
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Header / Meta */}
            <div className="flex justify-between items-center border-b-[2px] border-black/10 pb-2">
              <span className="text-[10px] lg:text-[12px] font-black text-black">MARKETING_FUNNEL</span>
              <span className="text-[8px] text-[#27C93F] bg-[#27C93F]/10 px-1.5 py-0.5 rounded border border-[#27C93F]/25 font-bold">LIVE</span>
            </div>
            {/* Analytics Stats Grid */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="border-[2px] border-black rounded-xl p-1.5 bg-white shadow-[2px_2px_0px_#000]">
                <span className="text-[6.5px] text-slate-400 block font-bold">CTR</span>
                <span className="text-[10px] lg:text-[11px] font-black text-black">5.4%</span>
              </div>
              <div className="border-[2px] border-black rounded-xl p-1.5 bg-white shadow-[2px_2px_0px_#000]">
                <span className="text-[6.5px] text-slate-400 block font-bold">ROAS</span>
                <span className="text-[10px] lg:text-[11px] font-black text-black">4.2x</span>
              </div>
            </div>
            {/* Funnel Graph */}
            <div className="flex-1 flex flex-col justify-center space-y-1.5 mt-2.5 px-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[6px] text-slate-400 font-bold w-10">REACH</span>
                <div className="flex-1 h-3.5 bg-[#F8C419] border-[2px] border-black rounded-md flex items-center justify-center">
                  <span className="text-[6.5px] font-black text-black">100% (250K)</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[6px] text-slate-400 font-bold w-10">ENGAGE</span>
                <div className="w-[70%] h-3.5 bg-[#F8C419]/60 border-[2px] border-black rounded-md flex items-center justify-center">
                  <span className="text-[6.5px] font-black text-black">55%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[6px] text-slate-400 font-bold w-10">CONVERT</span>
                <div className="w-[40%] h-3.5 bg-[#F8C419]/25 border-[2px] border-black rounded-md flex items-center justify-center">
                  <span className="text-[6.5px] font-black text-black">15%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Services = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const currentIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  // Track mouse coordinates for parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 200 };
  const mouseX = useSpring(rawX, springConfig);
  const mouseY = useSpring(rawY, springConfig);

  const transBlobX = useTransform(mouseX, (x) => x * 15);
  const transBlobY = useTransform(mouseY, (y) => y * 15);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    rawX.set((clientX - innerWidth / 2) / (innerWidth / 2));
    rawY.set((clientY - innerHeight / 2) / (innerHeight / 2));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const servicesData = [
    {
      title: "Internal Tools & Operations Dashboards",
      description:
        "We build tailor-made workflow systems, customized CRMs, event operations trackers, and workshop management portals. Designed to streamline operations for SMEs and MSMEs by replacing messy sheets with robust databases.",
      type: "dashboard" as const,
      tag: "SME OPS",
    },
    {
      title: "Fintech Portals & Secure Underwriting",
      description:
        "We build custom loan underwriting systems, client insurance portals, automated checkouts, and secure ledger dashboards. Engineered to handle secure transactions and automate complex client onboarding flows.",
      type: "fintech" as const,
      tag: "FINTECH",
    },
    {
      title: "Custom SaaS & Enterprise Platforms",
      description:
        "We engineer scalable customer portals, subscription billing engines, and secure partner dashboards. Perfect for private equity firms, financial institutions, and digital enterprises requiring high data security.",
      type: "saas" as const,
      tag: "ENTERPRISE",
    },
    {
      title: "Graphic Design & Brand Identity",
      description:
        "We offer comprehensive branding solutions that seamlessly integrate across both online and offline platforms. Whether you need a striking logo or a complete brand identity, our design expertise ensures your brand stands out with clarity and impact.",
      type: "design" as const,
      tag: "BRANDING",
    },
    {
      title: "Digital Marketing & Brand Positioning",
      description:
        "We help businesses build a strong digital presence through strategic brand positioning and targeted marketing. Our approach focuses on enhancing brand awareness, driving lead generation, and boosting sales. By fostering customer engagement, we turn audiences into loyal communities.",
      type: "marketing" as const,
      tag: "GROWTH",
    },
    {
      title: "Local AI & Cognitive Solutions (RAG)",
      description:
        "We design secure, off-cloud local LLM implementations and custom retrieval-augmented generation (RAG) pipelines. Search across your corporate wikis, auto-draft reports, and query internal databases securely.",
      type: "ai" as const,
      tag: "COGNITIVE",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center w-[90%] lg:w-[80%] h-fit py-8 lg:py-12"
    >
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 z-10 text-black">
        
        {/* Left Column: Sticky Title + Large Screen Mockup */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between lg:sticky lg:top-36 h-fit lg:h-[65vh] py-4">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight text-left">
              Our <span className="font-serif-display italic font-black text-black border-b-[4px] border-[#F8C419]">Expertise</span>
            </h2>
            <p className="text-base lg:text-xl mt-4 font-normal text-slate-600 leading-relaxed text-left max-w-2xl">
              At Awkward Studio, we engineer custom software products, internal tools, and offline cognitive AI pipelines designed to streamline B2B operations.
            </p>
          </div>

          {/* Interactive Screen Mockup on the Left (with smooth layered spring transitions) */}
          <div className="hidden lg:flex justify-center items-center relative w-full aspect-square max-w-[340px] mx-auto mt-8">
            <motion.div
              style={{ x: transBlobX, y: transBlobY }}
              className="w-full h-full relative"
            >
              {servicesData.map((service, index) => {
                const isSelected = currentIdx === index;
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, scale: 0.9, y: 15, rotate: -3 }}
                    animate={{
                      opacity: isSelected ? 1 : 0,
                      scale: isSelected ? 1 : 0.9,
                      y: isSelected ? 0 : 15,
                      rotate: isSelected ? 0 : -3,
                      zIndex: isSelected ? 10 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 18,
                    }}
                    style={{ pointerEvents: isSelected ? "auto" : "none" }}
                  >
                    <BrowserScreen type={service.type} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Right Column: Premium Accordion / Curtain Rows */}
        <div className="w-full lg:w-[55%] flex flex-col border-t-[3px] border-black">
          {servicesData.map((service, index) => {
            const isExpanded = hoveredIdx !== null 
              ? hoveredIdx === index 
              : activeIdx === index;

            return (
              <ServiceRow
                key={index}
                index={index}
                service={service}
                isExpanded={isExpanded}
                isHovered={hoveredIdx === index}
                onHover={() => setHoveredIdx(index)}
                onLeave={() => setHoveredIdx(null)}
                onClick={() => setActiveIdx(index)}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

function ServiceRow({ service, index, isExpanded, isHovered, onHover, onLeave, onClick }: any) {
  const rowRef = useRef<HTMLDivElement>(null);
  
  // Track mouse coordinates for floating preview
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - 120); // Center the 240px preview box on cursor
      mouseY.set(e.clientY - rect.top - 120);
    }
  };

  return (
    <div
      ref={rowRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="relative border-b-[3px] border-black py-8 lg:py-10 px-4 cursor-pointer overflow-hidden group"
    >
      {/* Background slide sweep (smooth Framer Motion spring) */}
      <motion.div
        className="absolute inset-0 bg-[#F8C419]/5 origin-left z-0 pointer-events-none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      />

      <div className="relative z-10 flex justify-between items-start w-full">
        {/* Index and details (smooth sliding spring) */}
        <motion.div 
          animate={{ x: isExpanded ? 12 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="flex flex-col space-y-3 w-full"
        >
          <div className="flex items-center space-x-3">
            <span className="text-sm font-black text-slate-400 group-hover:text-black/40 transition-colors">
              0{index + 1}
            </span>
            <span className="h-[2px] w-6 bg-black/10 group-hover:bg-black/30 transition-colors" />
            <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase bg-slate-100 border border-slate-200 rounded px-2 py-0.5 group-hover:bg-[#F8C419] group-hover:border-black group-hover:text-black transition-all">
              {service.tag}
            </span>
          </div>

          <h3 className="text-xl lg:text-3xl font-black tracking-tight text-black leading-tight">
            {service.title}
          </h3>

          <motion.div
            initial={{ height: index === 0 ? "auto" : 0, opacity: index === 0 ? 1 : 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 19 }}
            className="overflow-hidden"
          >
            <p className="text-sm lg:text-base font-normal text-slate-600 leading-relaxed pt-2">
              {service.description}
            </p>
            <div className="block lg:hidden mt-5 w-full pr-2 pb-2 aspect-[1.35] max-w-[320px] mx-auto">
              <BrowserScreen type={service.type} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating magnetic preview card following mouse (Desktop only) */}
      <div className="hidden lg:block pointer-events-none">
        <motion.div
          style={{
            x: floatX,
            y: floatY,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
            rotate: isHovered ? 4 : 0,
          }}
          className="absolute z-20 w-[240px] h-[240px]"
        >
          <BrowserScreen type={service.type} />
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
