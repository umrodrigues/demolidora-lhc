import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesSection />
      <WhyChooseSection />
      <section id="contato">
        <ContactForm />
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
