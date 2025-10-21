import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import WorksCarousel from "@/components/WorksCarousel";
import ContactForm from "@/components/ContactForm";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingBudgetButton from "@/components/FloatingBudgetButton";
import ScrollToHash from "@/components/ScrollToHash";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollToHash />
      <Header />
      <ServicesSection />
      <WhyChooseSection />
      <WorksCarousel />
      <section id="contato">
        <ContactForm />
      </section>
      <Partners />
      <Footer />
      <WhatsAppButton />
      <FloatingBudgetButton />
    </div>
  );
}
