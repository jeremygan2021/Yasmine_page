import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnimatedBackground from '@/components/AnimatedBackground'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '个人简历 | 杨子婷 Yasmine',
  description: '市场分析与数据科学专家',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <AnimatedBackground>
          {children}
        </AnimatedBackground>
      </body>
    </html>
  )
} 