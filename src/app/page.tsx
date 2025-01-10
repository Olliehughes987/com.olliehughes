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

function Header() {
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
            <a href="https://www.linkedin.com/in/ollie-hughes-3a1719179" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="transition-transform hover:scale-110">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center min-h-[70vh] overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 75,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              unoptimized
              src="/portrait.jpg"
              alt="Ollie Hughes"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Ollie Hughes</h1>
            <p className="text-xl md:text-2xl text-white">Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 px-4 md:px-8" ref={ref}>
      <div className={`container mx-auto max-w-3xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="space-y-4 text-lg">
          <p>
            Hello! I'm Ollie Hughes, a passionate web developer with over 3 years of experience in creating beautiful, functional, and user-centered digital experiences. I am based in Bristol UK, and I love turning complex problems into simple, elegant solutions.
          </p>
          <p>
            My journey in web development started when I built my first HTML website at the age of 15. Since then, I've been hooked on the power of technology to transform ideas into reality. I graduated with a degree in Computer Science from UC Berkeley and have worked with various startups and established companies to bring their visions to life.
          </p>
          <p>
            When I'm not coding, you can find me hiking in the beautiful California mountains, experimenting with new cooking recipes, or contributing to open-source projects. I'm always eager to learn new technologies and stay up-to-date with the latest web development trends.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button size="lg" className="transition-transform hover:scale-110">Download Resume</Button>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  ]

  return (
    <section id="skills" className="py-16 px-4 md:px-8" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillSet, index) => (
            <Card key={skillSet.category} className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle>{skillSet.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="transition-transform hover:scale-110">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive web app for managing personal and team tasks with analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "An interactive weather dashboard with 7-day forecasts and location-based services.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Redux", "Node.js", "OpenWeatherMap API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics Tool",
      description: "A tool for businesses to track and analyze their social media performance across platforms.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Python", "Django", "PostgreSQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 md:px-8" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`flex flex-col transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover h-48 w-full transition-transform hover:scale-105"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="transition-transform hover:scale-110">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild className="transition-transform hover:scale-105">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" asChild className="transition-transform hover:scale-105">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
