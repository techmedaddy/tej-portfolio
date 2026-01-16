import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function Home() {
  return (
    <div className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      <WebGLShader />
      <Navigation />
      <div className="relative border border-[#27272a] p-2 w-full mx-auto max-w-3xl z-10 bg-black/50 backdrop-blur-sm rounded-xl mt-20">
        <main className="relative border border-[#27272a] py-10 overflow-hidden rounded-lg">
          <div className="px-6 text-center">
            <p className="text-white/70 text-lg md:text-xl mb-2">
              Hi, my name is
            </p>
            <h1 className="mb-6 text-white text-center text-6xl md:text-7xl font-extrabold tracking-tight">
              Tej Pratap Singh.
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed">
              I am a product-minded engineer who thrives at the intersection of strategy, analytics, and automation.
            </p>
            <p className="text-white/60 text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
              I turn messy data and vague ideas into scalable systems and measurable growth.
            </p>
          </div>
          
          <div className="my-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-green-500">Available for New Projects</p>
          </div>
          
          <div className="flex justify-center"> 
            <Link href="/projects">
              <LiquidButton className="text-white border rounded-full" size={'xl'}>
                View Work
              </LiquidButton> 
            </Link>
          </div> 
        </main>
      </div>
    </div>
  );
}
