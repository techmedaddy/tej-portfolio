import { Navigation } from '@/components/navigation';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const experiences = [
  {
    id: 1,
    company: 'RegisterKaro',
    role: "Founder's Office Intern (Strategy)",
    location: 'Gurugram, Haryana',
    period: 'Jan 2025 – Apr 2025',
    highlights: [
      'Leading the development of a Re.AI+ ERP system to enhance operational efficiency, and drive a 50% revenue increase',
      'Enhancing customer communication workflows by 100%',
      'Collaborating with 6 departments and team leads to define product roadmaps, streamline requirements, and draft a BRD',
      'Developing AI-driven automation using Visual Language Models and Large Action Models (LAMs) to streamline internal processes',
    ],
    color: 'purple',
  },
  {
    id: 2,
    company: 'Marine Edge',
    role: 'Product & Growth (Founding Team)',
    location: 'Bengaluru, Karnataka',
    period: 'Jul 2023 – Nov 2024',
    highlights: [
      'Boosted monthly enrollments by 260% and projected 167% annual growth through Excel-based data analysis and A/B tested strategies informed by student feedback',
      'Collaborated with the social media team to achieve a 300% follower increase in 6 months (15% MoM) using Facebook Analytics, boosting user acquisition through optimized content',
      'Developed and launched a one-to-one mentorship program, boosting student retention by 25% and improving engagement through user-persona analysis',
    ],
    color: 'cyan',
  },
  {
    id: 3,
    company: 'Indian Oil Corporation Ltd',
    role: 'Analytics Intern',
    location: 'Vaishali',
    period: 'Oct 2023 – Nov 2023',
    highlights: [
      'Architected and deployed a PHP backend into Go-based services to improve stability and performance',
      'Tested and documented APIs using Postman and Swagger to maintain reliable integrations',
      'Integrated REST endpoints with frontend workflows and Razorpay payment handling',
    ],
    color: 'green',
  },
];

export default function Experience() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <WebGLShader />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Professional Experience
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 opacity-30"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-black z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div 
                      className={`bg-black/50 backdrop-blur-sm border rounded-2xl p-6 md:p-8 group hover:scale-105 transition-transform duration-300 ${
                        exp.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/50' :
                        exp.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50' :
                        'border-green-500/20 hover:border-green-500/50'
                      }`}
                    >
                      <div className="mb-4">
                        <h3 className={`text-2xl font-bold mb-2 ${
                          exp.color === 'purple' ? 'text-purple-400' :
                          exp.color === 'cyan' ? 'text-cyan-400' :
                          'text-green-400'
                        }`}>
                          {exp.company}
                        </h3>
                        <p className="text-white text-lg font-semibold">{exp.role}</p>
                        <p className="text-white/60 text-sm mt-1">{exp.location}</p>
                        <p className="text-white/50 text-sm mt-1">{exp.period}</p>
                      </div>

                      <ul className="space-y-3 text-white/80 text-sm md:text-base">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className={`mt-1 ${
                              exp.color === 'purple' ? 'text-purple-400' :
                              exp.color === 'cyan' ? 'text-cyan-400' :
                              'text-green-400'
                            }`}>
                              {index % 2 === 0 ? '←' : '→'}
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-white/70 text-lg mb-6">
              Want to learn more about my journey?
            </p>
            <a 
              href="/about" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Read My Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
