import { Course } from '@/types/course';

export const courseData: Course = {
  id: 'python-basics',
  title: 'Python 基础课程',
  description: '从零开始学习 Python 编程，掌握核心概念和实用技巧',
  chapters: [
    {
      id: 'chapter-1',
      title: 'Python 入门',
      description: '了解 Python 语言，安装开发环境，编写第一个程序',
      content: `
## 1.1 什么是 Python？

Python 是一种高级、解释型、通用的编程语言。它的设计哲学强调代码的可读性，使用显著的缩进。

### Python 的特点：
- 简单易学
- 免费开源
- 跨平台
- 丰富的库
- 面向对象

## 1.2 安装 Python

访问 [python.org](https://www.python.org) 下载并安装最新版本的 Python。

## 1.3 第一个程序

让我们编写经典的 "Hello, World!" 程序。
      `,
      codeExample: `# Hello, World!
print("Hello, World!")

# 变量和打印
name = "Python"
print(f"欢迎学习 {name}!")

# 简单计算
a = 10
b = 20
print(f"{a} + {b} = {a + b}")`,
      order: 1
    },
    {
      id: 'chapter-2',
      title: '变量与数据类型',
      description: '学习 Python 的基本数据类型和变量操作',
      content: `
## 2.1 变量

在 Python 中，变量不需要声明类型，直接赋值即可。

## 2.2 基本数据类型

- **整数 (int)**: 1, 42, -10
- **浮点数 (float)**: 3.14, 2.0, -0.5
- **字符串 (str)**: "Hello", 'World'
- **布尔值 (bool)**: True, False
- **列表 (list)**: [1, 2, 3]
- **字典 (dict)**: {"name": "Python", "version": 3.9}

## 2.3 类型转换

使用内置函数进行类型转换：int(), float(), str() 等。
      `,
      codeExample: `# 整数
age = 25
print("年龄:", age)

# 浮点数
pi = 3.14159
print("圆周率:", pi)

# 字符串
name = "小明"
greeting = f"你好, {name}!"
print(greeting)

# 布尔值
is_student = True
print("是学生吗?", is_student)

# 列表
numbers = [1, 2, 3, 4, 5]
print("列表:", numbers)
print("第一个元素:", numbers[0])

# 字典
person = {
    "name": "小红",
    "age": 20,
    "city": "北京"
}
print("字典:", person)
print("姓名:", person["name"])`,
      order: 2
    },
    {
      id: 'chapter-3',
      title: '控制流程',
      description: '学习条件语句和循环结构',
      content: `
## 3.1 条件语句

使用 if、elif 和 else 进行条件判断。

## 3.2 循环

- **for 循环**: 遍历序列
- **while 循环**: 条件满足时重复执行

## 3.3 循环控制

- break: 跳出循环
- continue: 跳过本次循环
- pass: 空语句
      `,
      codeExample: `# if 语句
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")

# for 循环 - 遍历列表
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print("水果:", fruit)

# for 循环 - range
print("1到5:")
for i in range(1, 6):
    print(i)

# while 循环
count = 1
print("倒计时:")
while count <= 5:
    print(count)
    count += 1
print("发射!")

# break 和 continue
print("找偶数:")
for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(i)
    if i >= 8:
        break`,
      order: 3
    },
    {
      id: 'chapter-4',
      title: '函数',
      description: '学习如何定义和使用函数',
      content: `
## 4.1 定义函数

使用 def 关键字定义函数。

## 4.2 参数和返回值

函数可以接受参数并返回值。

## 4.3 默认参数和可变参数

- 默认参数: 提供默认值
- *args: 可变位置参数
- **kwargs: 可变关键字参数

## 4.4 作用域

了解局部变量和全局变量的区别。
      `,
      codeExample: `# 基本函数
def greet(name):
    return f"你好, {name}!"

print(greet("小明"))

# 带默认参数的函数
def greet(name, greeting="你好"):
    return f"{greeting}, {name}!"

print(greet("小红"))
print(greet("小华", "早上好"))

# 返回多个值
def calculate(a, b):
    return a + b, a - b, a * b, a / b

add, sub, mul, div = calculate(10, 5)
print(f"加: {add}, 减: {sub}, 乘: {mul}, 除: {div}")

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

print_info(name="小明", age=25, city="北京")`,
      order: 4
    },
    {
      id: 'chapter-5',
      title: '列表与字典',
      description: '深入学习 Python 中最常用的数据结构',
      content: `
## 5.1 列表操作

列表是有序的可变序列，支持各种操作。

## 5.2 列表推导式

一种简洁的创建列表的方式。

## 5.3 字典操作

字典是键值对的无序集合。

## 5.4 字典方法

keys(), values(), items() 等常用方法。
      `,
      codeExample: `# 列表操作
numbers = [1, 2, 3, 4, 5]
print("原列表:", numbers)

# 添加元素
numbers.append(6)
print("添加后:", numbers)

# 插入元素
numbers.insert(0, 0)
print("插入后:", numbers)

# 删除元素
numbers.remove(3)
print("删除后:", numbers)

# 切片
print("前3个:", numbers[:3])
print("后2个:", numbers[-2:])

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

# 访问值
print("姓名:", student["name"])
print("年龄:", student.get("age"))

# 添加键值对
student["grade"] = "大二"
print("添加后:", student)

# 遍历字典
print("键:", list(student.keys()))
print("值:", list(student.values()))
print("键值对:")
for key, value in student.items():
    print(f"  {key}: {value}")`,
      order: 5
    },
    {
      id: 'chapter-6',
      title: '面向对象编程',
      description: '学习类和对象的基本概念',
      content: `
## 6.1 类和对象

类是对象的蓝图，对象是类的实例。

## 6.2 定义类

使用 class 关键字定义类。

## 6.3 __init__ 方法

构造函数，用于初始化对象属性。

## 6.4 继承

子类可以继承父类的属性和方法。
      `,
      codeExample: `# 定义类
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
    
    def circumference(self):
        return 2 * Circle.pi * self.radius

circle = Circle(5)
print(f"半径: {circle.radius}")
print(f"面积: {circle.area():.2f}")
print(f"周长: {circle.circumference():.2f}")`,
      order: 6
    }
  ]
};
