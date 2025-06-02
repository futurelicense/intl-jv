
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, Clock, Shield } from 'lucide-react';

const InvestmentOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: "Lagos Luxury Residential Complex",
      location: "Victoria Island, Lagos",
      totalValue: "$45M",
      minInvestment: "$250K",
      expectedReturn: "22% IRR",
      duration: "24 months",
      tokenized: true,
      verified: true,
      description: "Premium residential development in the heart of Victoria Island",
      image: "/api/placeholder/400/250",
      progress: 68,
      investors: 12
    },
    {
      id: 2,
      title: "Commercial Hub Development",
      location: "Lekki Phase 1, Lagos",
      totalValue: "$78M",
      minInvestment: "$500K",
      expectedReturn: "18% IRR",
      duration: "36 months",
      tokenized: true,
      verified: true,
      description: "Mixed-use commercial and retail space in prime Lekki location",
      image: "/api/placeholder/400/250",
      progress: 34,
      investors: 8
    },
    {
      id: 3,
      title: "Waterfront Estate Project",
      location: "Banana Island, Lagos",
      totalValue: "$120M",
      minInvestment: "$1M",
      expectedReturn: "25% IRR",
      duration: "42 months",
      tokenized: true,
      verified: true,
      description: "Ultra-luxury waterfront estate with premium amenities",
      image: "/api/placeholder/400/250",
      progress: 15,
      investors: 5
    }
  ];

  return (
    <section id="investments" className="py-20 bg-navy-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured Investment</span>
            <br />
            <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover exclusive real estate ventures curated for sophisticated investors seeking 
            premium returns in Lagos's most coveted locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="bg-navy-800/50 border-navy-700 overflow-hidden group hover:border-gold-500/30 transition-all duration-500">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {opportunity.verified && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  {opportunity.tokenized && (
                    <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30">
                      Tokenized
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-lg">{opportunity.title}</div>
                  <div className="flex items-center text-slate-300 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {opportunity.location}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-2xl font-bold text-gold-400">{opportunity.totalValue}</div>
                    <div className="text-sm text-slate-400">Total Project Value</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold text-green-400">{opportunity.expectedReturn}</div>
                    <div className="text-sm text-slate-400">Expected Return</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm">{opportunity.description}</p>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>Funding Progress</span>
                    <span>{opportunity.progress}%</span>
                  </div>
                  <div className="w-full bg-navy-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gold-500 to-gold-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${opportunity.progress}%` }}
                    />
                  </div>
                </div>

                {/* Investment Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">Min. Investment</div>
                    <div className="font-semibold text-white">{opportunity.minInvestment}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Duration</div>
                    <div className="font-semibold text-white flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {opportunity.duration}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-navy-700">
                  <div className="text-sm text-slate-400">
                    {opportunity.investors} investors joined
                  </div>
                  <Button size="sm" className="bg-gold-500 hover:bg-gold-600 text-navy-950">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10">
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
