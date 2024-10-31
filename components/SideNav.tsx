'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useSideNav } from '@/contexts/SideNavContext'
import { useRouter } from 'next/navigation'

interface SideNavItem {
  id: string
  label: string
  icon: string
}

const sideNavItems: SideNavItem[] = [
  { id: 'more-about', label: '更多关于我', icon: '👋' },
  { id: 'internships', label: '实习经历', icon: '💼' },
  { id: 'research', label: '研究项目', icon: '🔍' },
  { id: 'awards', label: '获奖情况', icon: '🏆' },
  { id: 'skills-detail', label: '技能详情', icon: '💡' },
]

export default function SideNav() {
  const { isOpen, setIsOpen } = useSideNav()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const router = useRouter()

  const handleItemClick = (id: string) => {
    if (id === 'more-about') {
      router.push('/about')
    } else if (id === 'internships') {
      router.push('/internships')
    } else if (id === 'research') {
      router.push('/vangogh-projects')
    } else {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <div className="fixed left-0 top-0 h-full z-40">
      {/* 触发按钮 */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 p-2 rounded-r-lg shadow-lg backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-xl">
          {isOpen ? '←' : '→'}
        </span>
      </button>

      {/* 侧边导航栏 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-64 h-full bg-black/30 backdrop-blur-lg shadow-lg"
          >
            {/* 背景图片和渐变 */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/school.jpg"
                alt="背景"
                fill
                className="object-cover brightness-75"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-sm" />
            </div>

            {/* 收起按钮 */}
            <motion.button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/50 shadow-lg backdrop-blur-sm z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-white text-lg">×</span>
            </motion.button>

            {/* 导航内容 */}
            <nav className="relative z-10 p-6 pt-16 space-y-4">
              {sideNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  className="w-full text-left"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(item.id)}
                >
                  <motion.div
                    className={`relative p-3 rounded-lg border-2 
                      ${hoveredItem === item.id 
                        ? 'bg-black/50 border-gray-400' 
                        : 'bg-black/30 border-gray-500/50'} 
                      backdrop-blur-md transition-colors`}
                    whileHover={{ x: 10 }}
                    animate={{
                      scale: hoveredItem === item.id ? 1.05 : 1,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className={`font-medium ${hoveredItem === item.id ? 'text-white' : 'text-gray-200'}`}>
                        {item.label}
                      </span>
                    </div>
                    {hoveredItem === item.id && (
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-white/10"
                        layoutId="sideNavHover"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 