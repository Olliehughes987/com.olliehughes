"use client"

import { useCallback, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from 'react-intersection-observer'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import { ThemeProvider, useTheme } from "next-themes"
import { Moon, Sun, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Bio from "@/components/bio"
import Skills from "@/components/skills"
import Projects from "@/components/projects"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import './globals.css'

export default function PortfolioPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Bio />
        <Skills />
        <Projects />
      </main>
    </ThemeProvider>
  )
}