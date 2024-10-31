'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaPython, FaDatabase, FaChartLine, FaBrain, FaRobot } from 'react-icons/fa'
import { SiStreamlit, SiTableau, SiMysql, SiR } from 'react-icons/si'

interface DetailedProject {
  id: number
  title: string
  subtitle: string
  period: string
  description: string[]
  technologies: string[]
  achievements: string[]
  icon: React.ReactNode
  color: {
    primary: string
    secondary: string
    accent: string
  }
  images?: string[]
}

const projects: DetailedProject[] = [
  {
    id: 1,
    title: "HELOC决策支持系统",
    subtitle: "信用风险预测与可视化平台",
    period: "2024.03 - 2024.05",
    description: [
      "开发决策支持系统(DSS)预测HELOC申请人信用风险",
      "使用Python、Numpy和Scikit-learn构建预测模型",
      "应用决策树、随机森林、SVM等机器学习技术",
      "使用Streamlit构建交互式可视化界面",
      "通过F1分数和Type II错误评估模型性能"
    ],
    technologies: ["Python", "机器学习", "Streamlit", "数据可视化"],
    achievements: [
      "成功构建了准确率超过85%的预测模型",
      "开发了直观的用户界面，提升了银行工作效率",
      "实现了实时风险评估功能"
    ],
    icon: <FaPython />,
    color: {
      primary: "from-blue-900 to-indigo-900",
      secondary: "from-yellow-300/30 to-orange-400/30",
      accent: "yellow-300"
    }
  },
  {
    id: 2,
    title: "PMG生产优化系统",
    subtitle: "线性规划与成本优化",
    period: "2024.02 - 2024.03",
    description: [
      "使用Excel和Python开发线性优化模型",
      "优化Q1生产计划，最小化生产成本",
      "最大化机器利用率",
      "进行敏感性分析，识别成本节约机会"
    ],
    technologies: ["Python", "线性规划", "Excel", "运筹学"],
    achievements: [
      "显著降低了生产成本",
      "提高了资源利用效率",
      "为管理层提供了数据支持的决策建议"
    ],
    icon: <FaChartLine />,
    color: {
      primary: "from-purple-900 to-blue-900",
      secondary: "from-blue-300/30 to-purple-400/30",
      accent: "blue-300"
    }
  },
  {
    id: 3,
    title: "教育数据分析平台",
    subtitle: "学生成绩分析与教育策略优化",
    period: "2023.10 - 2023.12",
    description: [
      "使用Tableau和R分析学生成绩趋势",
      "进行线性回归分析评估课程类型影响",
      "使用Elbow方法优化市场细分",
      "为教育策略提供数据支持"
    ],
    technologies: ["R", "Tableau", "统计分析", "数据可视化"],
    achievements: [
      "发现了关键的学习趋势",
      "提供了可行的教育策略建议",
      "优化了课程设置"
    ],
    icon: <SiR />,
    color: {
      primary: "from-indigo-900 to-purple-900",
      secondary: "from-purple-300/30 to-blue-400/30",
      accent: "purple-300"
    }
  },
  {
    id: 4,
    title: "业务运营分析系统",
    subtitle: "MySQL数据分析与可视化",
    period: "2023.08 - 2023.09",
    description: [
      "执行ETL流程整合六个数据表",
      "开发SQL查询识别最畅销产品",
      "分析消费者偏好",
      "使用Tableau可视化销售表现"
    ],
    technologies: ["MySQL", "Tableau", "ETL", "数据分析"],
    achievements: [
      "优化了采购策略",
      "提升了整体业务表现",
      "建立了高效的数据分析流程"
    ],
    icon: <SiMysql />,
    color: {
      primary: "from-cyan-900 to-blue-900",
      secondary: "from-cyan-300/30 to-blue-400/30",
      accent: "cyan-300"
    }
  }
]

// 创建星空效果组件
const StarryNight = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 梵高式旋转云层 */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-[600px] h-[600px] bg-gradient-to-r 
            from-yellow-300/10 to-blue-500/10 rounded-full filter blur-3xl`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* 闪烁的星星 */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-yellow-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function VanGoghProjects() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null)

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* 返回按钮 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full 
              text-white border border-white/20 hover:bg-white/20 transition-all
              flex items-center gap-2 shadow-lg"
          >
            <span>←</span>
            <span>返回首页</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* 星空背景 */}
      <StarryNight />

      {/* 内容区域 */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          项目经验
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-pointer"
            >
              {/* 项目卡片 */}
              <motion.div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color.primary}
                  border border-white/10 backdrop-blur-lg p-6 h-full
                  transform transition-all duration-300 group-hover:scale-[1.02]`}
                whileHover={{ y: -5 }}
              >
                {/* 梵高式漩涡背景 */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color.secondary} opacity-20`}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{project.icon}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{project.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tool, i) => (
                      <motion.span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm text-${project.color.accent}
                          bg-white/10 border border-white/20`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* 装饰性星星 */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-${project.color.accent} rounded-full`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 项目详情弹窗 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={`relative w-full max-w-2xl rounded-2xl bg-gradient-to-br 
                ${selectedProject.color.primary} p-8 border border-white/20 backdrop-blur-xl`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              {/* 弹窗内容 */}
              <div className="space-y-6">
                {/* 标题和图标 */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedProject.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300">{selectedProject.subtitle}</p>
                  </div>
                </div>

                {/* 时间段 */}
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full">
                  <p className="text-gray-200">{selectedProject.period}</p>
                </div>

                {/* 项目描述 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">项目详情</h4>
                  <ul className="space-y-2">
                    {selectedProject.description.map((desc, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-white mt-1">•</span>
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 成就列表 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">主要成就</h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-white mt-1">✓</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm text-${selectedProject.color.accent}
                        bg-white/10 border border-white/20`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* 关闭按钮 */}
                <motion.button
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <span className="text-white text-xl">×</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 