
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Users, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold-500/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-gold-400 text-sm font-medium">Nigeria's Premier Real Estate Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            <span className="text-white">Invest in</span>
            <br />
            <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              Premium Real Estate
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Join elite investors in blockchain-secured real estate opportunities. 
            Start with as little as $50K and earn up to 25% returns in Lagos's premium locations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/auth">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-slate-900 font-bold px-10 py-6 text-lg rounded-xl shadow-2xl shadow-gold-500/25 transition-all duration-300 hover:scale-105 group">
                Start Investing Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-10 py-6 text-lg rounded-xl font-semibold group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$50M+</div>
                <div className="text-slate-400 text-sm">Assets Managed</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300">
                <Shield className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-slate-400 text-sm">Blockchain Secured</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300">
                <Users className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-slate-400 text-sm">Elite Investors</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300">
                <div className="text-gold-500 text-2xl font-bold mx-auto mb-3">25%</div>
                <div className="text-3xl font-bold text-white mb-1">IRR</div>
                <div className="text-slate-400 text-sm">Average Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-3 h-3 bg-gold-500/60 rounded-full" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float delay-1000">
        <div className="w-4 h-4 bg-gold-400/40 rounded-full" />
      </div>
      <div className="absolute top-3/4 left-1/4 animate-float delay-500">
        <div className="w-2 h-2 bg-gold-600/80 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
