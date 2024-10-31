'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Education } from '@/types'
import { FaUniversity, FaGraduationCap, FaMedal, FaAward } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import Image from 'next/image'

const educationData: Education[] = [
  {
    school: "罗切斯特大学Simon商学院",
    degree: "市场分析硕士",
    gpa: "3.57/4.0",
    icon: "university",
    color: "blue"
  },
  {
    school: "上海理工大学",
    degree: "传播学学士",
    gpa: "3.54/4.0",
    awards: ["两次获得优秀学习奖学金"],
    icon: "academic",
    color: "purple"
  }
]

// 更新照片数据
const photoGallery = [
  { 
    src: "/images/daily/photo1.jpg", 
    alt: "昆明", 
    description: "我的家乡昆明",
    color: "from-blue-400/30 to-purple-400/30"
  },
  { 
    src: "/images/daily/photo2.jpg", 
    alt: "留学", 
    description: "罗切斯特大学留学生活",
    color: "from-purple-400/30 to-pink-400/30"
  },
  { 
    src: "/images/daily/photo3.jpg", 
    alt: "翠���", 
    description: "美丽的翠湖公园",
    color: "from-green-400/30 to-blue-400/30"
  },
]

export default function Education() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
        {/* 装饰性背景元素 */}
        <motion.div
          className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-blue-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
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
              <HiAcademicCap className="text-3xl text-blue-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800">教育背景</h2>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 rounded-xl ${
                      edu.color === 'blue' ? 'bg-blue-50' : 'bg-purple-50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {edu.icon === 'university' ? (
                      <FaUniversity className={`text-2xl ${
                        edu.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                      }`} />
                    ) : (
                      <FaGraduationCap className={`text-2xl ${
                        edu.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                      }`} />
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-gray-600">{edu.degree}</p>
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <FaMedal className="text-yellow-500" />
                      </motion.div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="px-3 py-1 bg-blue-50 rounded-full"
                      >
                        <p className="text-blue-600 font-medium">GPA: {edu.gpa}</p>
                      </motion.div>
                    </div>
                    {edu.awards && (
                      <div className="mt-3">
                        {edu.awards.map((award, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <FaAward className="text-yellow-500" />
                            <span>{award}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 连接线 */}
                {index < educationData.length - 1 && (
                  <motion.div
                    className="absolute left-6 top-16 w-0.5 h-8 bg-gray-200"
                    initial={{ height: 0 }}
                    animate={{ height: 32 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 底部装饰元素 */}
        <motion.div
          className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-purple-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* 照片展示区域 */}
      <motion.div 
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {photoGallery.map((photo, index) => (
          <motion.div
            key={index}
            className="relative aspect-square rounded-full overflow-hidden bg-white shadow-lg group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* 背景图片 */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* 悬停效果层 */}
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-b ${photo.color} backdrop-blur-sm
                transition-all duration-300 flex flex-col items-center justify-center`}
              initial={false}
            >
              {/* 标题动画 */}
              <motion.h3
                className="text-white font-bold text-xl mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {photo.alt}
              </motion.h3>
              
              {/* 描述文字动画 */}
              <motion.p
                className="text-white/90 text-sm text-center px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {photo.description}
              </motion.p>
            </motion.div>

            {/* 装饰性边框 */}
            <motion.div
              className="absolute inset-0 border-2 border-white/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3
              }}
            />

            {/* 悬停时的浮动粒子效果 */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={false}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 