import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Templates from "@/components/Templates";
import DashboardPreview from "@/components/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Templates />
      <DashboardPreview />
    </div>
  );
};

export default Index;
