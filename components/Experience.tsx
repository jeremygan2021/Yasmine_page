'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaChartLine, 
  FaProjectDiagram, 
  FaLightbulb,
} from 'react-icons/fa'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { BsRobot } from 'react-icons/bs'

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  icon: React.ReactNode
  color: string
  technologies?: string[]
}

const experienceData: Experience[] = [
  {
    title: "研究助理",
    company: "专利技术功能测量项目",
    period: "2023",
    description: [
      "参与生成式AI项目开发",
      "进行数据收集与处理",
      "执行NLP分析任务"
    ],
    icon: <BsRobot />,
    color: "blue",
    technologies: ["AI", "NLP", "数据分析"]
  },
  {
    title: "尽职调查分析师",
    company: "Simon School Venture Fund",
    period: "2022",
    description: [
      "对数字商务领域初创企业进行评估",
      "分析医疗保健行业竞争态势",
      "参与投资决策流程"
    ],
    icon: <FaChartLine />,
    color: "purple",
    technologies: ["市场分析", "财务建模", "行业研究"]
  }
]

export default function Experience() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
      {/* 背景装饰 */}
      <motion.div
        className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-50 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <HiOutlineBriefcase className="text-3xl text-blue-600" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800">工作经验</h2>
        </div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* 时间线 */}
              {index < experienceData.length - 1 && (
                <motion.div
                  className="absolute left-6 top-20 w-0.5 h-24 bg-gray-200"
                  initial={{ height: 0 }}
                  animate={{ height: 96 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              )}

              <div className="flex gap-6">
                {/* 图标 */}
                <motion.div
                  className={`p-4 rounded-xl bg-${exp.color}-50 shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className={`text-2xl text-${exp.color}-500`}>
                    {exp.icon}
                  </span>
                </motion.div>

                {/* 内容 */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <motion.span
                      className="text-gray-500 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 mb-3">{exp.company}</p>
                  
                  {/* 职责描述 */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <FaLightbulb className={`text-${exp.color}-400 shrink-0`} />
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* 技术标签 */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className={`px-3 py-1 bg-${exp.color}-50 text-${exp.color}-600 
                            rounded-full text-sm border border-${exp.color}-100`}
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 底部装饰 */}
      <motion.div
        className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-purple-50 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  )
} 