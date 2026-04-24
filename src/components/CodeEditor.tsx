import { useState, useRef, useEffect } from 'react';
import { Play, ChevronDown, ChevronUp, Copy, Check, X, RefreshCw } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeEditor({ code, language = 'python', title = '代码示例' }: CodeEditorProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [userCode, setUserCode] = useState<string>(code);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('运行中...');
    
    // 模拟代码运行（实际项目中可以使用 WebAssembly 或后端 API）
    setTimeout(() => {
      // 简单的代码执行模拟
      let result = '';
      try {
        // 模拟 Python 代码执行
        if (userCode.includes('print(')) {
          // 提取 print 语句的内容
          const printMatches = userCode.match(/print\((.*?)\)/g);
          if (printMatches) {
            printMatches.forEach(match => {
              let content = match.replace('print(', '').replace(')', '');
              // 移除引号
              content = content.replace(/['"`]/g, '');
              result += content + '\n';
            });
          }
        }
        
        // 模拟计算
        if (userCode.includes('sum(')) {
          result += '计算结果: 15\n';
        }
        
        if (userCode.includes('DataFrame')) {
          result += 'DataFrame 输出:\n   name  score\n0  小明     85\n1  小红     92\n';
        }
        
        if (result === '') {
          result = '代码执行成功！\n';
        }
      } catch (error) {
        result = `错误: ${error instanceof Error ? error.message : '未知错误'}\n`;
      }
      
      setOutput(result);
      setIsRunning(false);
    }, 1000);
  };

  const handleResetCode = () => {
    setUserCode(code);
    setOutput('');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(userCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-slate-300 font-medium">{title}</span>
          <span className="px-2 py-1 bg-slate-700 text-xs text-slate-300 rounded">{language}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyCode}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            title="复制代码"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isRunning 
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>运行</span>
          </button>
          <button
            onClick={handleResetCode}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            title="重置代码"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleToggleExpand}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            title={isExpanded ? '折叠' : '展开'}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Code */}
      {isExpanded && (
        <>
          <div className="p-6 overflow-x-auto max-h-96">
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full h-full bg-transparent text-sm text-slate-100 font-mono whitespace-pre-wrap resize-none focus:outline-none"
              spellCheck={false}
            />
          </div>

          {/* Output */}
          <div className="border-t border-slate-700">
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-800 border-b border-slate-700">
              <span className="text-slate-300 font-medium">输出</span>
            </div>
            <pre className="p-6 overflow-x-auto max-h-48 bg-slate-950">
              <code className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                {output || '运行代码查看输出...'}
              </code>
            </pre>
          </div>
        </>
      )}
    </div>
  );
}
