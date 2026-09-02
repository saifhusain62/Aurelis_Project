import Navbar from "@/components/Navbar";

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-[#09130d] text-white">
      <Navbar />
      <div className="pt-40 px-6 max-w-[1650px] mx-auto flex flex-col items-center justify-center text-center py-20">
        <span className="bg-[#c6f135] text-[#0f2619] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          18-Hole Championship Layout
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl font-semibold mb-6">
          The Championship Course
        </h1>
        <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
          Welcome to The Course page. Discover our 18-hole championship layout, par 72, spanning 7,164 yards of immaculate fairways.
        </p>
      </div>
    </main>
  );
}
