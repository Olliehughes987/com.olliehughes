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
            Hey! I'm Ollie Hughes, a passionate full stack web developer with over 3 years of professional experience in creating beautiful, functional, and user-centered digital experiences. I am based in Bristol UK, and I love turning complex problems into simple, elegant solutions. I specialise in Laravel (8-11) & Drupal (8-11), but enjoy dabbling into NextJS, Typescript and other technologies.
          </p>
          <p>
            My journey started with playing around with HTML when i was 15, this very quickly became an obsession with technology in general. I graduated with a Bsc in Computer Science from De Montfort University. 
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button size="lg" className="transition-transform hover:scale-110">Download CV</Button>
        </div>
      </div>
    </section>
  )
}

