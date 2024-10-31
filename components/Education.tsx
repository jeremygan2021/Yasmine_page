'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaUniversity, FaGraduationCap, FaMedal } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface PhotoGalleryItem {
  id: 'kunming' | 'study' | 'lake'
  src: string
  alt: string
  description: string
  color: string
}

const photoGallery: PhotoGalleryItem[] = [
  { 
    id: 'kunming',
    src: "/images/daily/photo1.jpg", 
    alt: "昆明", 
    description: "我的家乡昆明",
    color: "from-blue-400/30 to-purple-400/30"
  },
  { 
    id: 'study',
    src: "/images/daily/photo2.jpg", 
    alt: "留学", 
    description: "罗切斯特大学留学生活",
    color: "from-purple-400/30 to-pink-400/30"
  },
  { 
    id: 'lake',
    src: "/images/daily/photo3.jpg", 
    alt: "翠湖", 
    description: "美丽的翠湖公园",
    color: "from-green-400/30 to-blue-400/30"
  },
]

export default function Education() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="space-y-8">
      {/* 教育背景卡片 */}
      <section className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
        {/* 装饰性背景 */}
        <motion.div
          className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-blue-50/50"
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

        <div className="relative z-10">
          {/* 标题部分 */}
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
              <HiAcademicCap className="text-3xl text-blue-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t.education.title}
            </h2>
          </div>

          {/* 学校信息 */}
          <div className="space-y-8">
            {/* Simon Business School */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-4"
            >
              <motion.div
                className="p-3 rounded-xl bg-blue-50"
                whileHover={{ scale: 1.1 }}
              >
                <FaUniversity className="text-2xl text-blue-500" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {t.education.schools.simon.name}
                </h3>
                <p className="text-gray-600 mt-1">{t.education.schools.simon.degree}</p>
                <p className="text-blue-600 mt-2">GPA: {t.education.schools.simon.gpa}</p>
              </div>
            </motion.div>

            {/* USST */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <motion.div
                className="p-3 rounded-xl bg-purple-50"
                whileHover={{ scale: 1.1 }}
              >
                <FaGraduationCap className="text-2xl text-purple-500" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {t.education.schools.usst.name}
                </h3>
                <p className="text-gray-600 mt-1">{t.education.schools.usst.degree}</p>
                <p className="text-blue-600 mt-2">GPA: {t.education.schools.usst.gpa}</p>
                <div className="flex items-center gap-2 mt-2">
                  <FaMedal className="text-yellow-500" />
                  <p className="text-gray-600">{t.education.schools.usst.awards}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 底部装饰 */}
        <motion.div
          className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-purple-50/50"
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
        className="grid grid-cols-3 gap-6"
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
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-b ${photo.color} backdrop-blur-sm
                transition-all duration-300 flex flex-col items-center justify-center`}
              initial={false}
            >
              <motion.h3
                className="text-white font-bold text-xl mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {t.education.photos[photo.id].title}
              </motion.h3>
              
              <motion.p
                className="text-white/90 text-sm text-center px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t.education.photos[photo.id].description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 