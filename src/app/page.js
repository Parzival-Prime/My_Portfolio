import Hero2 from "@/components/Hero2";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <main className="relative">
      {/* <SparklesCore
      minSize={0.6}
      maxSize={1}
      particleDensity={50}
      background='transparent'
      className='absolute w-full h-full'
      /> */}
      <Hero2/>
    </main>
  );
}
