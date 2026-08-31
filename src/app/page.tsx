import { Footer } from "@/components/page/footer";
import { Header } from "@/components/page/header";
import { Hero } from "@/components/page/hero";
import { Presentation } from "@/components/page/presentation";
import { Results } from "@/components/page/results";
import { Theses } from "@/components/page/theses";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip pt-4 sm:pt-6">
      <Header />
      <main>
        <Hero />
        <Theses />
        <Presentation />
        <Results />
      </main>
      <Footer />
    </div>
  )
}
