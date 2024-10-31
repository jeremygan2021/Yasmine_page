'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  id: string
  label: string
  angle: number
}

const navItems: NavItem[] = [
  { id: 'about', label: '关于我', angle: 270 },     // 顶部中央 (270° = -90°)
  { id: 'education', label: '教育背景', angle: 330 }, // 右上 (330° = -30°)
  { id: 'skills', label: '专业技能', angle: 30 },    // 右下
  { id: 'experience', label: '工作经验', angle: 90 }, // 底部
  { id: 'projects', label: '项目经历', angle: 150 }   // 左下
]

export default function NavBar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const radius = 120 // 圆形轨道半径

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* 触发区域 */}
      <div 
        className="fixed top-0 left-0 w-full h-16 bg-transparent z-40"
        onMouseEnter={() => setIsVisible(true)}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.nav 
            className="fixed left-1/2 z-50"
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            onMouseLeave={() => setIsVisible(false)}
          >
            <div className="relative w-[280px] h-[280px]">
              {/* 背景圆环 */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-gray-200/50 bg-white/20 backdrop-blur-lg shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* 导航按钮 */}
              {navItems.map((item) => {
                const isHovered = hoveredItem === item.id
                // 将角度转换为弧度
                const angleInRad = (item.angle * Math.PI) / 180
                // 计算按钮位置
                const x = radius * Math.cos(angleInRad)
                const y = radius * Math.sin(angleInRad)

                return (
                  <motion.button
                    key={item.id}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <div className={`relative px-4 py-2 rounded-full border-2 whitespace-nowrap
                      ${isHovered 
                        ? 'bg-white/90 border-gray-300' 
                        : 'bg-white/60 border-gray-200/50'} 
                      backdrop-blur-md shadow-lg`}>
                      <span className={`font-medium ${isHovered ? 'text-gray-800' : 'text-gray-700'}`}>
                        {item.label}
                      </span>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/20"
                          layoutId="navHover"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
} 