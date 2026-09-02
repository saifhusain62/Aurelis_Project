import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutClubSection from "@/components/AboutClubSection";
import CourseShowcaseSection from "@/components/CourseShowcaseSection";
import MembershipSection from "@/components/MembershipSection";
import TestimonialReviewsSection from "@/components/TestimonialReviewsSection";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#09130d] text-white">
      <Navbar />
      <HeroSection />
      <AboutClubSection />
      <CourseShowcaseSection />
      <MembershipSection />
      <TestimonialReviewsSection />
    </main>
  );
}
