import { Course } from '@/types/course';

export const courseData: Course = {
  id: 'python-basics',
  title: 'Python 基础编程素养',
  description: '专为数据分析与应用专业学生设计，构建适应 AI 时代的 Python 基础技能体系，为专业数据分析工作打下坚实基础',
  chapters: [
    {
      id: 'chapter-1',
      title: '核心语法与编程思维',
      description: '构建坚实的逻辑基础，理解计算机思考方式，为与 AI 协作编程做准备',
      content: `
## 1.1 基础语法与数据结构

- **变量与数据类型**：整数、浮点数、字符串、布尔值
- **数据结构**：列表、元组、字典、集合
- **运算符**：算术、比较、逻辑运算符
- **控制流**：if-elif-else 条件判断，for/while 循环
- **重点**：理解不同数据结构的应用场景，为高效处理数据打基础

## 1.2 函数与模块化编程

- **函数定义与调用**：参数传递、返回值
- **函数参数类型**：位置参数、默认参数、可变参数(*args)、关键字参数(**kwargs)
- **函数作用域**：局部变量、全局变量
- **模块化**：创建、导入和使用模块与包
- **重点**：将代码组织成函数和模块，提高代码可维护性

## 1.3 面向对象编程基础

- **类与对象**：定义类、创建对象
- **封装**：属性和方法
- **继承**：子类继承父类
- **多态**：方法重写
- **重点**：理解 OOP 思想，为使用 Pandas 等库做准备

## 1.4 文件操作与异常处理

- **文件读写**：文本文件、CSV、JSON
- **异常处理**：try-except 捕获和处理异常
- **上下文管理器**：with 语句自动管理资源
- **重点**：编写健壮的脚本，优雅处理错误
      `,
      codeExample: `# 基础数据结构示例
# 列表 - 有序可变序列
fruits = ["苹果", "香蕉", "橙子"]
fruits.append("草莓")
print("列表:", fruits)

# 字典 - 键值对集合
student = {
    "name": "小明",
    "age": 20,
    "major": "数据分析"
}
print("字典:", student)

# 函数定义
def calculate_statistics(data):
    """计算数据的统计信息"""
    if not data:
        return {"error": "数据为空"}
    
    total = sum(data)
    average = total / len(data)
    maximum = max(data)
    minimum = min(data)
    
    return {
        "total": total,
        "average": average,
        "max": maximum,
        "min": minimum
    }

# 测试函数
scores = [85, 92, 78, 90, 88]
print("统计结果:", calculate_statistics(scores))

# 面向对象示例
class DataAnalyzer:
    def __init__(self, data):
        self.data = data
    
    def analyze(self):
        return calculate_statistics(self.data)

# 使用对象
analyzer = DataAnalyzer(scores)
print("对象分析结果:", analyzer.analyze())

# 文件操作与异常处理
try:
    # 写入数据
    with open("data.txt", "w", encoding="utf-8") as f:
        f.write("姓名,分数\n")
        f.write("小明,85\n")
        f.write("小红,92\n")
    
    # 读取数据
    with open("data.txt", "r", encoding="utf-8") as f:
        content = f.read()
        print("文件内容:\n", content)
except Exception as e:
    print(f"错误: {e}")`,
      order: 1
    },
    {
      id: 'chapter-2',
      title: '数据处理"三剑客"',
      description: '直接赋能数据分析专业的核心库，是数据处理工作的"标准接口"',
      content: `
## 2.1 NumPy：数值计算基础

- **多维数组**：ndarray 对象
- **数组操作**：索引、切片、形状修改
- **数学运算**：向量化计算、广播
- **统计函数**：均值、标准差、最大值、最小值
- **重点**：理解向量化计算的效率优势

## 2.2 Pandas：数据分析利器

- **核心数据结构**：Series（一维）、DataFrame（二维）
- **数据读取**：CSV、Excel、JSON
- **数据清洗**：处理缺失值、重复值
- **数据操作**：筛选、排序、分组聚合、合并连接
- **重点**：熟练掌握 DataFrame 的各种操作

## 2.3 Matplotlib & Seaborn：数据可视化

- **Matplotlib 基础**：折线图、散点图、柱状图、直方图
- **Seaborn**：箱线图、热力图、小提琴图
- **图表美化**：标题、标签、图例、颜色
- **重点**：将分析结果直观呈现
      `,
      codeExample: `# NumPy 示例
import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])
print("NumPy 数组:", arr)
print("数组形状:", arr.shape)

# 向量化计算
arr_squared = arr ** 2
print("平方结果:", arr_squared)

# 统计计算
print("均值:", np.mean(arr))
print("标准差:", np.std(arr))

# Pandas 示例
import pandas as pd

# 创建 DataFrame
data = {
    'name': ['小明', '小红', '小华', '小丽'],
    'score': [85, 92, 78, 90],
    'major': ['数据分析', '计算机', '数据分析', '计算机']
}
df = pd.DataFrame(data)
print("\nPandas DataFrame:\n", df)

# 数据操作
print("\n按分数排序:\n", df.sort_values('score', ascending=False))
print("\n按专业分组统计:\n", df.groupby('major')['score'].mean())

# 数据可视化
import matplotlib.pyplot as plt
import seaborn as sns

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 柱状图
plt.figure(figsize=(10, 6))
sns.barplot(x='name', y='score', data=df)
plt.title('学生分数')
plt.tight_layout()
plt.savefig('score_bar.png')
print("\n柱状图已保存为 score_bar.png")

# 箱线图
plt.figure(figsize=(10, 6))
sns.boxplot(x='major', y='score', data=df)
plt.title('不同专业分数分布')
plt.tight_layout()
plt.savefig('score_boxplot.png')
print("箱线图已保存为 score_boxplot.png")`,
      order: 2
    },
    {
      id: 'chapter-3',
      title: '必要的进阶与衔接内容',
      description: '为未来拓展预留接口，帮助理解数据来源和系统交互',
      content: `
## 3.1 数据库基础操作

- **关系型数据库**：MySQL、SQLite
- **Python 连接数据库**：sqlalchemy、pymysql
- **基本 SQL 查询**：SELECT、WHERE、JOIN
- **数据存取**：从数据库读取数据到 DataFrame
- **重点**：实际工作中数据常存储在数据库中

## 3.2 基础正则表达式

- **正则表达式语法**：元字符、量词、分组
- **Python 中的正则**：re 模块
- **应用场景**：文本数据匹配和提取
- **重点**：数据清洗，处理非结构化文本数据

## 3.3 API 请求基础

- **HTTP 请求**：GET、POST
- **requests 库**：发送请求，处理响应
- **JSON 数据**：解析 API 返回的 JSON 数据
- **重点**：获取网络 API 提供的数据
      `,
      codeExample: `# 正则表达式示例
import re

# 提取邮箱
text = "联系邮箱: user@example.com, admin@test.org"
emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
print("提取的邮箱:", emails)

# 提取电话号码
phone_text = "电话: 13812345678, 010-87654321"
phones = re.findall(r'1[3-9]\d{9}|0\d{2,3}-?\d{7,8}', phone_text)
print("提取的电话:", phones)

# API 请求示例
import requests
import json

try:
    # 示例：获取 JSON placeholder 数据
    response = requests.get('https://jsonplaceholder.typicode.com/todos/1')
    if response.status_code == 200:
        data = response.json()
        print("\nAPI 响应数据:", json.dumps(data, indent=2, ensure_ascii=False))
    else:
        print(f"API 请求失败: {response.status_code}")
except Exception as e:
    print(f"错误: {e}")

# 数据库操作示例（需要安装相关库）
"""
import pandas as pd
from sqlalchemy import create_engine

# 创建 SQLite 数据库引擎
engine = create_engine('sqlite:///test.db')

# 创建 DataFrame
data = {
    'name': ['小明', '小红'],
    'age': [20, 21],
    'score': [85, 92]
}
df = pd.DataFrame(data)

# 写入数据库
df.to_sql('students', engine, index=False, if_exists='replace')
print("数据已写入数据库")

# 从数据库读取
read_df = pd.read_sql('SELECT * FROM students', engine)
print("\n从数据库读取的数据:\n", read_df)
"""`,
      order: 3
    },
    {
      id: 'chapter-4',
      title: '高效学习与实践方法',
      description: '适应 AI 时代的自学模式，提升学习效率',
      content: `
## 4.1 案例优先，实践为王

- **项目驱动学习 (PBL)**：通过具体项目驱动学习
- **小型数据集实践**：使用公开数据集进行练习
- **完整工作流**：从数据获取到分析再到可视化
- **重点**：不要孤立学习语法，通过项目巩固知识

## 4.2 模仿、修改与调试

- **阅读优秀代码**：学习他人的代码风格和思路
- **修改代码**：改变参数、逻辑，观察结果变化
- **调试技巧**：使用 IDE 调试工具或打印中间结果
- **重点**：检验和修正 AI 生成的代码

## 4.3 善用 AI 作为学习伙伴

- **AI 工具**：ChatGPT、Claude、Copilot
- **正确使用方式**：将 AI 视为问答伙伴和代码示例生成器
- **代码理解**：必须能读懂、理解并调试 AI 生成的代码
- **重点**：核心概念理解必须掌握在自己手中

## 4.4 建立正确的学习资源观

- **推荐教程**：廖雪峰的 Python 教程、Codecademy、实验楼
- **官方文档**：NumPy、Pandas、Matplotlib 官方文档
- **学习路径**：以"数据处理三剑客"为核心目标，反向驱动语法学习
- **重点**：选择体系完整、强调实践的教程
      `,
      codeExample: `# 实践案例：数据分析工作流示例
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 1. 数据获取（模拟数据）
data = {
    'product': ['A', 'B', 'C', 'D', 'E'],
    'sales': [120, 150, 90, 200, 180],
    'profit': [30, 45, 20, 50, 40],
    'region': ['华东', '华南', '华北', '西南', '东北']
}

# 2. 数据清洗与分析
df = pd.DataFrame(data)
print("原始数据:\n", df)

# 计算利润率
df['profit_rate'] = (df['profit'] / df['sales'] * 100).round(2)
print("\n添加利润率后:\n", df)

# 按销售额排序
top_sales = df.sort_values('sales', ascending=False)
print("\n销售额排序:\n", top_sales)

# 3. 数据可视化
plt.figure(figsize=(12, 8))

# 子图 1：销售额柱状图
plt.subplot(2, 2, 1)
sns.barplot(x='product', y='sales', data=df)
plt.title('产品销售额')

# 子图 2：利润率饼图
plt.subplot(2, 2, 2)
plt.pie(df['profit'], labels=df['product'], autopct='%1.1f%%')
plt.title('利润分布')

# 子图 3：销售额与利润率散点图
plt.subplot(2, 2, 3)
sns.scatterplot(x='sales', y='profit_rate', data=df, s=100)
plt.title('销售额与利润率关系')

# 子图 4：地区销售对比
plt.subplot(2, 2, 4)
sns.barplot(x='region', y='sales', data=df)
plt.title('地区销售额')

plt.tight_layout()
plt.savefig('sales_analysis.png')
print("\n分析图表已保存为 sales_analysis.png")

# 4. 总结分析结果
print("\n分析总结:")
print(f"总销售额: {df['sales'].sum()}")
print(f"总利润: {df['profit'].sum()}")
print(f"平均利润率: {df['profit_rate'].mean():.2f}%")
print(f"销售额最高的产品: {top_sales.iloc[0]['product']} ({top_sales.iloc[0]['sales']})")
print(f"利润率最高的产品: {df.loc[df['profit_rate'].idxmax()]['product']} ({df['profit_rate'].max():.2f}%)")`,
      order: 4
    }
  ]
};
