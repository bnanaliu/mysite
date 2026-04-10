import { Course } from '@/types/course';

export const courseData: Course = {
  id: 'python-basics',
  title: 'Python 基础编程素养',
  description: '专注于 Python 基础编程素养，包括基础语法、数据结构、函数与模块、面向对象编程、文件操作与异常处理',
  chapters: [
    {
      id: 'chapter-1',
      title: 'Python 基础语法',
      description: '学习 Python 的基本语法规则和编程基础',
      content: `
## 1.1 Python 简介

Python 是一种高级、解释型、通用的编程语言，以其简洁的语法和强大的生态系统而闻名。

### 主要特点：
- 简单易学，语法清晰
- 免费开源
- 跨平台兼容性
- 丰富的标准库
- 面向对象编程支持

## 1.2 安装与环境配置

- 访问 [Python官网](https://www.python.org) 下载最新版本
- 安装过程中勾选 "Add Python to PATH"
- 验证安装：在命令行运行 `python --version`

## 1.3 基本语法规则

- **缩进**：使用空格或制表符进行代码缩进（推荐4个空格）
- **注释**：使用 `#` 进行单行注释
- **变量**：不需要声明类型，直接赋值
- **语句结束**：不需要分号，换行即表示语句结束

## 1.4 基本输入输出

- `print()`：输出内容到控制台
- `input()`：从控制台获取用户输入
      `,
      codeExample: `# 基本输出
print("Hello, Python!")
print("Python", "is", "awesome")

# 变量赋值
name = "Python"
age = 30

# 格式化输出
print(f"{name} 已经 {age} 岁了")
print("{} 已经 {} 岁了".format(name, age))

# 基本输入
user_name = input("请输入你的名字：")
print(f"你好，{user_name}！")

# 数字类型
x = 10          # 整数
pi = 3.14       # 浮点数
is_valid = True # 布尔值

print(type(x), type(pi), type(is_valid))`,
      order: 1
    },
    {
      id: 'chapter-2',
      title: '数据结构',
      description: '学习 Python 中常用的数据结构及其操作',
      content: `
## 2.1 序列类型

### 列表 (List)
- 有序、可变的元素集合
- 支持索引和切片操作
- 常用方法：append(), insert(), remove(), pop(), sort()

### 元组 (Tuple)
- 有序、不可变的元素集合
- 使用圆括号 () 定义
- 比列表更节省内存

### 字符串 (String)
- 不可变的字符序列
- 支持索引和切片
- 丰富的内置方法

## 2.2 映射类型

### 字典 (Dictionary)
- 键值对的无序集合
- 键必须是不可变类型
- 常用方法：keys(), values(), items(), get()

## 2.3 集合类型

### 集合 (Set)
- 无序、唯一元素的集合
- 支持集合运算：并集、交集、差集
- 常用方法：add(), remove(), union(), intersection()

## 2.4 列表推导式

一种简洁创建列表的方式，提高代码可读性和效率。
      `,
      codeExample: `# 列表操作
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
print("原列表:", fruits)

# 添加元素
fruits.append("草莓")
print("添加后:", fruits)

# 切片
print("前两个:", fruits[:2])
print("最后两个:", fruits[-2:])

# 列表推导式
squares = [x * x for x in range(1, 6)]
print("平方数:", squares)

evens = [x for x in range(1, 11) if x % 2 == 0]
print("偶数:", evens)

# 字典操作
student = {
    "name": "小明",
    "age": 20,
    "major": "计算机科学"
}
print("学生信息:", student)
print("姓名:", student["name"])
print("年龄:", student.get("age"))

# 集合操作
numbers = {1, 2, 3, 4, 5}
even_numbers = {2, 4, 6, 8}

print("并集:", numbers | even_numbers)
print("交集:", numbers & even_numbers)
print("差集:", numbers - even_numbers)`,
      order: 2
    },
    {
      id: 'chapter-3',
      title: '函数与模块',
      description: '学习如何定义和使用函数，以及模块的导入和使用',
      content: `
## 3.1 函数定义与调用

- 使用 `def` 关键字定义函数
- 函数可以接受参数和返回值
- 函数提高代码复用性和可维护性

## 3.2 函数参数类型

- **位置参数**：按顺序传递的参数
- **默认参数**：带有默认值的参数
- **可变参数**：`*args` 接收任意数量的位置参数
- **关键字参数**：`**kwargs` 接收任意数量的关键字参数

## 3.3 函数作用域

- **局部变量**：函数内部定义的变量
- **全局变量**：函数外部定义的变量
- **nonlocal 关键字**：在嵌套函数中修改外部函数的变量

## 3.4 模块与包

- **模块**：一个 .py 文件，包含函数、类和变量
- **包**：包含多个模块的目录，必须有 __init__.py 文件
- **导入方式**：import module, from module import function, from module import *

## 3.5 标准库使用

Python 标准库提供了丰富的功能模块，如：
- `math`：数学运算
- `random`：随机数生成
- `datetime`：日期时间处理
- `os`：操作系统接口
      `,
      codeExample: `# 基本函数定义
def greet(name):
    """问候函数"""
    return f"你好, {name}!"

print(greet("小明"))

# 默认参数
def greet(name, greeting="你好"):
    return f"{greeting}, {name}!"

print(greet("小红"))
print(greet("小华", "早上好"))

# 可变参数
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print("总和:", sum_all(1, 2, 3, 4, 5))

# 关键字参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="小明", age=20, city="北京")

# 模块导入
import math
print("π:", math.pi)
print("平方根:", math.sqrt(16))

import random
print("随机数:", random.randint(1, 10))

from datetime import datetime
print("当前时间:", datetime.now())`,
      order: 3
    },
    {
      id: 'chapter-4',
      title: '面向对象编程',
      description: '学习类和对象的概念，以及面向对象编程的基本原理',
      content: `
## 4.1 类与对象

- **类**：对象的蓝图，定义了对象的属性和方法
- **对象**：类的实例，具有类定义的属性和方法
- **属性**：对象的特征
- **方法**：对象的行为

## 4.2 类的定义与使用

- 使用 `class` 关键字定义类
- `__init__` 方法：构造函数，初始化对象属性
- `self` 参数：指向对象自身的引用

## 4.3 继承

- 子类继承父类的属性和方法
- 使用 `super()` 调用父类的方法
- 可以重写父类的方法

## 4.4 封装

- 将数据和方法封装在类中
- 控制属性的访问权限
- 使用下划线前缀表示私有属性

## 4.5 多态

- 不同类的对象可以使用相同的方法名
- 方法的行为根据对象的类型而不同
      `,
      codeExample: `# 基本类定义
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我叫{self.name}，今年{self.age}岁"

# 创建对象
person1 = Person("小明", 25)
person2 = Person("小红", 20)

print(person1.introduce())
print(person2.introduce())

# 继承
class Student(Person):
    def __init__(self, name, age, student_id, major):
        super().__init__(name, age)
        self.student_id = student_id
        self.major = major
    
    def study(self):
        return f"{self.name}正在学习{self.major}"
    
    def introduce(self):
        base = super().introduce()
        return f"{base}，学号{self.student_id}，专业{self.major}"

# 创建学生对象
student = Student("小华", 22, "2023001", "计算机科学")
print(student.introduce())
print(student.study())

# 类属性和实例属性
class Circle:
    # 类属性
    pi = 3.14159
    
    def __init__(self, radius):
        # 实例属性
        self.radius = radius
    
    def area(self):
        return Circle.pi * self.radius * self.radius

circle = Circle(5)
print(f"半径: {circle.radius}")
print(f"面积: {circle.area():.2f}")`,
      order: 4
    },
    {
      id: 'chapter-5',
      title: '文件操作与异常处理',
      description: '学习如何进行文件读写操作，以及如何处理程序运行中的异常',
      content: `
## 5.1 文件操作

### 文件打开与关闭
- 使用 `open()` 函数打开文件
- 模式：'r'（读）、'w'（写）、'a'（追加）、'b'（二进制）
- 使用 `with` 语句自动关闭文件

### 文件读取
- `read()`：读取整个文件
- `readline()`：读取一行
- `readlines()`：读取所有行到列表

### 文件写入
- `write()`：写入字符串
- `writelines()`：写入字符串列表

## 5.2 异常处理

### 异常类型
- `SyntaxError`：语法错误
- `NameError`：变量未定义
- `TypeError`：类型错误
- `ValueError`：值错误
- `FileNotFoundError`：文件未找到

### 异常处理机制
- `try-except`：捕获并处理异常
- `else`：无异常时执行
- `finally`：无论是否有异常都执行
- `raise`：手动抛出异常

## 5.3 上下文管理器

- `with` 语句：自动管理资源
- 适用于文件、网络连接等需要关闭的资源
      `,
      codeExample: `# 文件写入
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!\n")
    f.write("这是一个测试文件。\n")
    f.writelines(["第一行\n", "第二行\n", "第三行\n"])

print("文件写入完成")

# 文件读取
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print("文件内容:")
    print(content)

# 逐行读取
print("\n逐行读取:")
with open("example.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())

# 异常处理
try:
    # 尝试打开不存在的文件
    with open("nonexistent.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("错误：文件未找到")
except Exception as e:
    print(f"错误：{e}")
else:
    print("文件读取成功")
finally:
    print("操作完成")

# 手动抛出异常
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为零")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(f"错误：{e}")
else:
    print(f"结果：{result}")`,
      order: 5
    }
  ]
};
