'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      className="fixed top-8 right-8 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
        <motion.button
          className={`px-3 py-1 rounded-full ${
            language === 'zh'
              ? 'bg-white text-gray-800'
              : 'text-white hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('zh')}
        >
          中文
        </motion.button>
        <motion.button
          className={`px-3 py-1 rounded-full ${
            language === 'en'
              ? 'bg-white text-gray-800'
              : 'text-white hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('en')}
        >
          English
        </motion.button>
      </div>
    </motion.div>
  )
} 