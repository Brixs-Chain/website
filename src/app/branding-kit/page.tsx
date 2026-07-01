import React from 'react';
import Image from 'next/image';
import { Download, LayoutTemplate, Palette } from 'lucide-react';
import BrxFooter from "@/components/BrxFooter";

export const metadata = {
  title: 'Branding Kit | Brixs Chain',
  description: 'Download official Brixs Chain logos, icons, and brand assets.',
};

const assets = [
  {
    category: "Full Logos",
    items: [
      { name: "Black on Transparent", type: "Full Logo", previewClass: "bg-white", src: "/branding-kit/full_logo_black_on_transparent.png", svg: "/branding-kit/full_logo_black_on_transparent.svg" },
      { name: "White on Transparent", type: "Full Logo", previewClass: "bg-[#0a0a0b]", src: "/branding-kit/full_logo_white_on_transparent.png", svg: "/branding-kit/full_logo_white_on_transparent.svg" },
      { name: "Black on White", type: "Full Logo", previewClass: "bg-white", src: "/branding-kit/full_logo_black_on_white.png", svg: "/branding-kit/full_logo_black_on_white.svg" },
      { name: "White on Black", type: "Full Logo", previewClass: "bg-[#0a0a0b]", src: "/branding-kit/full_logo_white_on_black.png", svg: "/branding-kit/full_logo_white_on_black.svg" },
    ]
  },
  {
    category: "Icon Logos",
    items: [
      { name: "Black Icon (Transparent)", type: "Icon", previewClass: "bg-white", src: "/branding-kit/icon_black_on_transparent.png", svg: "/branding-kit/icon_black_on_transparent.svg" },
      { name: "White Icon (Transparent)", type: "Icon", previewClass: "bg-[#0a0a0b]", src: "/branding-kit/icon_white_on_transparent.png", svg: "/branding-kit/icon_white_on_transparent.svg" },
      { name: "Black Icon (White Bg)", type: "Icon", previewClass: "bg-white", src: "/branding-kit/icon_black_on_white.png", svg: "/branding-kit/icon_black_on_white.svg" },
      { name: "White Icon (Black Bg)", type: "Icon", previewClass: "bg-[#0a0a0b]", src: "/branding-kit/icon_white_on_black.png", svg: "/branding-kit/icon_white_on_black.svg" },
    ]
  }
];

export default function BrandingKitPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <section className="border-b border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-[rgba(5,7,10,.72)] backdrop-blur-2xl pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-none border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 ava-cut border-l-4 border-l-[#005BFF] px-4 py-2 text-xs uppercase tracking-[0.34em] text-black/55 dark:text-white/55 mb-6">
            <Palette size={14} /> Brand Resources
          </span>
          <h1 className="text-4xl md:text-6xl uppercase font-semibold tracking-[-0.05em] text-black dark:text-white mb-6">
            Branding Kit
          </h1>
          <p className="text-lg text-black/60 dark:text-white/66 max-w-2xl leading-8">
            Official logos, brand assets, and usage guidelines for Brixs Chain. 
            Download the correct format (SVG or PNG) for your specific use case.
          </p>
        </div>
      </section>

      {/* Assets List */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-24">
          {assets.map((section, idx) => (
            <div key={idx}>
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.34em] text-black/40 dark:text-white/40 leading-relaxed text-balance mb-2">
                  Category
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.02em] flex items-center gap-3">
                  <LayoutTemplate size={24} className="text-black/40 dark:text-white/40" /> {section.category}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col bg-black/[0.02] dark:bg-white/[0.02] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 transition hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]">
                    {/* Preview Area */}
                    <div className={`h-56 flex items-center justify-center p-8 relative border-b border-black/10 dark:border-white/10 ${item.previewClass}`}>
                      <Image 
                        src={item.src} 
                        alt={item.name} 
                        width={400} 
                        height={200} 
                        className="w-auto h-full max-h-[90px] object-contain drop-shadow-xl"
                        unoptimized
                      />
                    </div>
                    
                    {/* Info & Download */}
                    <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-black dark:text-white text-lg">{item.name}</h3>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-black/50 dark:text-white/42 mt-1">{item.type}</p>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <a 
                          href={item.src} 
                          download
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-none border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white"
                        >
                          PNG <Download size={14} />
                        </a>
                        <a 
                          href={item.svg} 
                          download
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-none border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white"
                        >
                          SVG <Download size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Added the missing footer here */}
      <BrxFooter />
    </main>
  );
}
