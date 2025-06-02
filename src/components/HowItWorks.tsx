
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCheck, Search, Shield, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: UserCheck,
      title: "Get Verified",
      description: "Complete our streamlined KYC process with decentralized identity verification. Our institutional-grade compliance ensures only qualified investors join our exclusive network.",
      time: "24 hours",
      highlight: "Institutional Grade KYC"
    },
    {
      step: 2,
      icon: Search,
      title: "Discover Opportunities",
      description: "Browse curated real estate investments with detailed analytics, verified documentation, and transparent financial projections from our expert due diligence team.",
      time: "Browse anytime",
      highlight: "Expert Curated"
    },
    {
      step: 3,
      icon: Shield,
      title: "Secure Investment",
      description: "Invest through blockchain-secured smart contracts with built-in escrow protection. Your funds are protected until project milestones are achieved.",
      time: "Instant execution",
      highlight: "Smart Contract Protected"
    },
    {
      step: 4,
      icon: TrendingUp,
      title: "Track & Earn",
      description: "Monitor your investments in real-time through our dashboard. Receive automated distributions as projects hit milestones and generate returns.",
      time: "Real-time updates",
      highlight: "Automated Returns"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-navy-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">How It</span>
            <br />
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our streamlined process makes it simple for accredited investors to access 
            premium real estate opportunities with institutional-grade security.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-navy-800/50 border-navy-700 text-center relative group hover:border-gold-500/30 transition-all duration-500"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gold-500 text-navy-950 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <CardContent className="pt-8 pb-6">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-gold-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-medium rounded-full">
                      {step.highlight}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="text-gold-400 text-sm font-medium">
                    ⏱️ {step.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 glass-effect rounded-xl p-6">
            <div className="text-left">
              <div className="text-white font-semibold">Ready to get started?</div>
              <div className="text-slate-400 text-sm">Join 500+ verified investors today</div>
            </div>
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold">
              Begin Verification
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
