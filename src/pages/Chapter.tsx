import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Home, Code, Menu, X } from 'lucide-react';
import { courseData } from '@/data/courseData';
import { useState } from 'react';

export default function Chapter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chapter = courseData.chapters.find(c => c.id === id);
  const currentIndex = courseData.chapters.findIndex(c => c.id === id);
  const prevChapter = currentIndex > 0 ? courseData.chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < courseData.chapters.length - 1 ? courseData.chapters[currentIndex + 1] : null;

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">章节未找到</h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-slate-700 mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-slate-600 ml-4 mb-2 list-disc">
            {line.slice(2)}
          </li>
        );
      } else if (line.trim()) {
        return (
          <p key={index} className="text-slate-600 mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              <Code className="w-8 h-8 text-blue-600" />
              Python 学习站
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                首页
              </Link>
              <Link to={`/chapter/${courseData.chapters[0].id}`} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                开始学习
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                  课程章节
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg py-3 border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {courseData.chapters.map((chapter, index) => (
                    <Link
                      key={chapter.id}
                      to={`/chapter/${chapter.id}`}
                      className={`block px-6 py-3 ${currentIndex === index ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors`}
                    >
                      {index + 1}. {chapter.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-3">
              <Link
                to="/"
                className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                to={`/chapter/${courseData.chapters[0].id}`}
                className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                开始学习
              </Link>
              <div className="space-y-1">
                <div className="px-4 py-2 text-slate-500 font-medium">课程章节</div>
                {courseData.chapters.map((chapter, index) => (
                  <Link
                    key={chapter.id}
                    to={`/chapter/${chapter.id}`}
                    className={`block px-6 py-2 ${currentIndex === index ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'} rounded-lg transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {index + 1}. {chapter.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Chapter Title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
            <Link to="/" className="hover:underline">首页</Link>
            <ChevronRight className="w-4 h-4" />
            <span>课程章节</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-600">{chapter.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {chapter.title}
          </h1>
          <p className="text-xl text-slate-600">{chapter.description}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <div className="prose prose-slate max-w-none">
            {renderContent(chapter.content)}
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="flex items-center gap-2 px-6 py-4 bg-slate-800 border-b border-slate-700">
            <Code className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-300 font-medium">代码示例</span>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="text-sm text-slate-100 font-mono">
              {chapter.codeExample}
            </code>
          </pre>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          {prevChapter ? (
            <Link
              to={`/chapter/${prevChapter.id}`}
              className="flex-1 flex items-center gap-3 px-6 py-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <span className="text-sm text-slate-500">上一章</span>
                <p className="font-semibold text-slate-800">{prevChapter.title}</p>
              </div>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
          {nextChapter ? (
            <Link
              to={`/chapter/${nextChapter.id}`}
              className="flex-1 flex items-center justify-end gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-right">
                <span className="text-sm text-blue-100">下一章</span>
                <p className="font-semibold">{nextChapter.title}</p>
              </div>
              <ChevronRight className="w-6 h-6" />
            </Link>
          ) : (
            <div className="flex-1 flex items-center justify-end">
              <Link
                to="/"
                className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Home className="w-5 h-5" />
                完成学习！
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link
              to="/"
              className="flex items-center gap-3 text-2xl font-bold text-white mb-4 md:mb-0"
            >
              <Code className="w-8 h-8 text-blue-400" />
              Python 学习站
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                首页
              </Link>
              <Link to={`/chapter/${courseData.chapters[0].id}`} className="text-slate-400 hover:text-white transition-colors">
                开始学习
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Python 学习站. 用心打造每一节课程。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
