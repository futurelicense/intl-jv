
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, TrendingUp, Users, Calendar } from 'lucide-react';

const Property = () => {
  const { id } = useParams();
  const [investmentAmount, setInvestmentAmount] = useState('');

  // Mock property data - in real app this would come from API
  const property = {
    id: id,
    name: 'Victoria Island Premium Tower',
    location: 'Victoria Island, Lagos',
    description: 'A luxury commercial and residential tower in the heart of Victoria Island, featuring premium amenities and strategic positioning for maximum returns.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    totalValue: 15000000,
    availableTokens: 6000,
    tokenPrice: 2500,
    minInvestment: 250000,
    expectedReturns: 18.5,
    timeline: '24 months',
    verified: true,
    currentInvestors: 23,
    fundingProgress: 67,
    features: [
      '24-floor premium tower',
      'Prime Victoria Island location',
      'Mixed-use development',
      'Smart building technology',
      'Secured parking facilities',
      'Premium retail spaces'
    ],
    financials: {
      totalCost: 15000000,
      landCost: 8000000,
      constructionCost: 6500000,
      contingency: 500000,
      projectedValue: 22000000,
      expectedROI: 46.7
    },
    timeline_details: [
      { phase: 'Land Acquisition', duration: '2 months', status: 'completed' },
      { phase: 'Planning & Permits', duration: '4 months', status: 'completed' },
      { phase: 'Construction Phase 1', duration: '8 months', status: 'in-progress' },
      { phase: 'Construction Phase 2', duration: '8 months', status: 'pending' },
      { phase: 'Final Completion', duration: '2 months', status: 'pending' }
    ]
  };

  const handleInvest = () => {
    console.log('Investment amount:', investmentAmount);
    // Handle investment logic
  };

  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-6">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center text-gold-400 hover:text-gold-300 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-slate-50">{property.name}</h1>
                {property.verified && (
                  <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-slate-400 text-lg mb-4">{property.location}</p>
              <p className="text-slate-300 leading-relaxed">{property.description}</p>
            </div>

            {/* Property Images */}
            <Card className="glass-effect p-6 mb-8">
              <h3 className="text-xl font-semibold text-slate-50 mb-4">Property Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {property.images.map((image, index) => (
                  <div key={index} className="aspect-video bg-navy-800 rounded-lg flex items-center justify-center">
                    <p className="text-slate-400">Property Image {index + 1}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Features */}
            <Card className="glass-effect p-6 mb-8">
              <h3 className="text-xl font-semibold text-slate-50 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Financial Details */}
            <Card className="glass-effect p-6 mb-8">
              <h3 className="text-xl font-semibold text-slate-50 mb-4">Financial Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-slate-300 font-medium mb-3">Project Costs</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Land Acquisition</span>
                      <span className="text-slate-50">${property.financials.landCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Construction</span>
                      <span className="text-slate-50">${property.financials.constructionCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contingency</span>
                      <span className="text-slate-50">${property.financials.contingency.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-navy-700 pt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-300">Total Cost</span>
                        <span className="text-slate-50">${property.financials.totalCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-300 font-medium mb-3">Projected Returns</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Projected Value</span>
                      <span className="text-slate-50">${property.financials.projectedValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Expected ROI</span>
                      <span className="text-green-400 font-semibold">{property.financials.expectedROI}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="glass-effect p-6">
              <h3 className="text-xl font-semibold text-slate-50 mb-4">Project Timeline</h3>
              <div className="space-y-4">
                {property.timeline_details.map((phase, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`h-4 w-4 rounded-full mr-4 ${
                      phase.status === 'completed' ? 'bg-green-500' :
                      phase.status === 'in-progress' ? 'bg-gold-500' : 'bg-slate-600'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">{phase.phase}</span>
                        <span className="text-slate-400 text-sm">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Investment Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass-effect p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Investment Details</h3>
              
              {/* Investment Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Token Price</span>
                  <span className="text-slate-50 font-semibold">${property.tokenPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Available Tokens</span>
                  <span className="text-slate-50 font-semibold">{property.availableTokens.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Min. Investment</span>
                  <span className="text-slate-50 font-semibold">${property.minInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Expected Returns</span>
                  <span className="text-green-400 font-semibold">{property.expectedReturns}%</span>
                </div>
              </div>

              {/* Funding Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400">Funding Progress</span>
                  <span className="text-slate-50 font-semibold">{property.fundingProgress}%</span>
                </div>
                <div className="w-full bg-navy-800 rounded-full h-2">
                  <div 
                    className="bg-gold-500 h-2 rounded-full" 
                    style={{ width: `${property.fundingProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-slate-400">
                  <span>{property.currentInvestors} investors</span>
                  <span>{property.timeline} timeline</span>
                </div>
              </div>

              {/* Investment Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    placeholder={`Min. $${property.minInvestment.toLocaleString()}`}
                    className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-md text-slate-50 placeholder-slate-400"
                  />
                </div>
                
                <Button 
                  onClick={handleInvest}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold"
                  disabled={!investmentAmount || parseInt(investmentAmount) < property.minInvestment}
                >
                  Invest Now
                </Button>
                
                <p className="text-xs text-slate-400 text-center">
                  Secured by blockchain smart contracts
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-navy-700">
                <div className="text-center">
                  <TrendingUp className="h-5 w-5 text-gold-500 mx-auto mb-1" />
                  <p className="text-xs text-slate-400">ROI</p>
                  <p className="text-sm font-semibold text-slate-50">{property.expectedReturns}%</p>
                </div>
                <div className="text-center">
                  <Users className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                  <p className="text-xs text-slate-400">Investors</p>
                  <p className="text-sm font-semibold text-slate-50">{property.currentInvestors}</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-5 w-5 text-green-500 mx-auto mb-1" />
                  <p className="text-xs text-slate-400">Timeline</p>
                  <p className="text-sm font-semibold text-slate-50">{property.timeline}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
