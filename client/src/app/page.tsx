import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutClubSection from "@/components/AboutClubSection";
import BeyondFairwaySection from "@/components/BeyondFairwaySection";
import ClubStatsSection from "@/components/ClubStatsSection";
import ClubProfessionalsSection from "@/components/ClubProfessionalsSection";
import NextRoundCTASection from "@/components/NextRoundCTASection";
import ClubCalendarSection from "@/components/ClubCalendarSection";
import CourseShowcaseSection from "@/components/CourseShowcaseSection";
import MembershipSection from "@/components/MembershipSection";
import TestimonialReviewsSection from "@/components/TestimonialReviewsSection";
import ClubBeginsSection from "@/components/ClubBeginsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#09130d] text-white">
      <Navbar />
      <HeroSection />
      <AboutClubSection />
      <CourseShowcaseSection />
      <MembershipSection />
      <TestimonialReviewsSection />
      <ClubBeginsSection />
      <BeyondFairwaySection />
      <ClubStatsSection />
      <ClubProfessionalsSection />
      <NextRoundCTASection />
      <ClubCalendarSection />
      <Footer />
    </main>
  );
}

