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
      className="container mx-auto px-4 py-8 space-y-8"
      animate={{
        marginLeft: isOpen ? '16rem' : '0',
        width: isOpen ? 'calc(100% - 16rem)' : '100%'
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <section id="about">
        <Profile />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
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
        <NavBar />
        <SideNav />
        <LanguageSwitch />
        <WrappedMainContent />
      </SideNavProvider>
    </LanguageProvider>
  )
} 