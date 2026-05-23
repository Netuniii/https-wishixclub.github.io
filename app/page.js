"use client";

import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const roadmap = [
    {
      title: "✨ Development",
      items: [
        { name: "✨ Charmix and Quests", progress: 25 },
        { name: "👹 Lord Darkar", progress: 0 },
        { name: "🧙Disenchantix", progress: 0 },
        { name: "🧚Pixies", progress: 0 },
        { name: "⚔️Specialists", progress: 30 },
        { name: "🚶‍♂️Revamped Idles", progress: 0 },
        { name: "🦆 Pepe (The Duck) ", progress: 0 },
        { name: "⏱️Revamped Badges ", progress: 20 },
      ],
    },
    {
      title: "🎮 Gameplay",
      items: [
        { name: "🏰 New Maps", progress: 10 },
        { name: "⚔️ Combat System", progress: 0 },
        { name: "🌟 Power System", progress: 0 },
      ],
    },
    {
      title: "🎨 Future Updates",
      items: [
        { name: "🧚 Enchantix", progress: 0 },
        { name: "🐾 Pet System Revamp", progress: 0 },
      ],
    },
    {
      title: "🚀 Release",
      items: [
        { name: "🪩 Party System and Outfits", progress: 100 },
        { name: "🦋 Revamped Transformations", progress: 100 },
        { name: "🌲 Explorer Outfits", progress: 100 },
      ],
    },
  ];

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white p-10 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/wishixbackground.png')",
      }}
    >
      {/* MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* LOGO */}
        <img
  src="/wishixlogo.png"
  alt="Wishix Logo"
  className="
    w-60
    mx-auto
    mb-6
    transition-all duration-500
    hover:scale-110
    hover:-translate-y-1
    cursor-pointer

    hover:drop-shadow-[0_0_25px_rgba(255,0,255,0.8)]
  "
/>

        {/* TITLE */}
        <h1 className="text-6xl font-black mb-2">
          Wishix Club✨
        </h1>

        {/* SUBTITLE */}
        <p className=" font-bold text-white/70 text-lg mb-6">
          Official Roblox Roadmap Development
        </p>

        {/* PLAY BUTTON (ROBLOX) */}
        <a
          href="https://www.roblox.com/games/18864354815/PARTY-Wishix-Club"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mb-6
            inline-flex items-center gap-2
            px-8 py-4 rounded-full
            bg-gradient-to-r from-pink-500 to-purple-500
            text-white font-bold text-lg
            shadow-[0_0_25px_rgba(255,0,255,0.4)]
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(255,0,255,0.6)]
          "
        >
          ▶ PLAY NOW
        </a>

        {/* MUSIC BUTTON */}
        <button
          onClick={() => {
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
          }}
          className="
            mb-4
            px-5 py-2 rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/10
            hover:bg-white/15
            transition-all duration-300
          "
        >
          {isPlaying ? "⏸ Pause Music" : "🎵 Play Music"}
        </button>

        {/* VOLUME */}
        <div className="
          flex items-center gap-2 mb-10
          bg-white/10 backdrop-blur-md
          px-3 py-1 rounded-full
          border border-white/10
        ">
          <span className="text-sm">🎵</span>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0.3"
            onChange={(e) => {
              audioRef.current.volume = e.target.value;
            }}
            className="w-24 cursor-pointer accent-pink-400"
          />
        </div>

        {/* ROADMAP */}
        <div className="w-full max-w-4xl space-y-6">
          {roadmap.map((category, index) => (
            <details
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-md
                rounded-2xl
                p-5
                border border-white/10
                transition-all duration-300
                hover:bg-white/10
                hover:border-white/20
              "
            >
              <summary className="
                text-2xl font-semibold
                list-none
                flex justify-between items-center
                cursor-pointer select-none
              ">
                {category.title}

                <span className="
                  text-xl text-white/60
                  transition-transform duration-300
                  group-open:rotate-45
                ">
                  +
                </span>
              </summary>

              <div className="mt-6 space-y-4 text-lg text-white/90">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="
                      bg-black/10
                      rounded-xl
                      p-4
                      transition-all duration-300
                      hover:bg-white/10
                      hover:translate-x-1
                    "
                  >
                    <div className="flex justify-between mb-2">
                      <span>{item.name}</span>
                      <span className="text-white/60">
                        {item.progress}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-pink-400/70"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

      </div>
    </main>
  );
}