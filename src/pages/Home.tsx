import { BookOpen, Code, GraduationCap, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courseData } from '@/data/courseData';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '系统课程',
      description: '从基础到进阶，循序渐进的学习路径'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '实战示例',
      description: '丰富的代码示例，边学边练'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: '轻松入门',
      description: '专为初学者设计，零基础也能学会'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-100 text-sm font-medium">零基础友好</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            学习 <span className="text-yellow-400">Python</span> 编程
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            从零开始，系统学习 Python 编程，掌握核心概念和实用技巧，开启你的编程之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/chapter/${courseData.chapters[0].id}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              开始学习
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              为什么选择这门课程
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              精心设计的课程内容，让学习 Python 变得简单有趣
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              课程章节
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              循序渐进，从基础到进阶，共 {courseData.chapters.length} 个章节
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {courseData.chapters.map((chapter, index) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.id}`}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-slate-600">{chapter.description}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Python 基础课程. 用心打造每一节课程。
          </p>
        </div>
      </footer>
    </div>
  );
}
