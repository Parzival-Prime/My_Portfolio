import Hero from "@/components/Hero";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <main className="relative">
      <SparklesCore
      minSize={0.6}
      maxSize={1}
      particleDensity={50}
      background='transparent'
      className='absolute w-full h-full'
      />
      <Hero/>
    </main>
  );
}
