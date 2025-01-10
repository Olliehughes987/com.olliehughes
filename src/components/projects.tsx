"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: "Phasmophobia Helper",
    description: "A lightweight tool for use in the video game Phasmophobia. This was a passion project that I created to help me and my friends play the game.",
    image: "/phas.png",
    technologies: ["HTML", "CSS", "Javascript"],
    liveUrl: 'https://olliehughes987.github.io/PhasHelper/',
    githubUrl: "https://github.com/Olliehughes987/PhasHelper"
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

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-muted" ref={ref}>
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

