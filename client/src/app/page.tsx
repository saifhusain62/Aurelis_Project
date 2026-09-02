import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#09130d] text-white">
      <Navbar />
      <HeroSection />
    </main>
  );
}
