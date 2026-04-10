import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Home, Code } from 'lucide-react';
import { courseData } from '@/data/courseData';

export default function Chapter() {
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
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回首页</span>
            </Link>
            <div className="text-center">
              <span className="text-sm text-slate-500">第 {currentIndex + 1} 章 / 共 {courseData.chapters.length} 章</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Chapter Title */}
        <div className="mb-12">
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
      <footer className="py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">
            © 2024 Python 基础课程. 用心打造每一节课程。
          </p>
        </div>
      </footer>
    </div>
  );
}
