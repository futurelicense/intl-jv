
import { Shield, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Investment Opportunities", href: "#investments" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Tokenization", href: "#tokenization" },
        { name: "Security", href: "#security" }
      ]
    },
    {
      title: "Investors",
      links: [
        { name: "Accredited Investors", href: "#accredited" },
        { name: "Diaspora Program", href: "#diaspora" },
        { name: "Investment Minimums", href: "#minimums" },
        { name: "Returns Calculator", href: "#calculator" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "List Your Project", href: "#list-project" },
        { name: "Due Diligence", href: "#due-diligence" },
        { name: "Smart Contracts", href: "#contracts" },
        { name: "Success Stories", href: "#stories" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#terms" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Risk Disclosure", href: "#risk" },
        { name: "Regulatory Compliance", href: "#compliance" }
      ]
    }
  ];

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-gold-500" />
              <span className="text-2xl font-bold gradient-text">IntlJV</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Connecting high-net-worth investors with premium real estate opportunities 
              in Lagos through blockchain-secured joint ventures.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-4 w-4" />
                <span>investors@intljv.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-4 w-4" />
                <span>+234 (0) 1 234 5678</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass-effect rounded-xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated on Premium Opportunities
            </h3>
            <p className="text-slate-300 mb-6">
              Get exclusive access to new investment opportunities and market insights.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-500"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators & Compliance */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>SEC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Blockchain Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Insured Platform</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © 2024 IntlJV. All rights reserved.
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-navy-800">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Risk Disclosure:</strong> Real estate investments involve risk and may result in loss of principal. 
            Past performance does not guarantee future results. All investments are subject to market risk. 
            This platform is for accredited investors only. Please read all risk disclosures before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
