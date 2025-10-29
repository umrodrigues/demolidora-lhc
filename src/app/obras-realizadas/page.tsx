import SimpleHeader from "@/components/SimpleHeader";
import Footer from "@/components/Footer";
import WorksSection from "@/components/WorksSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingBudgetButton from "@/components/FloatingBudgetButton";

export default function ObrasRealizadas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleHeader />
      <div className="pt-20">
        <WorksSection />
        </div>
      <Footer />
      <WhatsAppButton />
      <FloatingBudgetButton />
    </div>
  );
}
