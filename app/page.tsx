'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Profile from '@/components/Profile'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import NavBar from '@/components/NavBar'
import SideNav from '@/components/SideNav'
import LanguageSwitch from '@/components/LanguageSwitch'
import { SideNavProvider, useSideNav } from '@/contexts/SideNavContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

const MainContent = () => {
  const { isOpen } = useSideNav()

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center"
      animate={{
        marginLeft: isOpen ? '16rem' : '0',
        width: isOpen ? 'calc(100% - 16rem)' : '100%'
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-6xl space-y-8">
          <section id="about" className="w-full">
            <Profile />
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <section id="education">
              <Education />
            </section>
            <section id="skills">
              <Skills />
            </section>
          </div>
          <section id="experience" className="w-full">
            <Experience />
          </section>
          <section id="projects" className="w-full">
            <Projects />
          </section>
        </div>
      </div>
    </motion.div>
  )
}

const WrappedMainContent = () => {
  return (
    <SideNavProvider>
      <MainContent />
    </SideNavProvider>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <SideNavProvider>
        <div className="relative min-h-screen">
          <NavBar />
          <SideNav />
          <LanguageSwitch />
          <WrappedMainContent />
        </div>
      </SideNavProvider>
    </LanguageProvider>
  )
} 