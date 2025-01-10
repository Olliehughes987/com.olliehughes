"use client"

import { Button } from "@/components/ui/button"
import { useInView } from 'react-intersection-observer'

export default function Bio() {
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
            Hello! I'm Jane Doe, a passionate web developer with over 5 years of experience in creating beautiful, functional, and user-centered digital experiences. I am based in San Francisco, California, and I love turning complex problems into simple, elegant solutions.
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

