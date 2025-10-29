import SimpleHeader from "@/components/SimpleHeader";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingBudgetButton from "@/components/FloatingBudgetButton";

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <SimpleHeader />
      <ContactInfo />
      <Footer />
      <WhatsAppButton />
      <FloatingBudgetButton />
    </div>
  );
}
