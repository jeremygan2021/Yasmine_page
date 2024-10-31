'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaChartLine, FaDatabase, FaLightbulb } from 'react-icons/fa'
import { SiDatacamp } from 'react-icons/si'
import { HiSparkles } from 'react-icons/hi'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations, Translations } from '@/locales/translations'

export default function Profile() {
  const { language } = useLanguage()
  const t = translations[language as keyof Translations]

  return (
    <section className="relative overflow-hidden bg-white rounded-lg shadow-lg">
      {/* 城市背景图片层 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/city-background.jpg"
          alt="城市背景"
          fill
          className="object-cover opacity-10 filter blur-[1px]"
          priority
        />
        {/* 渐变叠加层，确保内容可读性 */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/90" />
      </div>

      {/* 动态背景 - 保持原有效果但调整透明度 */}
      <motion.div 
        className="absolute inset-0 z-1"
        animate={{
          background: [
            'linear-gradient(to right, rgba(239,246,255,0.5), rgba(243,232,255,0.5))',
            'linear-gradient(to right, rgba(243,232,255,0.5), rgba(239,246,255,0.5))',
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* 装饰性图形 */}
      <motion.div
        className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-100/30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* 内容区域 */}
      <div className="relative z-10 p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            {/* 名字和标题 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-blue-600 to-purple-600">
                  {t.profile.name}
                </h1>
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl text-gray-600"
                >
                  Yasmine
                </motion.span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiSparkles className="text-yellow-400 text-2xl" />
                </motion.div>
              </div>

              {/* 职位标题 */}
              <div className="flex items-center gap-3">
                <SiDatacamp className="text-blue-500 text-xl" />
                <p className="text-xl text-gray-700 font-medium">
                  {t.profile.title}
                </p>
              </div>
              
              {/* 技能标签 */}
              <div className="flex flex-wrap gap-3 py-3">
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaChartLine className="text-blue-500" />
                  <span className="text-blue-600">数据分析</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaDatabase className="text-purple-500" />
                  <span className="text-purple-600">市场研究</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaLightbulb className="text-indigo-500" />
                  <span className="text-indigo-600">商业洞察</span>
                </motion.div>
              </div>

              {/* 简介 */}
              <motion.p 
                className="text-gray-600 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t.profile.description}
              </motion.p>

              {/* 社交链接 */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href="https://www.linkedin.com/in/ziting-yang-7b33832bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-2xl" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/ztYasmine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-2xl" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* 头像部分 */}
          <motion.div
            className="relative w-48 h-48"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {/* 头像容器 */}
            <div className="relative w-full h-full rounded-full overflow-hidden 
              border-4 border-white shadow-2xl">
              <Image
                src="/images/profile-photo.jpg"
                alt="个人照片"
                fill
                className="object-cover"
                priority
              />
              {/* 头像悬停效果 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* 动态光环效果 */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-400/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* 装饰性粒子 */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 