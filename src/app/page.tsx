import { Footer } from "@/components/page/footer";
import { Header } from "@/components/page/header";
import { Hero } from "@/components/page/hero";
import { Presentation } from "@/components/page/presentation";
import { Results } from "@/components/page/results";
import { Theses } from "@/components/page/theses";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center pt-4">
      <Header />
      <Hero />
      <Theses />
      <Presentation />
      <Results />
      <Footer />
    </div>
  )
}
