
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-8">
            <Shield className="h-4 w-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">Blockchain-Secured Real Estate Investment</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Exclusive Real Estate</span>
            <br />
            <span className="gradient-text">Joint Ventures</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with high-net-worth investors and elite developers in Lagos through 
            our blockchain-powered platform for secure, transparent, and profitable real estate investments.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">$2.5B+</div>
              <div className="text-slate-400">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">500+</div>
              <div className="text-slate-400">Verified Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">98%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-8 py-4 text-lg"
            >
              Start Investing
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 px-8 py-4 text-lg"
            >
              View Opportunities
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mt-12 text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">SEC Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Blockchain Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">Institutional Grade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
