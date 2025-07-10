import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Templates from "@/components/Templates";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 pt-16">
        <Hero />
        <HowItWorks />
        <Templates />
        <DashboardPreview />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
