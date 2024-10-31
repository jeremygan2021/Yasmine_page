'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// 创建三角形组件
const Triangle = ({ delay = 0, scale = 1 }) => (
  <motion.div
    className="absolute w-40 h-40"
    style={{
      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      backdropFilter: 'blur(8px)',
    }}
    animate={{
      rotate: [0, 360],
      scale: [scale, scale * 1.2, scale],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
)

// 创建浮动圆点
const FloatingDot = ({ delay = 0, size = 4 }) => (
  <motion.div
    className={`absolute w-${size} h-${size} rounded-full bg-white/30`}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

export default function AboutPage() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  // 处理鼠标移动
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const springConfig = { stiffness: 100, damping: 30 }
  const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-10, 10]), springConfig)

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* 背景图片层 */}
      <div className="fixed inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="背景"
          fill
          className="object-cover"
          priority
        />
        {/* 渐变叠加层 */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-blue-900/80 to-purple-900/90 mix-blend-multiply" />
      </div>

      {/* 装饰性三角形 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Triangle delay={0} scale={1} />
        <Triangle delay={2} scale={0.7} />
        <Triangle delay={4} scale={1.3} />
        
        {/* 添加浮动点 */}
        <div className="absolute inset-0 grid grid-cols-4 gap-8 p-8">
          {Array.from({ length: 16 }).map((_, i) => (
            <FloatingDot key={i} delay={i * 0.2} size={2 + (i % 3) * 2} />
          ))}
        </div>
      </div>

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
            className="px-6 py-3 bg-black/20 backdrop-blur-md rounded-full 
              text-white border border-white/20 hover:bg-white/10 transition-all
              flex items-center gap-2 shadow-lg"
          >
            <span>←</span>
            <span>返回首页</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* 英雄区域 */}
      <motion.div
        style={{ 
          opacity,
          scale,
          y,
          rotateX,
          rotateY,
          perspective: 1000
        }}
        className="h-screen flex items-center justify-center relative"
      >
        <motion.div
          className="text-center space-y-6 p-12 bg-black/30 backdrop-blur-xl rounded-2xl
            border border-white/10 transform-gpu shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-purple-400"
          >
            探索我的故事
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            让我们一起开启这段奇妙的旅程
          </motion.p>
        </motion.div>
      </motion.div>

      {/* 内容区域 */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">
          {/* 各个部分的卡片背景调整 */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 p-8 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl"
          >
            <h2 className="text-5xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-purple-400">
              个人简介
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              作为一名充满激情的数据科学家和市场分析师，我始终致力于将数据洞察转化为实际的商业价值。
              在我的职业生涯中，我不断探索新技术和方法，以创新的方式解决复杂的商业问题。
            </p>
          </motion.section>

          {/* 生活理念部分 - 同样添加毛玻璃效果 */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 p-8 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl"
          >
            <h2 className="text-5xl font-bold text-white bg-clip-text text-transparent
              bg-gradient-to-r from-blue-400 to-purple-400">
              生活理念
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "持续学习", desc: "保持对新知识的渴望，永不停止学习的脚步" },
                { title: "创新思维", desc: "用创新的视角看待问题，寻找独特的解决方案" },
                { title: "团队协作", desc: "相信协作的力量，共同创造更大的价值" },
                { title: "追求卓越", desc: "在每一个项目中都追求最好的结果" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                    hover:bg-white/10 transition-all transform-gpu"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 兴趣爱好部分 - 同样添加毛玻璃效果 */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 p-8 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl"
          >
            <h2 className="text-5xl font-bold text-white bg-clip-text text-transparent
              bg-gradient-to-r from-blue-400 to-purple-400">
              兴趣爱好
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "📚 阅读", "🎨 设计", "✈️ 旅行", "🎵 音乐",
                "📷 摄影", "🏃‍♀️ 运动", "🎮 游戏", "🎬 电影"
              ].map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateZ: [-5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 text-center bg-white/5 backdrop-blur-sm rounded-xl
                    border border-white/10 text-white hover:bg-white/10 
                    transition-all transform-gpu cursor-pointer"
                >
                  {hobby}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
} 