import { Heart, Star, Sparkles, GraduationCap, Camera, Music, Coffee, Flower2, Mail, Instagram, MessageSquare, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Personal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>🌸</div>
          <div className="absolute top-20 right-20 text-5xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>✨</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>🎀</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.3s' }}>🌷</div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full border-2 border-pink-300">
            <Sparkles className="w-5 h-5 text-pink-600" />
            <span className="text-pink-700 font-medium">欢迎来到我的世界 ✨</span>
          </div>
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-48 h-48 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-8xl shadow-2xl">
              👧
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-4">
            刘东娜
          </h1>
          <p className="text-2xl text-pink-600 mb-2 font-medium">
            🌸 广东科学技术职业学院 🌸
          </p>
          <p className="text-xl text-purple-600 mb-4 font-medium">
            💼 商务数据分析与应用 💼
          </p>
          <p className="text-lg text-rose-500 max-w-2xl mx-auto leading-relaxed">
            热爱生活，喜欢探索美好事物的阳光女孩 ✨
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
              关于我
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            </h2>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl">
                  <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-700 mb-1">学生身份</h3>
                    <p className="text-rose-600">就读于广东科学技术职业学院</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🌟
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-700 mb-1">性格特点</h3>
                    <p className="text-pink-600">活泼开朗、温柔善良、热爱学习</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl">
                  <div className="w-12 h-12 bg-rose-400 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    💖
                  </div>
                  <div>
                    <h3 className="font-bold text-rose-700 mb-1">生活态度</h3>
                    <p className="text-orange-600">积极向上，用心感受每一天的美好</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-2xl">
                  <div className="w-12 h-12 bg-fuchsia-400 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🎨
                  </div>
                  <div>
                    <h3 className="font-bold text-fuchsia-700 mb-1">兴趣爱好</h3>
                    <p className="text-pink-600">摄影、音乐、美食、旅行</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-3">
              <Flower2 className="w-8 h-8 text-rose-500" />
              我的爱好
              <Flower2 className="w-8 h-8 text-rose-500" />
            </h2>
            <p className="text-rose-500 text-lg">生活中的小确幸 🌸</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Camera className="w-8 h-8" />, title: "摄影", desc: "用镜头记录美好瞬间", emoji: "📷", color: "from-pink-400 to-rose-500" },
              { icon: <Music className="w-8 h-8" />, title: "音乐", desc: "旋律让生活更动听", emoji: "🎵", color: "from-purple-400 to-pink-500" },
              { icon: <Coffee className="w-8 h-8" />, title: "美食", desc: "品尝各种美味佳肴", emoji: "🍰", color: "from-amber-400 to-pink-500" },
              { icon: <Star className="w-8 h-8" />, title: "旅行", desc: "探索世界的精彩", emoji: "✈️", color: "from-cyan-400 to-purple-500" }
            ].map((hobby, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-pink-100 hover:border-pink-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${hobby.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {hobby.icon}
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">{hobby.emoji}</div>
                  <h3 className="text-xl font-bold text-pink-700 mb-2">{hobby.title}</h3>
                  <p className="text-rose-500">{hobby.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Python Course Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-3">
              <Code className="w-8 h-8 text-blue-500" />
              Python 基础课程
              <Code className="w-8 h-8 text-blue-500" />
            </h2>
            <p className="text-rose-500 text-lg">从零开始学习 Python 编程 🌸</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <div className="text-center">
              <div className="text-6xl mb-6">🐍</div>
              <p className="text-lg text-blue-700 mb-8 max-w-2xl mx-auto">
                这是一个专为初学者设计的 Python 基础课程，包含 6 个章节，从入门到面向对象编程，循序渐进，让你轻松掌握 Python 编程技能！
              </p>
              <Link
                to="/python-course"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                开始学习 Python
                <Sparkles className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-purple-500" />
              联系我
              <Sparkles className="w-8 h-8 text-purple-500" />
            </h2>
            <p className="text-purple-500 text-lg">期待与你成为朋友 ✨</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-xl border border-pink-200">
            <div className="grid md:grid-cols-3 gap-6">
              <a href="mailto:example@email.com" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-pink-700 mb-1">邮箱</h3>
                <p className="text-rose-500 text-sm">点击发邮件</p>
              </a>
              <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-green-700 mb-1">微信</h3>
                <p className="text-emerald-500 text-sm">扫码添加</p>
              </div>
              <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-pink-700 mb-1">小红书</h3>
                <p className="text-purple-500 text-sm">关注我呀</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            {['🌸', '💖', '✨', '🌷', '🎀'].map((emoji, i) => (
              <span key={i} className="text-3xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                {emoji}
              </span>
            ))}
          </div>
          <p className="text-pink-700 font-medium mb-2">
            Made with 💖 by 刘东娜
          </p>
          <p className="text-rose-600">
            © 2024 愿每一天都充满阳光与美好 ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
