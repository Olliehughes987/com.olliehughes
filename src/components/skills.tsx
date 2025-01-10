"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from 'react-intersection-observer'

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-muted" ref={ref}>
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

