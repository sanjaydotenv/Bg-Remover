import React, { useRef, useState } from "react";
import { uploadImage, hangleChange } from "../uploadImage";

const BgRemoverUi = () => {
  const inpRef = useRef(null);

  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    setLoading(true);

    try {
      await hangleChange(e, setImageUrl);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white px-6 py-5">

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white text-black flex items-center justify-center font-black text-lg">
            R
          </div>

          <h1 className="text-xl font-semibold">
            Remove<span className="text-white/40">BG</span>
          </h1>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium">
          Get Started
        </button>
      </nav>

      {/* Main */}
      <main className="max-w-5xl mx-auto pt-24 pb-20">

        {/* Hero */}
        <div className="text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/60 mb-7">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            AI Powered Image Editing
          </div>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.95]">
            Remove backgrounds.
            <br />

            <span className="text-white/30">
              Keep the magic.
            </span>
          </h2>

          <p className="max-w-xl mx-auto mt-7 text-white/45 text-base md:text-lg leading-relaxed">
            Upload an image and let AI remove the background automatically.
            Fast, clean and ready to use anywhere.
          </p>

        </div>

        {/* Upload / Result Card */}
        <div className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.035] p-3 shadow-2xl">

          <div className="relative min-h-[390px] rounded-[22px] border border-dashed border-white/15 bg-[#101014] flex flex-col items-center justify-center overflow-hidden">

            {/* Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

            {/* Result Image */}
            {imageUrl && !loading && (
              <div className="relative z-10 flex flex-col items-center">

                <p className="text-sm text-white/40 mb-5">
                  Background Removed ✨
                </p>

                <div className="bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')] rounded-xl overflow-hidden">
                  <img
                    src={imageUrl}
                    alt="Removed background"
                    className="max-w-[420px] max-h-[350px] object-contain rounded-xl"
                  />
                </div>

                <div className="flex gap-3 mt-6">

                  <a
                    href={imageUrl}
                    download="removed-background.png"
                    className="px-6 py-3 rounded-xl bg-white text-black text-sm font-medium"
                  >
                    Download Image
                  </a>

                  <button
                    onClick={() => setImageUrl(null)}
                    className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-sm"
                  >
                    Remove Another
                  </button>

                </div>

              </div>
            )}

            {/* Loading */}
            {loading && (
              <div className="relative z-10 flex flex-col items-center">

                <div className="h-12 w-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />

                <h3 className="mt-6 text-xl font-medium">
                  Removing background...
                </h3>

                <p className="mt-2 text-sm text-white/35">
                  AI is processing your image
                </p>

              </div>
            )}

            {/* Upload */}
            {!imageUrl && !loading && (
              <>
                <div className="relative z-10 h-20 w-20 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-6">

                  <svg
                    className="w-9 h-9 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16V4m0 0 4 4m-4-4L8 8M5 20h14"
                    />
                  </svg>

                </div>

                <h3 className="relative z-10 text-xl font-medium">
                  Drop your image here
                </h3>

                <p className="relative z-10 mt-2 text-sm text-white/35">
                  or choose a file from your device
                </p>

                <input
                  ref={inpRef}
                  onChange={handleImageChange}
                  hidden
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                />

                <button
                  onClick={() => uploadImage(inpRef)}
                  className="relative z-10 mt-7 px-7 py-3 rounded-xl bg-white text-black font-medium text-sm hover:scale-[1.02] transition"
                >
                  Upload Image
                </button>

                <p className="relative z-10 mt-5 text-xs text-white/25">
                  PNG, JPG or WEBP · Max 10MB
                </p>
              </>
            )}

          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="h-9 w-9 rounded-lg bg-white/[0.06] flex items-center justify-center mb-4">
              ✦
            </div>

            <h4 className="font-medium">
              AI Powered
            </h4>

            <p className="text-sm text-white/35 mt-1">
              Automatically detect and remove backgrounds.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="h-9 w-9 rounded-lg bg-white/[0.06] flex items-center justify-center mb-4">
              ⚡
            </div>

            <h4 className="font-medium">
              Lightning Fast
            </h4>

            <p className="text-sm text-white/35 mt-1">
              Get your processed image in seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="h-9 w-9 rounded-lg bg-white/[0.06] flex items-center justify-center mb-4">
              ◇
            </div>

            <h4 className="font-medium">
              High Quality
            </h4>

            <p className="text-sm text-white/35 mt-1">
              Clean edges with transparent backgrounds.
            </p>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto border-t border-white/10 py-7 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/30">

        <p>
          © 2026 RemoveBG
        </p>

        <p>
          Simple. Fast. Powerful.
        </p>

      </footer>

    </div>
  );
};

export default BgRemoverUi;