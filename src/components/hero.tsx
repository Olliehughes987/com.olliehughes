import Image from "next/image"
import ParticleBackground from "./particle-background"

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center min-h-[70vh] overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 gap-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              unoptimized
              src="/portrait.jpg"
              alt="Jane Doe"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Oliver Hughes</h1>
            <p className="text-xl md:text-2xl">Web Developer</p>
          </div>
        </div>
      </div>  
    </section>
  )
}

