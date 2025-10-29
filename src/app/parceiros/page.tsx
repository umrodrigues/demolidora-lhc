import SimpleHeader from "@/components/SimpleHeader";
import PartnersGrid from "@/components/PartnersGrid";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingBudgetButton from "@/components/FloatingBudgetButton";

export default function ParceirosPage() {
  return (
    <div className="min-h-screen">
      <SimpleHeader />
      <PartnersGrid />
      <Footer />
      <WhatsAppButton />
      <FloatingBudgetButton />
    </div>
  );
}
