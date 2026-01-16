import { Navigation } from '@/components/navigation';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const projects = [
  {
    id: 1,
    title: 'Kirana Club Strategic Growth',
    subtitle: 'Top 5 Finalist, Kirana Club Case Competition',
    period: 'Nov 2024',
    description: 'Conducted root cause analysis to address a 15% decline in engagement; crafting strategies like price alerts and supplier partnerships',
    highlights: [
      'Recommended user-generated content and enhanced features with insights and alerts',
      'Improved engagement metrics and session duration based on data-driven insights',
    ],
    tags: ['Strategy', 'Analytics', 'Growth'],
    color: 'purple',
  },
  {
    id: 2,
    title: 'Tinder User Engagement Optimization',
    subtitle: 'Unstop Case Challenge',
    period: 'Oct 2024',
    description: 'Enhanced user experience by introducing gamified onboarding and avatar-based video features',
    highlights: [
      'Increased Day 7 retention from 40% to a targeted 60-70%',
      'Developed engagement metrics including Match-to-Message Ratio and Profile Completion Rate',
      'Implemented A/B testing framework for freemium users',
    ],
    tags: ['Product', 'UX', 'Metrics'],
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Swiggy Product Improvement',
    subtitle: 'PM School Competition',
    period: 'Aug 2023',
    description: 'Delivered product enhancement strategies for Swiggy to address user pain points and boost Average Order Value (AOV)',
    highlights: [
      'Introduced features like Swiggy Swipe, Schedule Instabuy for improved UX',
      'Supported strategies with wireframes and success metrics',
      'Focused on increasing user retention and order frequency',
    ],
    tags: ['Product Design', 'Food Tech', 'UX'],
    color: 'green',
  },
  {
    id: 4,
    title: 'StockLens',
    subtitle: 'LSTM-based Stock Forecasting',
    period: 'Apr 2024 - May 2024',
    description: 'Built an LSTM model to forecast AAPL (2015-2020) stock trends, delivering actionable 30-day market predictions',
    highlights: [
      'Combined Yahoo Finance and Tiingo API data for effective visualized trends',
      'Enhanced investment insights and strategic decisions through predictive analytics',
      'Implemented time-series analysis with deep learning',
    ],
    tags: ['Machine Learning', 'Finance', 'Python', 'LSTM'],
    color: 'purple',
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <WebGLShader />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Case Studies & Projects
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
              A selection of product challenges, strategic analyses, and technical implementations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-black/50 backdrop-blur-sm border rounded-2xl p-8 group hover:scale-105 transition-all duration-300 cursor-pointer ${
                  project.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20' :
                  project.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20' :
                  'border-green-500/20 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20'
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-2xl font-bold ${
                      project.color === 'purple' ? 'text-purple-400' :
                      project.color === 'cyan' ? 'text-cyan-400' :
                      'text-green-400'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm font-medium">{project.subtitle}</p>
                  <p className="text-white/50 text-xs mt-1">{project.period}</p>
                </div>

                {/* Description */}
                <p className="text-white/80 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className={`mt-1 ${
                        project.color === 'purple' ? 'text-purple-400' :
                        project.color === 'cyan' ? 'text-cyan-400' :
                        'text-green-400'
                      }`}>
                        →
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.color === 'purple' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        project.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                        'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Section */}
          <div className="mt-16 text-center">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
              <p className="text-white/70 mb-6">
                I'm constantly working on new challenges and case studies. Check back for updates or reach out to discuss specific projects.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
