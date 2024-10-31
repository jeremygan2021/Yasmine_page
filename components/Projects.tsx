'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  name: string
  description: string
  technologies: string[]
  images: string[] // 每个项目的相关图片
}

const projectsData: Project[] = [
  {
    name: "HELOC申请决策支持系统",
    description: "使用机器学习模型预测信用风险",
    technologies: ["Python", "机器学习", "数据分析"],
    images: [
      "/images/projects/heloc-1.jpg",
      "/images/projects/heloc-2.jpg",
      "/images/projects/heloc-3.jpg",
    ]
  },
  // ... 其他项目
]

export default function Projects() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">项目经验</h2>
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50"
          >
            {/* 项目内容 */}
            <div className="flex flex-col md:flex-row gap-6 p-6">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-blue-100/50 text-blue-800 rounded-full text-sm
                        backdrop-blur-sm border border-blue-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* 图片轮播 */}
              <div className="relative w-full md:w-96 h-48 rounded-lg overflow-hidden">
                <motion.div
                  className="flex absolute top-0 left-0 h-full"
                  animate={{
                    x: [-100, -(project.images.length * 384)], // 384px = 图片宽度
                  }}
                  transition={{
                    x: {
                      duration: project.images.length * 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  {/* 复制两次图片以实现无缝滚动 */}
                  {[...project.images, ...project.images].map((image, i) => (
                    <div key={i} className="relative w-96 h-48 flex-shrink-0">
                      <Image
                        src={image}
                        alt={`${project.name} 展示图 ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      {/* 图片渐变遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-indigo-50/10 backdrop-blur-[1px]" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* 装饰性元素 */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-100/20"
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
          </div>
        ))}
      </div>
    </section>
  )
} 