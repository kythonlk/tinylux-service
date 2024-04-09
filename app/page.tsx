import About from "@/components/block/about";
import Contact from "@/components/block/contact";
import Faq from "@/components/block/faq";
import Hero from "@/components/block/hero";
import Pricing from "@/components/block/pricing";
import Services from "@/components/block/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Pricing />
      <About />
      <h2 className="text-3xl font-bold tracking-tighter text-center hidden md:block md:pt-20 sm:text-4xl md:text-4xl">
        Contact Us
      </h2>
      <div className="flex justify-between flex-col md:flex-row p-4 md:p-20 gap-4">
        <Contact />
        <Faq />
      </div>
    </main>
  );
}
