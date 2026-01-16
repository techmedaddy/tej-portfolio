import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function About() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <WebGLShader />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-8">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Product-minded engineer with a knack for turning messy data and vague ideas into 
                scalable systems and measurable growth.
              </p>
              
              <p>
                I live at the intersection of strategy, analytics, and automation—building ERP systems, 
                designing AI-driven workflows, and collaborating across teams to make businesses run smarter. 
              </p>
              
              <p>
                From <span className="text-purple-400 font-semibold">boosting enrollments by 260%</span> to 
                optimizing routes for <span className="text-cyan-400 font-semibold">20K+ customers</span>, 
                I enjoy solving real problems with data, tech, and a strong product lens.
              </p>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">→</span>
                    <span>Build scalable systems that transform messy data into actionable insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-xl">→</span>
                    <span>Design AI-driven workflows that streamline operations and drive efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">→</span>
                    <span>Collaborate across teams to align product strategy with business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-xl">→</span>
                    <span>Deliver measurable impact through data-driven decision making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="flex justify-center">
            <a 
              href="/tps_resume.pdf" 
              download
              className="group"
            >
              <LiquidButton 
                className="text-white border rounded-full flex items-center gap-2" 
                size="lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:translate-y-1 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </LiquidButton>
            </a>
          </div>

          {/* Fun Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">260%</div>
              <div className="text-white/70 text-sm">Enrollment Growth</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">20K+</div>
              <div className="text-white/70 text-sm">Customers Optimized</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-white/70 text-sm">Revenue Increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
