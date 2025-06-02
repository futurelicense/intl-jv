
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InvestmentOpportunities from '@/components/InvestmentOpportunities';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      <Hero />
      <InvestmentOpportunities />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
