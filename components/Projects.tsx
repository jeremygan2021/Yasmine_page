'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

// 项目图片数据
const projectImages = {
  heloc: [
    '/images/projects/heloc-1.jpg',
    '/images/projects/heloc-2.jpg',
    '/images/projects/heloc-3.jpg',
  ],
  pmg: [
    '/images/projects/pmg-1.jpg',
    '/images/projects/pmg-2.jpg',
  ],
  education: [
    '/images/projects/edu-1.jpg',
    '/images/projects/edu-2.jpg',
  ],
  business: [
    '/images/projects/business-1.jpg',
    '/images/projects/business-2.jpg',
  ],
}

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">{t.projects.title}</h2>
      <div className="space-y-8">
        {/* HELOC项目 */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {t.projects.heloc.title}
              </h3>
              <p className="text-gray-600">{t.projects.heloc.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {t.projects.heloc.description.map((desc, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-blue-100/50 text-blue-800 rounded-full text-sm
                      backdrop-blur-sm border border-blue-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {desc}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* 图片轮播 */}
            <div className="relative w-full md:w-96 h-48 rounded-lg overflow-hidden">
              <motion.div
                className="flex absolute top-0 left-0 h-full"
                animate={{
                  x: [-100, -(projectImages.heloc.length * 384)],
                }}
                transition={{
                  x: {
                    duration: projectImages.heloc.length * 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* 复制两次图片以实现无缝滚动 */}
                {[...projectImages.heloc, ...projectImages.heloc].map((image, i) => (
                  <div key={i} className="relative w-96 h-48 flex-shrink-0">
                    <Image
                      src={image}
                      alt={`项目展示图 ${i + 1}`}
                      fill
                      className="object-cover"
                    />
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

        {/* PMG项目 */}
        {/* ... 使用相同的结构，但使用 projectImages.pmg */}

        {/* 其他项目 */}
        {/* ... 使用相同的结构，但使用相应的项目图片 */}
      </div>
    </section>
  )
} 