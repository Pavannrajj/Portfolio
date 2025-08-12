import ScrollFadeIn from './ScrollFadeIn';
import { Code, BookOpen, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      label: "Years Learning",
      value: "3+",
      description: "Coding & Development"
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      label: "Projects Built",
      value: "15+",
      description: "Web Applications"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      label: "Technologies",
      value: "10+",
      description: "Languages & Frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn direction="left">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate MERN stack developer currently pursuing my studies at 
                Sambhram Institute of Technology in Bangalore. With a strong foundation 
                in modern web technologies, I love creating intuitive and efficient 
                digital experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in web development started with curiosity and has evolved 
                into a deep passion for crafting clean, scalable applications. I'm 
                particularly interested in blockchain technology and its applications 
                in modern web development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                fellow developers in the community.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn direction="right">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;