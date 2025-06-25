
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-50">Premium Real Estate</span>
            <br />
            <span className="gradient-text">Joint Ventures</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Connect with high-net-worth investors for secure, blockchain-powered 
            real estate opportunities in Lagos. Exclusive access to verified projects 
            with guaranteed returns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth">
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-8 py-6 text-lg">
                Start Investing
              </Button>
            </Link>
            <Link to="/properties">
              <Button 
                variant="outline" 
                className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-950 px-8 py-6 text-lg"
              >
                View Opportunities
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 glass-effect rounded-lg">
              <TrendingUp className="h-12 w-12 text-gold-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-50 mb-2">$50M+</h3>
              <p className="text-slate-400">Total Investments</p>
            </div>

            <div className="flex flex-col items-center p-6 glass-effect rounded-lg">
              <Shield className="h-12 w-12 text-gold-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-50 mb-2">100%</h3>
              <p className="text-slate-400">Blockchain Secured</p>
            </div>

            <div className="flex flex-col items-center p-6 glass-effect rounded-lg">
              <Users className="h-12 w-12 text-gold-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-50 mb-2">500+</h3>
              <p className="text-slate-400">Active Investors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="h-2 w-2 bg-gold-500 rounded-full opacity-60" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
        <div className="h-3 w-3 bg-gold-400 rounded-full opacity-40" />
      </div>
      <div className="absolute top-1/2 left-5 animate-pulse delay-500">
        <div className="h-1 w-1 bg-gold-600 rounded-full opacity-80" />
      </div>
    </section>
  );
};

export default Hero;
