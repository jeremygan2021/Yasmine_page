'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="fixed inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(to right bottom, rgb(243, 244, 246), rgb(209, 213, 219))',
            'linear-gradient(to right bottom, rgb(224, 242, 254), rgb(186, 230, 253))',
            'linear-gradient(to right bottom, rgb(236, 254, 255), rgb(207, 250, 254))',
            'linear-gradient(to right bottom, rgb(243, 244, 246), rgb(209, 213, 219))',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </motion.div>
  )
} 