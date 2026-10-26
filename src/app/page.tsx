import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { Menus } from "@/components/Menus";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Services />
        <Approach />
        <Menus />
        <Contact />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
