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
          <h1 className="mb-3 text-white text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">
            Design is Everything
          </h1>
          <p className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg">
            Product-minded engineer operating at the intersection of strategy, analytics, and automation. 
            Turning messy data into scalable systems and measurable growth.
          </p>
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
