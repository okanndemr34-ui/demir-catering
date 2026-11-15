import Header from "../components/Header";
import Hero from "../components/Hero";
import Regions from "../components/Regions";
import Services from "../components/Services";
import MenuHeading from "../components/MenuHeading";
import MenuTabs from "../components/MenuTabs";
import PersonnelPanel from "../components/PersonnelPanel";
import MemorialPanel from "../components/MemorialPanel";
import SpecialPanel from "../components/SpecialPanel";
import Process from "../components/Process";
import QuoteIntro from "../components/QuoteIntro";
import QuoteForm from "../components/QuoteForm";
import Faq from "../components/Faq";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import MobileBar from "../components/MobileBar";
import { QuoteProvider } from "../components/QuoteProvider";
import { structuredData } from "../lib/seo";
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip" href="#icerik">
        İçeriğe geç
      </a>
      <Header />
      <QuoteProvider>
        <main id="icerik">
          <Hero />
          <Regions />
          <Services />
          <MenuTabs
            heading={<MenuHeading />}
            panels={[
              <PersonnelPanel key="staff" />,
              <MemorialPanel key="memorial" />,
              <SpecialPanel key="custom" />,
            ]}
          />
          <Process />
          <section id="teklif" className="section quote">
            <QuoteIntro />
            <QuoteForm />
          </section>
          <Faq />
          <Gallery />
        </main>
      </QuoteProvider>
      <Footer />
      <MobileBar />
    </>
  );
}
