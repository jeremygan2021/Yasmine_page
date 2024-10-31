'use client'

import React, { createContext, useContext, useState } from 'react'

interface SideNavContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const SideNavContext = createContext<SideNavContextType | undefined>(undefined)

export function SideNavProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SideNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideNavContext.Provider>
  )
}

export function useSideNav() {
  const context = useContext(SideNavContext)
  if (context === undefined) {
    throw new Error('useSideNav must be used within a SideNavProvider')
  }
  return context
} 