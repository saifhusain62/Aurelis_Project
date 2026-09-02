import Navbar from "@/components/Navbar";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#09130d] text-white">
      <Navbar />
      <div className="pt-40 px-6 max-w-[1650px] mx-auto flex flex-col items-center justify-center text-center py-20">
        <span className="bg-[#c6f135] text-[#0f2619] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          Unrivaled Hospitality
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl font-semibold mb-6">
          Luxury Experiences
        </h1>
        <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
          Welcome to the Experiences page. Explore fine dining, private coaching, wellness spa, and curated estate events.
        </p>
      </div>
    </main>
  );
}
