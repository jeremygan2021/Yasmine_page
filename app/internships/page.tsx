'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface Internship {
  id: number
  role: string
  company: string
  period: string
  description: string[]
  skills: string[]
  icon: string
}

const internships: Internship[] = [
  {
    id: 1,
    role: "研究助理",
    company: "专利技术功能测量项目",
    period: "2023",
    description: [
      "参与生成式AI项目开发",
      "进行数据收集与处理",
      "执行NLP分析任务"
    ],
    skills: ["AI", "数据分析", "NLP", "Python"],
    icon: "🔬"
  },
  {
    id: 2,
    role: "尽职调查分析师",
    company: "Simon School Venture Fund",
    period: "2022",
    description: [
      "对数字商务领域初创企业进行评估",
      "分析医疗保健行业竞争态势",
      "参与投资决策流程"
    ],
    skills: ["市场分析", "财务建模", "行业研究"],
    icon: "📊"
  },
  {
    id: 3,
    role: "咨询实习生",
    company: "艾明咨询",
    period: "2022",
    description: [
      "为顶级制药公司提供咨询服务",
      "开展市场调研项目",
      "制定市场进入策略"
    ],
    skills: ["战略咨询", "医药行业", "市场调研"],
    icon: "💼"
  },
  {
    id: 4,
    role: "商业洞察分析实习生",
    company: "喜马拉雅科技",
    period: "2021",
    description: [
      "实施数据驱动的营销策略",
      "提升用户参与度12%",
      "分析用户情绪和市场趋势"
    ],
    skills: ["数据分析", "用户研究", "营销策略"],
    icon: "📱"
  },
  {
    id: 5,
    role: "产品管理实习生",
    company: "上海映艺文化传播",
    period: "2021",
    description: [
      "进行SWOT分析",
      "使用BCG矩阵优化功能",
      "提升用户留存率"
    ],
    skills: ["产品管理", "用户体验", "数据分析"],
    icon: "🎯"
  }
]

export default function InternshipsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
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

      {/* 标题 */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center text-white pt-24 pb-16"
      >
        实习经历
      </motion.h1>

      {/* 时间轴 */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* 垂直线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" />

          {/* 实习经历卡片 */}
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'
              }`}
            >
              {/* 连接线 */}
              <div className={`absolute top-8 ${
                index % 2 === 0 ? 'right-0' : 'left-0'
              } w-1/2 h-1 bg-white/20`} />

              {/* 时间点 */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16
                  bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20
                  flex items-center justify-center text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                {internship.icon}
              </motion.div>

              {/* 内容卡片 */}
              <motion.div
                layoutId={`card-${internship.id}`}
                onClick={() => setSelectedId(internship.id)}
                onHoverStart={() => setHoveredId(internship.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`relative ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                } p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20
                  cursor-pointer transform transition-all duration-300`}
                style={{
                  transform: hoveredId === internship.id ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{internship.role}</h3>
                <h4 className="text-xl text-blue-300 mb-4">{internship.company}</h4>
                <p className="text-gray-300 mb-4">{internship.period}</p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {internship.description.map((item, i) => (
                    <li key={i} className="mb-1">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 详细信息弹窗 */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl max-w-2xl w-full mx-4
                border border-white/30 shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              {internships.find(i => i.id === selectedId) && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">
                    {internships.find(i => i.id === selectedId)?.role}
                  </h2>
                  <p className="text-xl text-blue-300">
                    {internships.find(i => i.id === selectedId)?.company}
                  </p>
                  <div className="text-gray-300 space-y-2">
                    {internships.find(i => i.id === selectedId)?.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  <div className="pt-4 flex flex-wrap gap-2">
                    {internships.find(i => i.id === selectedId)?.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/10 rounded-full text-blue-200"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 