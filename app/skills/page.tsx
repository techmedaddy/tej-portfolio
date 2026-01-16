import { Navigation } from '@/components/navigation';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const technicalSkills = {
  'Languages': ['Python', 'JavaScript', 'SQL', 'PHP', 'Go', 'TypeScript'],
  'Tools & Platforms': ['Excel', 'Power BI', 'Tableau', 'Postman', 'Swagger', 'Git', 'VS Code'],
  'Libraries & Frameworks': ['Pandas', 'NumPy', 'TensorFlow', 'Scikit-learn', 'React', 'Next.js', 'Node.js'],
  'Data & Analytics': ['Data Analysis', 'A/B Testing', 'Statistical Modeling', 'ETL', 'Data Visualization'],
  'Product & Strategy': ['Product Roadmaps', 'User Research', 'Wireframing', 'BRD/PRD', 'Market Analysis', 'Growth Strategy'],
};

const achievements = [
  {
    title: 'Kirana Club Case Competition',
    description: 'Top 5 Finalist',
    period: 'Nov 2024',
    color: 'purple',
  },
  {
    title: 'Tinder User Engagement Challenge',
    description: 'Unstop Case Challenge Winner',
    period: 'Oct 2024',
    color: 'cyan',
  },
  {
    title: 'PM School Competition',
    description: 'Swiggy Product Improvement',
    period: 'Aug 2023',
    color: 'green',
  },
  {
    title: 'Smart India Hackathon',
    description: 'Top 50 Finalist (Agritech)',
    period: '2023',
    color: 'purple',
  },
  {
    title: 'Inter-College Debate',
    description: 'First Place Winner',
    period: '2022',
    color: 'cyan',
  },
  {
    title: 'National Level Hackathons',
    description: 'Multiple Top 10 Finishes',
    period: '2022-2024',
    color: 'green',
  },
];

export default function Skills() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <WebGLShader />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Skills & Achievements
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-purple-400">💻</span>
                Technical Skills
              </h2>
              
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div
                    key={category}
                    className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-purple-500/10 text-white/90 text-sm font-medium rounded-full border border-purple-500/20 hover:bg-purple-500/20 hover:scale-105 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft Skills */}
              <div className="mt-8 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Leadership', 'Strategic Thinking', 'Cross-functional Collaboration', 'Problem Solving', 'Communication', 'Stakeholder Management'].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-cyan-400">🏆</span>
                Achievements
              </h2>
              
              <div className="space-y-6">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className={`bg-black/50 backdrop-blur-sm border rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                      achievement.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/50' :
                      achievement.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50' :
                      'border-green-500/20 hover:border-green-500/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-xl font-bold ${
                        achievement.color === 'purple' ? 'text-purple-400' :
                        achievement.color === 'cyan' ? 'text-cyan-400' :
                        'text-green-400'
                      }`}>
                        {achievement.title}
                      </h3>
                      <span className="text-white/50 text-xs">{achievement.period}</span>
                    </div>
                    <p className="text-white/70 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mt-8 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <span>🎓</span>
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-semibold">BMS Institute of Technology and Management</p>
                    <p className="text-white/70 text-sm">Computer Science Engineering (AI & ML)</p>
                    <p className="text-white/50 text-xs">Bengaluru, Karnataka • 2021 - 2025</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Certifications & Learning</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">→</span>
                    Product Management Fundamentals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">→</span>
                    Data Analysis & Visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">→</span>
                    Machine Learning with Python
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Together</h3>
              <p className="text-white/70 mb-6">
                Interested in collaborating or discussing opportunities? I'd love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
