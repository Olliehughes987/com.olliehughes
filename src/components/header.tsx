"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold transition-transform hover:scale-110">
          JD
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#skills" className="hover:underline transition-colors hover:text-primary">Skills</Link></li>
            <li><Link href="#about" className="hover:underline transition-colors hover:text-primary">About</Link></li>
            <li><Link href="#projects" className="hover:underline transition-colors hover:text-primary">Projects</Link></li>
            <li><Link href="#contact" className="hover:underline transition-colors hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" asChild className="transition-transform hover:scale-105">
            <a href="https://www.linkedin.com/in/ollie-hughes-3a1719179 " target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

