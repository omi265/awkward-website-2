"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, Moon, Monitor, Smartphone, Sparkles, Code, Cpu, 
  Terminal, Image as ImageIcon, CheckCircle, RefreshCw, Send,
  Folder, Trash, Disc, Maximize2, RotateCcw, AlertTriangle, Layers, Play,
  CornerRightDown, HelpCircle, ArrowRight, Activity
} from "lucide-react";
import Link from "next/link";

// 10 Distinct Design Themes with dedicated UX Thought Processes & Fonts
const DESIGN_OPTIONS = [
  {
    id: 1,
    name: "Awkward Retro-Pop",
    tagline: "Modular Pop Suite (V1A - V1E)",
    uxProcess: "UX showcases 5 sub-refinement layers of our classic Pop look: Sticker physics, Arcade UI, Scribble Sketchbook, Bauhaus, and 3D Toybox.",
    fontClass: "font-sans",
    fontName: "Outfit / Space Grotesk",
    colors: ["#F8C419", "#FFFFFF", "#000000"]
  },
  {
    id: 2,
    name: "Cyber-NeoBrutalist",
    tagline: "Split-Console HUD Layout",
    uxProcess: "UX partitions information into a terminal console HUD with monospace logs, live alerts, and technical matrix divisions.",
    fontClass: "font-mono",
    fontName: "JetBrains Mono / Space Mono",
    colors: ["#B300FF", "#EAFF00", "#121212"]
  },
  {
    id: 3,
    name: "Retro Mac Synthwave",
    tagline: "System OS Window Layout",
    uxProcess: "UX utilizes the vintage folder & file explorer metaphor. Drag-simulate headers, pixel trash items, and floppy widgets.",
    fontClass: "font-serif",
    fontName: "Chicago / Menlo Serif",
    colors: ["#FF8DE4", "#38BDF8", "#E5E7EB"]
  },
  {
    id: 4,
    name: "Glassmorphic Acid-Groovy",
    tagline: "Floating Parallax Stack",
    uxProcess: "UX explores background depth layers. Translucent glass blocks float on organic lava gradients with gooey physics.",
    fontClass: "font-sans",
    fontName: "Syne / Space Grotesk",
    colors: ["#FF007F", "#FF7F00", "#ffffff33"]
  },
  {
    id: 5,
    name: "Comic-Book Noir",
    tagline: "Asymmetrical Comic Paneling",
    uxProcess: "UX tells a brand story using graphic, skewed cells, text dialog blocks, halftone dotted overlays, and sketch borders.",
    fontClass: "font-sans italic",
    fontName: "Comic Neue / Impact Comic",
    colors: ["#FF007F", "#111111", "#F3F4F6"]
  },
  {
    id: 6,
    name: "Bauhaus Geometric",
    tagline: "Deconstructed Blueprint Grid",
    uxProcess: "UX honors mathematical constructivism. Primary color planes intersect with mechanical rotating gears and strict 90° guides.",
    fontClass: "font-sans",
    fontName: "Grotesque Heavy / Helvetica",
    colors: ["#1D4ED8", "#DC2626", "#F8C419"]
  },
  {
    id: 7,
    name: "Y2K Holographic",
    tagline: "Audio Deck Turntable Console",
    uxProcess: "UX structures components as an interactive media deck dashboard, featuring turntable sliders and glowing wireframes.",
    fontClass: "font-mono",
    fontName: "Courier Wide / Orbitron",
    colors: ["#818CF8", "#A78BFA", "#F472B6"]
  },
  {
    id: 8,
    name: "Kawaii Paper-Cut",
    tagline: "Layered dioramas & jelly feedback",
    uxProcess: "UX simulates construction paper crafts. Floating tabs squeeze like jelly when clicked; cute winking mascots guide navigation.",
    fontClass: "font-sans",
    fontName: "Fredoka Rounded / Outfit",
    colors: ["#FDA4AF", "#FFE4E6", "#000000"]
  },
  {
    id: 9,
    name: "Swiss Typographic",
    tagline: "Pure Heavy Editorial Scroll",
    uxProcess: "UX strips all background boxes. Canvas is a stark newspaper editorial format with gigantic scroll marquee tickers.",
    fontClass: "font-sans",
    fontName: "Archivo Black / Helvetica Ultra",
    colors: ["#000000", "#FFFFFF", "#E5E7EB"]
  },
  {
    id: 10,
    name: "Cosmic Acid-Trance",
    tagline: "Concentric Orbital Layout",
    uxProcess: "UX simulates gravity. Components float along circular orbital paths, displaying trails of neon stardust on mouse hover.",
    fontClass: "font-mono",
    fontName: "Psychedelic Cursive / Monaco",
    colors: ["#0F0A1C", "#00FF66", "#1F1A30"]
  }
];

// Awkward Pop sub-refinement layout options
const POP_SUB_REFINEMENTS = [
  { id: "1A", name: "V1A: Sticker-Book", desc: "Tactile layered stickers, offset thick strokes, and elastic corner peel physics." },
  { id: "1B", name: "V1B: Arcade Cabinet", desc: "Structured arcade terminal, neon double borders, chunky pushbuttons, scanlines." },
  { id: "1C", name: "V1C: Doodle Sketchbook", desc: "Casual organic hand-drawn squiggles, wobbly underline path animations, wiggler stars." },
  { id: "1D", name: "V1D: Bauhaus Redux", desc: "Typographic scrolling marquees, asymmetric alignments, geometric guides." },
  { id: "1E", name: "V1E: 3D Toybox", desc: "Realistic double-stacked beveled keycaps, plastic bevel shadows, capsule indicators." }
];

export default function DesignPage() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [popSubOption, setPopSubOption] = useState<"1A" | "1B" | "1C" | "1D" | "1E">("1A");
  const [previewWidth, setPreviewWidth] = useState<"desktop" | "mobile">("desktop");
  const [localDarkMode, setLocalDarkMode] = useState(false);

  const activeTheme = DESIGN_OPTIONS.find(o => o.id === selectedOption) || DESIGN_OPTIONS[0];

  return (
    <div className="h-full min-h-screen bg-zinc-900 text-zinc-100 flex flex-col font-sans overflow-x-hidden antialiased">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 bg-zinc-950 border-b-4 border-black p-4 z-40 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-4">
          <Link href="/home" className="flex items-center justify-center w-10 h-10 border-4 border-black bg-[#F8C419] rounded-xl text-black hover:scale-105 transition-transform shadow-[3px_3px_0px_#000]">
            <span className="font-black text-lg">AS</span>
          </Link>
          <div>
            <h1 className="font-black text-xl uppercase tracking-wider text-yellow-400">Design Lab Console</h1>
            <p className="text-[10px] text-zinc-400 font-bold uppercase font-mono">10 Layout systems + 5 Awkward Pop Refinements</p>
          </div>
        </div>

        {/* Console Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center border-2 border-zinc-700 bg-zinc-900 rounded-lg p-0.5">
            <button 
              onClick={() => setPreviewWidth("desktop")} 
              className={`p-1.5 rounded-md transition-colors ${previewWidth === "desktop" ? "bg-yellow-400 text-black font-black" : "text-zinc-400 hover:text-zinc-200"}`}
              title="Desktop viewport mockup"
            >
              <Monitor size={18} />
            </button>
            <button 
              onClick={() => setPreviewWidth("mobile")} 
              className={`p-1.5 rounded-md transition-colors ${previewWidth === "mobile" ? "bg-yellow-400 text-black font-black" : "text-zinc-400 hover:text-zinc-200"}`}
              title="Mobile viewport mockup"
            >
              <Smartphone size={18} />
            </button>
          </div>

          <button
            onClick={() => setLocalDarkMode(!localDarkMode)}
            className="flex items-center justify-center w-10 h-10 border-2 border-zinc-700 bg-zinc-900 hover:bg-zinc-800 rounded-xl text-yellow-400 hover:scale-105 active:scale-95 transition-all"
            title="Toggle light/dark preview colors"
          >
            {localDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link href="/home" className="hidden md:flex font-black text-sm uppercase tracking-wider bg-yellow-400 text-black border-2 border-black hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all px-4 py-2 shadow-[3px_3px_0px_#000] rounded-lg">
            Back to Site
          </Link>
        </div>
      </header>

      {/* Lab Layout Splitter */}
      <div className="flex-1 flex flex-col lg:flex-row h-full">
        
        {/* Left Console Sidebar: Navigation */}
        <aside className="w-full lg:w-96 bg-zinc-950 border-r-4 border-black p-5 flex flex-col space-y-4 shrink-0 overflow-y-auto lg:h-[calc(100vh-80px)] font-sans">
          <div className="mb-2">
            <h2 className="font-black text-lg uppercase text-zinc-100 tracking-wider">Showcase Palette</h2>
            <p className="text-xs text-zinc-400">Select any system. The main canvas adapts components, layouts, typography, and visual rules instantly.</p>
          </div>

          <div className="space-y-3">
            {DESIGN_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`w-full text-left p-4 rounded-xl border-4 transition-all duration-200 flex flex-col space-y-1.5 shadow-[4px_4px_0px_#000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] ${
                  selectedOption === option.id 
                    ? "bg-zinc-900 border-yellow-400" 
                    : "bg-zinc-900/40 border-black hover:bg-zinc-900/60"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-black font-mono text-zinc-500 uppercase tracking-widest">Option 0{option.id}</span>
                  <div className="flex space-x-1">
                    {option.colors.map((c, i) => (
                      <span key={i} className="w-3.5 h-3.5 rounded-full border border-black" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <h3 className="font-extrabold text-base text-zinc-100">{option.name}</h3>
                <p className="text-[11px] font-bold text-yellow-500 uppercase tracking-wider italic">{option.tagline}</p>
                <div className="text-[10px] bg-black/40 text-zinc-400 p-2 rounded border border-zinc-800 font-mono mt-1 leading-normal">
                  <span className="text-yellow-400 font-bold block mb-0.5 font-sans">TYPOGRAPHY: {option.fontName}</span>
                  {option.uxProcess}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Right Preview Sandbox */}
        <main className="flex-1 bg-zinc-900 p-6 flex flex-col justify-start items-center overflow-y-auto lg:h-[calc(100vh-80px)] font-sans">
          
          {/* Active UX Method Box */}
          <div className="w-full max-w-4xl bg-zinc-950 border-4 border-black p-5 rounded-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-3 mb-1">
                <span className="bg-yellow-400 text-black text-xs font-black font-mono px-2 py-0.5 rounded">OPTION 0{activeTheme.id}</span>
                <span className="text-zinc-400 text-xs font-bold font-mono uppercase tracking-wider italic">{activeTheme.tagline}</span>
              </div>
              <h2 className="font-black text-2xl uppercase tracking-wider text-zinc-100">{activeTheme.name}</h2>
              <div className="text-sm text-zinc-300 max-w-2xl mt-1 font-semibold leading-relaxed border-l-4 border-yellow-400 pl-3">
                <span className="text-[11px] font-mono text-zinc-400 block uppercase tracking-wider">UX Design Thought Process:</span>
                {selectedOption === 1 
                  ? `${activeTheme.uxProcess} currently rendering refinement: ${POP_SUB_REFINEMENTS.find(s => s.id === popSubOption)?.name}`
                  : activeTheme.uxProcess
                }
              </div>
            </div>
            
            <div className="flex items-center space-x-2 shrink-0 self-start md:self-center">
              <Sparkles className="text-yellow-400 animate-pulse" size={24} />
              <span className="text-[10px] text-zinc-400 font-mono font-bold">TYPOGRAPHY: {activeTheme.fontName}</span>
            </div>
          </div>

          {/* Interactive Responsive Viewport */}
          <div 
            className={`transition-all duration-300 w-full flex flex-col border-[6px] border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_#000] relative ${
              previewWidth === "mobile" ? "max-w-[420px] aspect-[9/16]" : "max-w-4xl h-fit"
            }`}
          >
            {/* Viewport bar */}
            <div className="bg-zinc-950 p-3 border-b-4 border-black flex items-center justify-between shrink-0">
              <div className="flex space-x-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-black shadow-[1px_1px_0px_#000]" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-black shadow-[1px_1px_0px_#000]" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-black shadow-[1px_1px_0px_#000]" />
              </div>
              <div className="text-[10px] font-black font-mono text-zinc-400 uppercase tracking-widest">
                {previewWidth === "mobile" ? "MOBILE PREVIEWPORT" : "DESKTOP PREVIEWPORT"}
              </div>
              <div className="w-12 h-2" />
            </div>

            {/* Layout Canvas - Renders the unique structural layouts */}
            <div className={`flex-1 p-6 overflow-y-auto transition-colors duration-500 ${localDarkMode ? "bg-zinc-950 text-yellow-400 dark" : "bg-white text-black"} ${activeTheme.fontClass}`}>
              
              {/* Unique Layout Renderers based on selectedOption */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedOption}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full space-y-8"
                >
                  
                  {/* OPTION 1: AWKWARD POP (Sticker Board with 5 Sub-refinements) */}
                  {selectedOption === 1 && (
                    <div className="space-y-8">
                      {/* Premium V1A - V1E Refinement Switcher Tab Bar */}
                      <div className="flex flex-wrap gap-2 p-2 bg-zinc-950 border-4 border-black rounded-2xl shadow-[4px_4px_0px_#000] w-full max-w-2xl mx-auto text-xs font-black uppercase shrink-0">
                        {POP_SUB_REFINEMENTS.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => setPopSubOption(sub.id as any)}
                            className={`flex-1 px-3 py-2 rounded-xl border-2 transition-all ${
                              popSubOption === sub.id 
                                ? "bg-[#F8C419] text-black border-black shadow-[2px_2px_0px_#000] translate-y-[-2px]" 
                                : "text-zinc-400 border-transparent hover:text-zinc-200"
                            }`}
                            title={sub.desc}
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>

                      {/* Modular Content Frame based on the selected refinement */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={popSubOption}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="w-full h-full"
                        >
                          
                          {/* V1A: The "Tactile Sticker-Book" Refinement Layout */}
                          {popSubOption === "1A" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative p-2">
                              {/* Hero card styled like a giant folder tab sticker */}
                              <div className="md:col-span-2 text-center border-[6px] border-black bg-[#F8C419] rounded-3xl p-8 shadow-[8px_8px_0px_#000] rounded-br-[80px] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 border-b-4 border-l-4 border-black transform rotate-45 translate-x-8 -translate-y-8 pointer-events-none" />
                                <span className="bg-white text-black font-black border-2 border-black rounded px-2.5 py-1 text-xs uppercase shadow-[2px_2px_0px_#000]">V1A // TACTILE STICKER HERO</span>
                                <h1 className="text-4xl md:text-5xl font-black uppercase mt-4 italic text-black">The Process is AWKWARD</h1>
                                <p className="mt-4 font-extrabold max-w-xl mx-auto text-black/80">Refinement features organic paper tab corner folds, scattered layout grids, and tactile stamp labels.</p>
                              </div>

                              <div className="border-[5px] border-black bg-white rounded-3xl p-6 shadow-[6px_6px_0px_#000] -rotate-1 text-black relative">
                                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-black bg-yellow-400 flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_#000]">✓</span>
                                <span className="bg-[#F8C419] border-2 border-black font-black rounded-full px-3 py-1 text-[10px] uppercase shadow-[2px_2px_0px_#000]">V1A // STAMP COMPONENT</span>
                                <h2 className="text-2xl font-black mt-3">Tactile Grids</h2>
                                <p className="mt-2 text-sm font-bold opacity-80">Components are gridded as clean stamps that float above grid shadows.</p>
                              </div>

                              <motion.div 
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="border-[5px] border-black bg-[#F8C419] rounded-3xl p-6 shadow-[6px_6px_0px_#000] rotate-2 text-black cursor-pointer"
                              >
                                <span className="bg-white border-2 border-black font-black rounded px-2 py-0.5 text-[9px] uppercase shadow-[2px_2px_0px_#000]">V1A // STICKER CARD</span>
                                <div className="flex items-center space-x-4 mt-3">
                                  <span className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center font-black">RM</span>
                                  <div>
                                    <h3 className="font-black text-lg">Sticker Physics</h3>
                                    <p className="text-[10px] uppercase font-black opacity-75">Bouncy Micro-scale</p>
                                  </div>
                                </div>
                              </motion.div>

                              <div className="md:col-span-2 border-[5px] border-black bg-white rounded-3xl p-6 shadow-[6px_6px_0px_#000] text-black">
                                <span className="bg-[#F8C419] border-2 border-black font-black rounded px-2 py-0.5 text-[9px] uppercase shadow-[2px_2px_0px_#000]">V1A // CTA INTERACTION</span>
                                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-4">
                                  <input type="text" placeholder="Name details..." className="border-4 border-black rounded-full px-4 py-2 font-black w-full" />
                                  <button className="bg-[#F8C419] border-[5px] border-black rounded-full px-6 py-2.5 shadow-[4px_4px_0px_#000] active:scale-95 hover:translate-y-[-2px] transition-all font-black shrink-0">READY, SLIDE!</button>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* V1B: The "Arcade Cabinet UI" Refinement Layout */}
                          {popSubOption === "1B" && (
                            <div className="border-double border-[10px] border-black bg-zinc-900 p-6 shadow-[8px_8px_0px_#000] text-black rounded-none relative">
                              {/* CRT scanline grids */}
                              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px)] [background-size:100%_4px] pointer-events-none" />

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                <div className="md:col-span-3 border-4 border-black bg-[#F8C419] p-6 shadow-[4px_4px_0px_#000] rounded-none flex items-center justify-between">
                                  <div>
                                    <span className="bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase rounded-none">V1B // INSERT COIN HERO</span>
                                    <h1 className="text-3xl font-black uppercase mt-3 italic tracking-tight">ARCADE PLAYER INITIATE</h1>
                                    <p className="text-xs font-bold opacity-80 mt-1">Refinement applies neon cabinet layouts, heavy double borders, and mechanical keycaps.</p>
                                  </div>
                                  <Activity className="animate-pulse hidden md:block" size={32} />
                                </div>

                                <div className="md:col-span-2 border-4 border-black bg-white p-5 rounded-none shadow-[4px_4px_0px_#000]">
                                  <span className="bg-[#F8C419] border-2 border-black font-black rounded-none px-2 py-0.5 text-[9px] uppercase">V1B // KEYCAP INTERACTION</span>
                                  <h2 className="text-xl font-black mt-2 uppercase">Cabinet Partitions</h2>
                                  <p className="text-xs font-bold opacity-75 mt-1">Mechanical grid capsules respond physically when elements are clicked.</p>
                                </div>

                                {/* Mechanical Keycap Button */}
                                <div className="border-4 border-black bg-white p-5 rounded-none shadow-[4px_4px_0px_#000] flex flex-col items-center justify-center">
                                  <span className="bg-black text-white px-2 py-0.5 text-[8px] uppercase tracking-wider font-bold mb-3">ACTION TRIGGER</span>
                                  <motion.button 
                                    whileTap={{ y: 6, shadow: "none" }}
                                    className="w-14 h-14 bg-red-500 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-white font-black text-xs active:translate-y-1"
                                  >
                                    PUSH
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* V1C: The "Scribble & Doodle Sketchbook" Refinement Layout */}
                          {popSubOption === "1C" && (
                            <div className="p-2 space-y-8 text-black font-sans relative">
                              {/* Giant sketched notebook wrapper */}
                              <div className="border-4 border-black rounded-[40px_15px_30px_10px] bg-white p-8 shadow-[6px_6px_0px_#F8C419] relative">
                                <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase rounded-full tracking-widest skew-x-3">V1C // DOODLE HERO</span>
                                <h1 className="text-3xl md:text-4xl font-black uppercase mt-4 italic tracking-tight">The Process is Awkward Doodle!</h1>
                                <p className="mt-2 text-sm font-bold opacity-80 max-w-xl">
                                  Casual school sketchbook style using wobbly hand-sketched boundaries, animated pencil underlines, and rotating doodle stars.
                                </p>
                                
                                {/* Wobbly underline mock */}
                                <div className="w-48 h-2 bg-yellow-400 rounded-full mt-4 border-b-2 border-black rotate-1" />
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border-4 border-black rounded-[15px_30px_10px_20px] bg-white p-5 shadow-[4px_4px_0px_#000] text-black">
                                  <span className="bg-yellow-400 border-2 border-black rounded-full font-black px-2.5 py-0.5 text-[10px] uppercase">V1C // SKETCH COLUMN</span>
                                  <h2 className="text-xl font-black mt-2">Wiggle stars</h2>
                                  <p className="text-xs font-bold opacity-75 mt-1">Underlines and star highlights waveloop perpetually for that raw visual texture.</p>
                                </div>

                                <motion.div 
                                  animate={{ rotate: [1, -2, 2, -1, 1] }}
                                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                  className="border-4 border-black rounded-[25px_15px_35px_10px] bg-[#F8C419] p-5 shadow-[4px_4px_0px_#000] text-black cursor-pointer flex items-center justify-between"
                                >
                                  <div>
                                    <h3 className="font-black text-lg italic uppercase">Organic Sketches</h3>
                                    <p className="text-[10px] font-bold opacity-75">Self-drawing vector boundaries</p>
                                  </div>
                                  <span className="text-xl font-bold animate-spin duration-10000">★</span>
                                </motion.div>
                              </div>
                            </div>
                          )}

                          {/* V1D: The "Neo-Brutalist Bauhaus Redux" Refinement Layout */}
                          {popSubOption === "1D" && (
                            <div className="bg-zinc-50 border-[5px] border-black text-zinc-950 p-6 rounded-none relative shadow-[6px_6px_0px_#000] overflow-hidden">
                              <div className="space-y-6">
                                <div className="border-b-4 border-black pb-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                                  <div>
                                    <span className="bg-black text-[#F8C419] px-2 py-0.5 text-[9px] font-black uppercase rounded-none tracking-widest">V1D // ARCHITECTURE REDUX</span>
                                    <h1 className="text-3xl md:text-4xl font-black uppercase mt-2 tracking-tighter">Geometric Pop Redux</h1>
                                  </div>
                                  <span className="text-xs font-mono font-black border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_#000] mt-2 md:mt-0">ALIGN: 90DEG</span>
                                </div>

                                {/* Scrolling Typography Marquee Mock */}
                                <div className="bg-black text-[#F8C419] border-y-4 border-black py-2.5 overflow-hidden font-black text-sm tracking-widest uppercase flex space-x-6 select-none shadow-[2px_2px_0px_#000]">
                                  <span className="animate-pulse">AWKWARD BRAND INTEGRATION</span>
                                  <span>//</span>
                                  <span>TACTILE GEOMETRY SYSTEM</span>
                                  <span>//</span>
                                  <span>SWISS POP REDUX</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                  <div className="border-[4px] border-black bg-white p-5 rounded-none shadow-[4px_4px_0px_#000] text-black">
                                    <span className="bg-[#F8C419] border-2 border-black font-black px-2 py-0.5 text-[9px] uppercase">V1D // COLUMN BLUEPRINT</span>
                                    <h2 className="text-xl font-black mt-3">Swiss alignments</h2>
                                    <p className="text-xs font-bold opacity-75 mt-1">Marquee tickers speed up depending on active mouse scroll directions.</p>
                                  </div>
                                  
                                  <div className="border-[4px] border-black bg-[#F8C419] p-5 rounded-none shadow-[4px_4px_0px_#000] text-black flex flex-col justify-between">
                                    <h3 className="font-black text-lg">Asymmetric guide lines</h3>
                                    <button className="bg-white border-2 border-black px-4 py-1.5 text-xs font-black shadow-[2px_2px_0px_#000] hover:bg-zinc-100 transition-all uppercase rounded-none mt-4">Execute blueprint</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* V1E: The "3D Keycap & Toybox" Refinement Layout */}
                          {popSubOption === "1E" && (
                            <div className="bg-zinc-100 border-[6px] border-black rounded-3xl p-6 shadow-[8px_8px_0px_#000] text-black relative">
                              <div className="space-y-6">
                                {/* Beveled plastic container hero */}
                                <div className="bg-[#F8C419] border-[6px] border-black rounded-2xl p-6 shadow-[inset_0_-8px_0_rgba(0,0,0,0.2),4px_4px_0px_#000] relative overflow-hidden">
                                  <span className="bg-white border-2 border-black rounded-xl font-black px-3 py-0.5 text-[9px] uppercase shadow-[2px_2px_0px_#000]">V1E // 3D PLASTIC KEYCAP</span>
                                  <h1 className="text-3xl font-black uppercase mt-3 tracking-tight italic">3D TOYBOX KEYCAP SYSTEM</h1>
                                  <p className="text-xs font-bold opacity-90 mt-1">Double stacked borders and bevel shadows mimic keyboard caps and high-end toyboxes.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {/* Beveled plastic cards */}
                                  <motion.div 
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="bg-white border-[5px] border-black rounded-2xl p-5 shadow-[inset_0_-6px_0_rgba(0,0,0,0.1),4px_4px_0px_#000] cursor-pointer flex flex-col justify-between"
                                  >
                                    <span className="bg-zinc-100 border-2 border-black rounded px-2 py-0.5 text-[8px] font-bold uppercase w-fit">TOY MATRIX</span>
                                    <h3 className="font-black text-lg mt-2">Keycap Bevels</h3>
                                    <p className="text-xs font-semibold opacity-75 mt-1">Cards tilt dynamically in 3D parallax in response to active cursor offsets.</p>
                                  </motion.div>

                                  <div className="bg-white border-[5px] border-black rounded-2xl p-5 shadow-[inset_0_-6px_0_rgba(0,0,0,0.1),4px_4px_0px_#000] flex flex-col justify-between">
                                    <span className="bg-zinc-100 border-2 border-black rounded px-2 py-0.5 text-[8px] font-bold uppercase w-fit">PILL CONTAINER</span>
                                    <h3 className="font-black text-lg mt-2">Capsule Pills</h3>
                                    <div className="flex space-x-2 mt-2">
                                      <span className="bg-yellow-400 px-3 py-1 rounded-full border-2 border-black text-[9px] font-black shadow-[1px_1px_0px_#000]">PILL A</span>
                                      <span className="bg-zinc-200 px-3 py-1 rounded-full border-2 border-black text-[9px] font-black shadow-[1px_1px_0px_#000]">PILL B</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                        </motion.div>
                      </AnimatePresence>
                    </div>
                  )}
                  
                  {/* OPTION 2: CYBER-NEOBRUTALIST (Console HUD Layout) */}
                  {selectedOption === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-zinc-100 bg-zinc-950 p-4 border-2 border-yellow-400 shadow-[5px_5px_0px_rgba(139,92,246,0.8)]">
                      <div className="md:col-span-3 border border-yellow-400 p-4 bg-zinc-900 relative">
                        <div className="absolute top-1 right-2 flex space-x-2 text-[10px] text-purple-400 font-bold uppercase tracking-widest animate-pulse">
                          <span>SYSTEM: ONLINE</span>
                          <span className="w-2 h-2 rounded-full bg-green-400 mt-1" />
                        </div>
                        <span className="bg-purple-600 text-yellow-400 px-2 py-0.5 text-xs font-bold border border-yellow-400 uppercase tracking-widest">01 // CYBER CONSOLE</span>
                        <h1 className="text-3xl font-black mt-3 text-yellow-400 tracking-widest uppercase">FUTURE_VISUALS.NOW</h1>
                        <p className="mt-2 text-xs text-zinc-400">RAW NEO-BRUTALIST ARCHITECTURE WITH DATA READOUTS AND MONITOR GRIDS.</p>
                      </div>

                      <div className="md:col-span-2 border border-yellow-400 p-4 bg-zinc-900">
                        <span className="bg-zinc-950 text-yellow-400 border border-yellow-400 px-2 py-0.5 text-[10px] uppercase">02 // FOUNDATION LOGS</span>
                        <p className="mt-3 text-xs leading-relaxed text-zinc-300 font-mono">
                          &gt; AWKWARD STUDIO INITIATED.<br />
                          &gt; CORE SYSTEMS: DEVELOPMENT, MARKETING, GRAPHIC BRAND DESIGN.<br />
                          &gt; PHILOSOPHY: STAND OUT VIA UNCONVENTIONAL VISUAL METAPHORS.
                        </p>
                      </div>

                      <div className="border border-yellow-400 p-4 bg-zinc-900 flex flex-col justify-between">
                        <div>
                          <span className="bg-zinc-950 text-yellow-400 border border-yellow-400 px-2 py-0.5 text-[10px] uppercase">03 // STATUS</span>
                          <div className="flex items-center space-x-3 mt-3">
                            <span className="w-8 h-8 rounded border border-yellow-400 flex items-center justify-center font-bold text-yellow-400">RM</span>
                            <div>
                              <p className="font-bold text-xs">R. MARIWALLA</p>
                              <p className="text-[9px] text-purple-400">SYSTEM DIRECTOR</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-zinc-950 h-1.5 mt-4 border border-yellow-400 overflow-hidden">
                          <div className="bg-purple-600 h-full w-[88%]" />
                        </div>
                      </div>

                      <div className="md:col-span-3 border border-yellow-400 p-4 bg-zinc-900 flex flex-col space-y-4">
                        <span className="bg-purple-600 text-yellow-400 px-2 py-0.5 text-xs border border-yellow-400 uppercase w-fit tracking-wider">04 // INTERACTIVE INPUT</span>
                        <div className="flex flex-col md:flex-row gap-3">
                          <input type="text" placeholder="ROOT_INPUT_NAME..." className="bg-zinc-950 border border-yellow-400 text-yellow-400 px-3 py-1 text-xs focus:outline-none w-full" />
                          <button className="bg-purple-600 text-yellow-400 border border-yellow-400 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shrink-0 shadow-[2px_2px_0px_#000]">EXECUTE_SLIDE</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 3: RETRO MAC SYNTHWAVE (Vintage OS Window Manager) */}
                  {selectedOption === 3 && (
                    <div className="font-serif text-slate-800 bg-[#E5E7EB] border-2 border-slate-800 rounded shadow-md overflow-hidden">
                      {/* Macintosh Menu Header Bar */}
                      <div className="bg-slate-300 border-b border-slate-800 px-3 py-1 flex items-center justify-between text-xs font-bold">
                        <div className="flex space-x-4">
                          <span> PixelWave OS</span>
                          <span>File</span>
                          <span>Edit</span>
                          <span>View</span>
                        </div>
                        <span>10:09 AM</span>
                      </div>

                      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Left Side: Folder shortcuts */}
                        <div className="md:col-span-1 flex flex-col space-y-4 items-center md:items-start text-xs font-bold">
                          <div className="flex flex-col items-center cursor-pointer p-1 rounded hover:bg-slate-400/20">
                            <Folder className="text-slate-700" size={32} />
                            <span>Projects</span>
                          </div>
                          <div className="flex flex-col items-center cursor-pointer p-1 rounded hover:bg-slate-400/20">
                            <Folder className="text-slate-700" size={32} />
                            <span>About.sys</span>
                          </div>
                          <div className="flex flex-col items-center cursor-pointer p-1 rounded hover:bg-slate-400/20">
                            <Disc className="text-slate-700 animate-spin" size={32} />
                            <span>SynthWave.iso</span>
                          </div>
                          <div className="flex flex-col items-center cursor-pointer p-1 rounded hover:bg-slate-400/20">
                            <Trash className="text-slate-700" size={32} />
                            <span>Recycle Bin</span>
                          </div>
                        </div>

                        {/* Right Side: Main Macintosh Window */}
                        <div className="md:col-span-3 border-2 border-slate-800 rounded bg-white shadow-[4px_4px_0px_#FF8DE4] flex flex-col overflow-hidden">
                          <div className="bg-slate-300 border-b-2 border-slate-800 p-2 flex items-center justify-between">
                            <div className="flex space-x-1.5">
                              <span className="w-3.5 h-3.5 rounded-full bg-red-400 border border-slate-800" />
                              <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-slate-800" />
                            </div>
                            <span className="text-[10px] uppercase font-bold text-slate-700">Welcome to PixelWave - Info Box</span>
                            <div className="w-6 h-2" />
                          </div>

                          <div className="p-4 space-y-4 text-xs font-medium text-slate-800">
                            <h2 className="text-xl font-bold font-serif">We Are Awkward Studio</h2>
                            <p className="leading-relaxed font-sans font-semibold">
                              A creative synthwave tech agency constructing visual layouts, retro components, and digital portfolios that Stand Out by design.
                            </p>
                            
                            <div className="flex space-x-3 pt-2 font-sans font-bold">
                              <span className="bg-[#38BDF8] border border-slate-800 text-slate-800 px-3 py-1 rounded shadow-[2px_2px_0px_#000] cursor-pointer">Floppy.dmg</span>
                              <span className="bg-[#FF8DE4] border border-slate-800 text-slate-800 px-3 py-1 rounded shadow-[2px_2px_0px_#000] cursor-pointer">Restore.sys</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 4: GLASSMORPHIC ACID-GROOVY (Layered Cloud Drift Stack) */}
                  {selectedOption === 4 && (
                    <div className="relative p-6 overflow-hidden bg-gradient-to-tr from-pink-600 via-purple-700 to-indigo-900 rounded-3xl min-h-[400px] flex flex-col justify-between text-white border border-white/20">
                      
                      {/* Slow moving liquid spheres */}
                      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-pink-500 blur-2xl opacity-40 animate-pulse" />
                      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#FF7F00] blur-3xl opacity-35" />

                      <div className="relative z-10 space-y-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/25 shadow-lg">
                          <span className="bg-pink-500/30 text-pink-300 border border-pink-400/20 px-3 py-1 text-xs rounded-full font-bold uppercase tracking-wider">01 // LAYER DEPTH GLASS</span>
                          <h1 className="text-3xl font-black mt-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">Atmospheric Immersion</h1>
                          <p className="mt-2 text-sm text-purple-200">Components stacked as floating depth layers that drift organically inside a glassmorphic sky.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-md">
                            <span className="text-[10px] text-pink-400 font-extrabold tracking-widest uppercase">02 // THE PHILOSOPHY</span>
                            <h2 className="text-lg font-bold mt-2">Translucent Stack</h2>
                            <p className="mt-1 text-xs text-purple-200">Deep blur properties and frosted sheets elevate raw contents to a modern digital cloud state.</p>
                          </div>

                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border border-white/30 shadow-lg cursor-pointer flex items-center justify-between"
                          >
                            <div>
                              <span className="text-[10px] text-pink-400 font-extrabold tracking-widest uppercase">03 // CREATOR</span>
                              <h3 className="font-extrabold text-base mt-1">Gooey Parallax</h3>
                            </div>
                            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 to-orange-400 flex items-center justify-center font-black">GP</span>
                          </motion.div>
                        </div>
                      </div>

                      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex flex-col md:flex-row gap-4 items-center justify-between mt-4">
                        <input type="text" placeholder="Enter details..." className="bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-purple-250 focus:outline-none w-full" />
                        <button className="bg-gradient-to-r from-pink-500 to-orange-500 font-extrabold px-6 py-2 rounded-xl shrink-0 shadow-lg hover:scale-105 transition-transform active:scale-95">READY, SLIDE!</button>
                      </div>
                    </div>
                  )}

                  {/* OPTION 5: COMIC-BOOK NOIR (Asymmetric Panel cells) */}
                  {selectedOption === 5 && (
                    <div className="bg-zinc-100 p-4 border-[6px] border-black text-black grid grid-cols-1 md:grid-cols-3 gap-6 shadow-[10px_10px_0px_#FF007F]">
                      
                      {/* Comic cell 1 */}
                      <div className="md:col-span-2 border-[5px] border-black bg-white p-6 relative -rotate-1 shadow-[4px_4px_0px_#000]">
                        <span className="bg-[#FF007F] text-white border-2 border-black font-black px-2 py-0.5 text-xs uppercase italic skew-x-3">PANEL 01 // STORYTELLING</span>
                        <h1 className="text-4xl font-black uppercase italic mt-4 tracking-tighter">BAM! The Process is Awkward</h1>
                        
                        {/* Dialogue bubble pointer */}
                        <div className="absolute -bottom-4 right-10 w-0 h-0 border-t-[16px] border-t-black border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent">
                          <div className="absolute -top-[21px] -left-[12px] w-0 h-0 border-t-[12px] border-t-white border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent" />
                        </div>
                      </div>

                      {/* Comic cell 2 */}
                      <div className="border-[5px] border-black bg-[#FF007F] text-white p-6 rotate-2 shadow-[4px_4px_0px_#000] relative overflow-hidden flex flex-col justify-between">
                        {/* Dot overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]" />
                        <div className="relative z-10">
                          <span className="bg-black text-white border border-white px-2 py-0.5 text-[9px] uppercase tracking-wider">CELL 02 // HERO ACTION</span>
                          <h2 className="text-xl font-black uppercase italic mt-3">High Contrast Noir</h2>
                        </div>
                        <p className="relative z-10 text-xs font-bold mt-2">Narratives partitions with thick sketch lines and bold skews.</p>
                      </div>

                      {/* Comic cell 3 */}
                      <motion.div 
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="md:col-span-1 border-[5px] border-black bg-white p-6 -rotate-2 shadow-[4px_4px_0px_#000] cursor-pointer"
                      >
                        <span className="bg-black text-white px-2 py-0.5 text-[9px] uppercase tracking-wide">CELL 03 // CHARACTER</span>
                        <div className="flex items-center space-x-3 mt-4">
                          <div className="w-12 h-12 rounded-full border-4 border-black bg-zinc-200 flex items-center justify-center font-black skew-x-3">RM</div>
                          <div>
                            <h3 className="font-black text-base italic uppercase">R. MARIWALLA</h3>
                            <p className="text-[10px] uppercase font-bold text-zinc-500">Director Noir</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Comic cell 4 */}
                      <div className="md:col-span-2 border-[5px] border-black bg-white p-6 rotate-1 shadow-[4px_4px_0px_#000]">
                        <span className="bg-[#FF007F] text-white border-2 border-black font-black px-2 py-0.5 text-xs uppercase italic">PANEL 04 // JOIN THE STORY</span>
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-4">
                          <input type="text" placeholder="NAME..." className="border-[3px] border-black px-4 py-2 font-black w-full" />
                          <button className="bg-[#FF007F] text-white border-[4px] border-black font-black px-6 py-2 uppercase italic shadow-[3px_3px_0px_#000] active:translate-y-1 active:shadow-none transition-all shrink-0">READY, SLIDE!</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 6: BAUHAUS GEOMETRIC (Intersecting blueprint Grid) */}
                  {selectedOption === 6 && (
                    <div className="bg-zinc-50 border-[5px] border-black text-zinc-950 p-6 relative shadow-[6px_6px_0px_#DC2626] rounded-none">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 font-sans">
                        <div className="md:col-span-3 border-[4px] border-black bg-[#1D4ED8] text-white p-8 shadow-[4px_4px_0px_#F8C419] rounded-none flex flex-col md:flex-row items-center justify-between">
                          <div className="max-w-xl">
                            <span className="bg-black text-[#F8C419] px-2 py-0.5 text-xs font-black uppercase tracking-wider rounded-none">01 // GEOMETRIC GRID</span>
                            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4">Pure Mathematical Bauhaus</h1>
                            <p className="mt-2 text-sm text-zinc-200">Asymmetric color planes, intersecting lines, and 90° guides create structural utility.</p>
                          </div>
                          
                          <div className="w-16 h-16 border-[4px] border-black rounded-full bg-[#F8C419] flex items-center justify-center text-black font-black text-xs animate-spin duration-5000 mt-4 md:mt-0 shadow-[2px_2px_0px_#000]">
                            GEAR
                          </div>
                        </div>

                        <div className="border-[4px] border-black bg-[#F8C419] text-black p-6 rounded-none shadow-[4px_4px_0px_#000]">
                          <span className="bg-black text-white px-2 py-0.5 text-[9px] font-bold uppercase rounded-none">02 // PLANES</span>
                          <h2 className="text-xl font-black uppercase tracking-tight mt-3">Color Plane A</h2>
                          <p className="text-xs font-semibold mt-1">Bold primary block utilizing strict asymmetry.</p>
                        </div>

                        <div className="border-[4px] border-black bg-[#DC2626] text-white p-6 rounded-none shadow-[4px_4px_0px_#000]">
                          <span className="bg-black text-[#F8C419] px-2 py-0.5 text-[9px] font-bold uppercase rounded-none">03 // DYNAMICS</span>
                          <h2 className="text-xl font-black uppercase tracking-tight mt-3">Color Plane B</h2>
                          <p className="text-xs font-semibold mt-1">High contrast scarlet block anchoring coordinates.</p>
                        </div>

                        <div className="border-[4px] border-black bg-white p-6 rounded-none shadow-[4px_4px_0px_#000] flex flex-col justify-between">
                          <div>
                            <span className="bg-[#1D4ED8] text-white px-2 py-0.5 text-[9px] font-bold uppercase rounded-none">04 // DATA</span>
                            <h2 className="text-xl font-black uppercase mt-3">Anchor Grid</h2>
                          </div>
                          <button className="bg-[#DC2626] text-white border-[3px] border-black px-4 py-2 font-black rounded-none shadow-[3px_3px_0px_#F8C419] active:translate-y-1 mt-4 transition-all">READY, SLIDE!</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 7: Y2K HOLOGRAPHIC (Audio Deck Turntable Deck) */}
                  {selectedOption === 7 && (
                    <div className="bg-zinc-900 border-2 border-indigo-400 p-6 rounded-3xl text-zinc-100 shadow-[0_0_20px_rgba(167,139,250,0.3)] relative overflow-hidden">
                      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rotate-12 blur-3xl pointer-events-none" />

                      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 font-mono">
                        <div className="md:col-span-3 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-400/50 p-6 rounded-2xl shadow-inner flex flex-col justify-between">
                          <div>
                            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-2 py-0.5 text-[9px] font-bold rounded uppercase tracking-widest">01 // MEDIA CONSOLE DECK</span>
                            <h1 className="text-3xl font-black uppercase mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 tracking-widest font-mono">HOLOGRAPHIC_VISUALIZER.Y2K</h1>
                            <p className="mt-2 text-xs text-indigo-200 font-semibold font-sans">Interactive Y2K audio decks partition information with glowing wireframe grids and Cd widgets.</p>
                          </div>
                          
                          <div className="mt-6 border border-indigo-300/30 rounded-lg p-3 bg-black/40 flex items-center space-x-4">
                            <span className="text-[10px] text-pink-400">MIXER SPEED</span>
                            <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700 relative">
                              <div className="absolute top-0 left-1/3 w-3 h-2 bg-indigo-400 rounded cursor-pointer shadow-lg" />
                            </div>
                            <span className="text-[10px] text-indigo-400">80.4bpm</span>
                          </div>
                        </div>

                        <div className="border border-indigo-400/40 bg-zinc-950 p-4 rounded-2xl flex flex-col items-center justify-center relative">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-400 border border-white/20 flex items-center justify-center animate-spin duration-3000 relative shadow-lg">
                            <div className="w-8 h-8 rounded-full bg-zinc-950 border border-white/20" />
                          </div>
                          <span className="text-[9px] text-zinc-400 uppercase tracking-widest mt-3">AUDIO_CD_01</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 8: KAWAII PAPER-CUT (Layered Dioramas & Jelly buttons) */}
                  {selectedOption === 8 && (
                    <div className="bg-[#FFF1F2] border-[5px] border-[#4C0519] rounded-3xl p-6 text-[#4C0519] relative shadow-[6px_6px_0px_#FECDD3]">
                      <div className="space-y-6 font-sans">
                        <div className="bg-[#FDA4AF] border-[5px] border-[#4C0519] rounded-2xl p-6 shadow-[5px_5px_0px_#4C0519] relative flex flex-col md:flex-row items-center justify-between overflow-hidden">
                          <div className="absolute right-4 bottom-2 opacity-10 font-bold text-4xl">(=^.^*=)</div>
                          
                          <div className="relative z-10 max-w-xl text-center md:text-left">
                            <span className="bg-white text-[#F43F5E] border-2 border-[#4C0519] px-2.5 py-0.5 text-xs rounded-full font-black uppercase">01 // KAWAII CRAFTS</span>
                            <h1 className="text-3xl font-black mt-3">Stacked Paper Dioramas</h1>
                            <p className="mt-1 text-sm font-extrabold opacity-95">UX simulates construction paper layers stacked with soft drop shadows.</p>
                          </div>
                          
                          <div className="w-16 h-16 rounded-full bg-white border-4 border-[#4C0519] flex items-center justify-center font-bold text-[#F43F5E] text-2xl shadow-[3px_3px_0px_#4C0519] shrink-0 mt-4 md:mt-0 select-none">
                            ^.^
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white border-[4px] border-[#4C0519] p-5 rounded-2xl shadow-[4px_4px_0px_#4C0519]">
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-full bg-[#FFE4E6] border-2 border-[#4C0519] flex items-center justify-center font-black text-xs">J</span>
                            <p className="font-extrabold text-sm">Squishy Button Physics</p>
                          </div>
                          <button className="bg-[#F43F5E] text-white border-[4px] border-[#4C0519] font-black rounded-3xl px-8 py-2.5 shadow-[4px_4px_0px_#4C0519] hover:scale-105 active:scale-95 active:translate-y-0.5 active:shadow-[1px_1px_0px_#4C0519] transition-all">SQUEEZE ME!</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 9: SWISS TYPOGRAPHIC (Mega Scale Editorial Column) */}
                  {selectedOption === 9 && (
                    <div className="bg-white text-black p-8 border-[6px] border-black rounded-none shadow-none font-sans relative">
                      <div className="border-b-[4px] border-black pb-4 mb-6 flex items-center justify-between">
                        <span className="font-black tracking-widest text-xs uppercase font-mono">SWISS EDITION // N.09</span>
                        <span className="font-black text-xs">MAY 2026</span>
                      </div>

                      <div className="space-y-8">
                        <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase rounded-none tracking-widest">01 // HERO TYPO</span>
                        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none border-b border-zinc-300 pb-6">
                          THE PROCESS <br />
                          IS AWKWARD.
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                          <p className="font-bold leading-relaxed text-justify">
                            AWKWARD STUDIO IS A STARK MINIMALIST DIGITAL SOLUTIONS AGENCY STRIPPING ALL DECORATIONS TO EMPOWER HIGH CONTRAST PRINT EDITORIAL TYPOGRAPHY AND CONTENT SCALE.
                          </p>
                          <div className="flex flex-col justify-between border-t-4 border-black pt-4">
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-4">SYSTEM ANCHOR LOGS</p>
                            <div className="flex justify-between items-center">
                              <span className="font-black uppercase tracking-wider">Switzerland Layout</span>
                              <button className="bg-black text-white font-black px-6 py-2.5 rounded-none hover:bg-zinc-900 transition-colors uppercase tracking-widest text-xs border border-black">READY, SLIDE!</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 10: COSMIC ACID-TRANCE (Gravity Orbital System) */}
                  {selectedOption === 10 && (
                    <div className="bg-[#090514] border-4 border-[#00FF66] rounded-3xl p-8 text-[#00FF66] shadow-[0_0_25px_rgba(0,255,102,0.3)] relative min-h-[420px] overflow-hidden flex flex-col justify-between">
                      <div className="absolute inset-0 bg-[radial-gradient(#00FF66_0.5px,transparent_0.5px)] opacity-5 [background-size:24px_24px] pointer-events-none" />

                      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-[#00FF66]/20 pb-6 mb-6 font-mono">
                        <div>
                          <span className="bg-zinc-950 text-[#00FF66] border border-[#00FF66] px-2 py-0.5 text-[9px] rounded font-bold uppercase tracking-widest">01 // GRAVITY LAYOUT</span>
                          <h1 className="text-3xl font-black uppercase tracking-widest mt-3">ORBITAL_CONCENTRICS.ISO</h1>
                        </div>
                        
                        <div className="w-12 h-12 border-2 border-dashed border-[#00FF66] rounded-full flex items-center justify-center animate-spin duration-3000 text-[10px] mt-4 md:mt-0">
                          GRAV
                        </div>
                      </div>

                      <div className="relative flex-1 flex flex-col md:flex-row items-center justify-center gap-8 py-6 font-mono">
                        <div className="bg-zinc-900/90 border border-[#00FF66]/40 p-4 rounded-xl shadow-lg relative flex flex-col justify-between text-xs max-w-xs h-28 w-full">
                          <span className="font-mono text-[9px] opacity-75">ORBIT // 02</span>
                          <p className="font-bold text-shadow-neon font-sans">Components rotate along orbital rings in galactic space.</p>
                        </div>

                        <div className="bg-zinc-900/90 border border-[#00FF66]/40 p-4 rounded-xl shadow-lg relative flex flex-col justify-between text-xs max-w-xs h-28 w-full">
                          <span className="font-mono text-[9px] opacity-75">ORBIT // 03</span>
                          <p className="font-bold text-shadow-neon font-sans">Twinkling neon paths guide you deeper into our solar system.</p>
                        </div>
                      </div>

                      <div className="relative z-10 bg-zinc-950 border border-[#00FF66]/40 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between mt-4 font-mono">
                        <input type="text" placeholder="COSMIC_SEEDS..." className="bg-black border border-[#00FF66] text-[#00FF66] px-4 py-2 placeholder-emerald-950 w-full text-xs focus:outline-none" />
                        <button className="bg-[#00FF66] text-zinc-950 font-black border border-black shadow-[3px_3px_0px_#00FF66] px-6 py-2 uppercase tracking-widest text-xs shrink-0 active:translate-y-0.5">LAUNCH_COSMIC</button>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
