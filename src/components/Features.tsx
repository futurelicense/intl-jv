
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, TrendingUp, Clock, Lock, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Every transaction is secured by smart contracts and recorded on the blockchain for complete transparency and trust.",
      highlight: "99.9% Secure"
    },
    {
      icon: Users,
      title: "Elite Investor Network",
      description: "Connect with verified high-net-worth individuals and experienced developers in Lagos's premium real estate market.",
      highlight: "500+ HNWIs"
    },
    {
      icon: TrendingUp,
      title: "Tokenized Investments",
      description: "Fractional ownership through tokenization allows flexible investment amounts and easy portfolio diversification.",
      highlight: "From $50K"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Monitor your investments, returns, and project milestones in real-time through our advanced dashboard.",
      highlight: "24/7 Access"
    },
    {
      icon: Lock,
      title: "Escrow Protection",
      description: "Funds are held in blockchain-powered escrow until project milestones are met, ensuring investor protection.",
      highlight: "100% Protected"
    },
    {
      icon: Search,
      title: "Due Diligence",
      description: "Every property and developer undergoes rigorous verification and legal compliance checks before listing.",
      highlight: "Verified Only"
    }
  ];

  return (
    <section id="features" className="py-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Platform</span>
            <br />
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built for sophisticated investors who demand security, transparency, and premium returns 
            in their real estate ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-navy-800/30 border-navy-700 group hover:border-gold-500/30 transition-all duration-500 hover:bg-navy-800/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <div className="text-sm font-semibold text-gold-400 bg-gold-500/10 px-2 py-1 rounded">
                    {feature.highlight}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center glass-effect rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Investment Journey?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive network of investors and gain access to premium real estate 
            opportunities in Lagos's most desirable locations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400">Free</div>
              <div className="text-slate-400">Platform Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400">24hrs</div>
              <div className="text-slate-400">Approval Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400">$0</div>
              <div className="text-slate-400">Hidden Fees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
