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
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface Experience {
  id: string
  icon: React.ReactNode
  color: string
}

const experienceData: Experience[] = [
  {
    id: 'research',
    icon: <BsRobot />,
    color: "blue"
  },
  {
    id: 'analyst',
    icon: <FaChartLine />,
    color: "purple"
  }
]

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

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
          <h2 className="text-2xl font-bold text-gray-800">{t.experience.title}</h2>
        </div>

        <div className="space-y-12">
          {t.experience.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* 时间线 */}
              {index < t.experience.items.length - 1 && (
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
                  className={`p-4 rounded-xl bg-${experienceData[index].color}-50 shrink-0 w-16 h-16 flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className={`text-2xl text-${experienceData[index].color}-500`}>
                    {experienceData[index].icon}
                  </span>
                </motion.div>

                {/* 内容 - 添加最小宽度确保布局稳定 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
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
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <FaLightbulb className={`text-${experienceData[index].color}-400 shrink-0 mt-1`} />
                        <span className="flex-1">{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* 技术标签 */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className={`px-3 py-1 bg-${experienceData[index].color}-50 text-${experienceData[index].color}-600 
                            rounded-full text-sm border border-${experienceData[index].color}-100 whitespace-nowrap`}
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