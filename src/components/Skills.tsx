import ScrollFadeIn from './ScrollFadeIn';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      level: "Experienced",
      years: "3+",
      projects: "BlockChain API, BookNotes",
      progress: 90
    },
    {
      name: "React",
      level: "Experienced",
      years: "2+",
      projects: "Portfolio, Multiple SPAs",
      progress: 85
    },
    {
      name: "Node.js",
      level: "Proficient",
      years: "2+",
      projects: "REST APIs, Backend Services",
      progress: 80
    },
    {
      name: "Express.js",
      level: "Proficient",
      years: "2+",
      projects: "Web Servers, API Development",
      progress: 80
    },
    {
      name: "MongoDB",
      level: "Proficient",
      years: "2+",
      projects: "Database Design, CRUD Operations",
      progress: 75
    },
    {
      name: "PostgreSQL",
      level: "Familiar",
      years: "1+",
      projects: "Relational Database Projects",
      progress: 65
    },
    {
      name: "Python",
      level: "Familiar",
      years: "2+",
      projects: "Scripting, Data Analysis",
      progress: 70
    },
    {
      name: "TypeScript",
      level: "Proficient",
      years: "1+",
      projects: "Type-safe Applications",
      progress: 75
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Experienced": return "bg-green-500";
      case "Proficient": return "bg-blue-500";
      case "Familiar": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the technologies I work with
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollFadeIn 
              key={skill.name} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Experience: {skill.years} years</span>
                  </div>
                  
                  {/* Animated progress bar without percentage */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">Projects: </span>
                  {skill.projects}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;