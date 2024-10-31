'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiPython, SiR, SiJavascript, SiC, 
  SiMysql, SiTensorflow, SiScikitlearn 
} from 'react-icons/si'
import { FaChartBar, FaChartLine, FaRobot, FaMicrochip } from 'react-icons/fa'

interface SkillLevel {
  name: string
  level: number
  icon: React.ReactNode
  color: string
}

const programmingSkills: SkillLevel[] = [
  { name: "Python", level: 95, icon: <SiPython />, color: "blue" },
  { name: "R", level: 90, icon: <SiR />, color: "indigo" },
  { name: "C", level: 75, icon: <SiC />, color: "purple" },
  { name: "JavaScript", level: 70, icon: <SiJavascript />, color: "yellow" },
  { name: "SQL", level: 65, icon: <SiMysql />, color: "orange" },
  { name: "硬件开发", level: 40, icon: <FaMicrochip />, color: "red" },
]

const analysisSkills: SkillLevel[] = [
  { name: "统计分析", level: 95, icon: <FaChartBar />, color: "emerald" },
  { name: "预测建模", level: 90, icon: <FaChartLine />, color: "teal" },
  { name: "机器学习", level: 85, icon: <FaRobot />, color: "cyan" },
]

export default function Skills() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
      {/* 背景装饰 */}
      <motion.div
        className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-50 opacity-50"
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
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span>专业技能</span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-blue-500"
          >
            <SiTensorflow />
          </motion.div>
        </h2>

        {/* 编程语言技能 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">编程语言</h3>
          <div className="space-y-4">
            {programmingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className={`text-2xl text-${skill.color}-500`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-${skill.color}-500 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 数据分析技能 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">数据分析</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {analysisSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`p-4 rounded-xl bg-${skill.color}-50 border border-${skill.color}-100`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    className={`text-2xl text-${skill.color}-500`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className={`text-${skill.color}-600 font-bold`}>
                    {skill.level}%
                  </span>
                </div>
                <h4 className="font-medium text-gray-700">{skill.name}</h4>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-${skill.color}-500 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <motion.div
        className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-green-50 opacity-50"
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