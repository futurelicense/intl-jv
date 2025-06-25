
import { useState } from 'react';
import Header from '@/components/Header';
import BlockchainTracker from '@/components/BlockchainTracker';
import KYCVerification from '@/components/KYCVerification';
import MessagingSystem from '@/components/MessagingSystem';
import PortfolioChart from '@/components/PortfolioChart';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Wallet, Users, Bell, MessageSquare, Shield, Link as LinkIcon, ArrowUpRight, Calendar, MapPin, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const [user] = useState({
    name: 'Alexander Thompson',
    totalInvested: 2500000,
    currentValue: 2847500,
    activeInvestments: 5,
    returns: 13.9,
    kycStatus: 'verified'
  });

  const investments = [
    {
      id: 1,
      name: 'Victoria Island Premium Tower',
      location: 'Victoria Island, Lagos',
      invested: 500000,
      currentValue: 587500,
      returns: 17.5,
      status: 'Active',
      image: '/placeholder.svg',
      completion: 67
    },
    {
      id: 2,
      name: 'Lekki Phase 1 Residences',
      location: 'Lekki, Lagos',
      invested: 750000,
      currentValue: 862500,
      returns: 15.0,
      status: 'Active',
      image: '/placeholder.svg',
      completion: 85
    }
  ];

  const opportunities = [
    {
      id: 3,
      name: 'Ikoyi Luxury Apartments',
      location: 'Ikoyi, Lagos',
      minInvestment: 250000,
      expectedReturns: 18.5,
      timeline: '24 months',
      verified: true,
      image: '/placeholder.svg',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Banana Island Development',
      location: 'Banana Island, Lagos',
      minInvestment: 1000000,
      expectedReturns: 22.0,
      timeline: '36 months',
      verified: true,
      image: '/placeholder.svg',
      rating: 4.9
    }
  ];

  const handleViewDetails = (investmentId: number) => {
    navigate(`/property/${investmentId}`);
  };

  const handleInvestNow = (opportunityId: number) => {
    navigate(`/property/${opportunityId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-50 mb-3 gradient-text">
                Welcome back, {user.name.split(' ')[0]}
              </h1>
              <p className="text-slate-400 text-lg">
                Manage your premium real estate portfolio
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                KYC Verified
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                <Calendar className="w-3 h-3 mr-1" />
                Active Since Jan 2024
              </Badge>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gold-500/20 rounded-xl">
                <Wallet className="h-6 w-6 text-gold-500" />
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 mb-1">Total Invested</div>
                <div className="text-2xl font-bold text-slate-50">
                  ${(user.totalInvested / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              ${user.totalInvested.toLocaleString()}
            </div>
          </Card>

          <Card className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 mb-1">Current Value</div>
                <div className="text-2xl font-bold text-slate-50">
                  ${(user.currentValue / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-green-400">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +{user.returns}% (+${(user.currentValue - user.totalInvested).toLocaleString()})
            </div>
          </Card>

          <Card className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 mb-1">Active Investments</div>
                <div className="text-2xl font-bold text-slate-50">
                  {user.activeInvestments}
                </div>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              Properties across Lagos
            </div>
          </Card>

          <Card className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Bell className="h-6 w-6 text-purple-500" />
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 mb-1">Monthly Growth</div>
                <div className="text-2xl font-bold text-slate-50">
                  +7.4%
                </div>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              Last 30 days
            </div>
          </Card>
        </div>

        {/* Enhanced Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/properties">
            <Card className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gold-500/20 rounded-xl group-hover:bg-gold-500/30 transition-colors">
                    <LinkIcon className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-50 mb-1">Browse Properties</h3>
                    <p className="text-sm text-slate-400">Explore new investment opportunities</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-gold-400 transition-colors" />
              </div>
            </Card>
          </Link>

          <Card className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-50 mb-1">Messages</h3>
                  <p className="text-sm text-slate-400">Chat with developers and support</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-500 text-white text-xs px-2 py-1">3</Badge>
                <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          </Card>

          <Card className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-50 mb-1">KYC Status</h3>
                  <p className="text-sm text-slate-400">Verified & secured</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-green-400 transition-colors" />
            </div>
          </Card>
        </div>

        {/* Enhanced Tabs */}
        <Tabs defaultValue="investments" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-navy-800/50 backdrop-blur-sm border border-navy-700/50 rounded-xl p-1">
            <TabsTrigger value="investments" className="text-slate-300 data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400 rounded-lg">My Investments</TabsTrigger>
            <TabsTrigger value="opportunities" className="text-slate-300 data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400 rounded-lg">Opportunities</TabsTrigger>
            <TabsTrigger value="blockchain" className="text-slate-300 data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400 rounded-lg">Blockchain</TabsTrigger>
            <TabsTrigger value="kyc" className="text-slate-300 data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400 rounded-lg">KYC</TabsTrigger>
            <TabsTrigger value="messages" className="text-slate-300 data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400 rounded-lg">Messages</TabsTrigger>
            <TabsTrigger value="portfolio" className="text-slate-300 data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400 rounded-lg">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="investments" className="mt-8">
            <div className="grid gap-8">
              {investments.map((investment) => (
                <Card key={investment.id} className="glass-effect overflow-hidden hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-48 h-48 lg:h-auto bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                      <div className="text-slate-400 text-center">
                        <div className="w-16 h-16 bg-navy-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">🏢</span>
                        </div>
                        <p className="text-xs">Property Image</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-50 mb-2">
                            {investment.name}
                          </h3>
                          <div className="flex items-center text-slate-400 mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            {investment.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-2">
                            {investment.status}
                          </Badge>
                          <div className="text-sm text-slate-400">
                            {investment.completion}% Complete
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-navy-800/30 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Invested Amount</p>
                          <p className="text-slate-50 font-semibold text-lg">
                            ${investment.invested.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-navy-800/30 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Current Value</p>
                          <p className="text-slate-50 font-semibold text-lg">
                            ${investment.currentValue.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-navy-800/30 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Total Returns</p>
                          <p className="text-green-400 font-semibold text-lg">
                            +{investment.returns}%
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-full bg-navy-700 rounded-full h-2 max-w-[200px]">
                            <div 
                              className="bg-gradient-to-r from-gold-500 to-gold-400 h-2 rounded-full" 
                              style={{ width: `${investment.completion}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-slate-400">{investment.completion}%</span>
                        </div>
                        <Button 
                          className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-950 font-medium px-6"
                          onClick={() => handleViewDetails(investment.id)}
                        >
                          View Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="mt-8">
            <div className="grid gap-8">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="glass-effect overflow-hidden hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-48 h-48 lg:h-auto bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                      <div className="text-slate-400 text-center">
                        <div className="w-16 h-16 bg-navy-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">🏗️</span>
                        </div>
                        <p className="text-xs">Development</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-slate-50">
                              {opportunity.name}
                            </h3>
                            {opportunity.verified && (
                              <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30 text-xs px-2 py-1">
                                ✓ Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-slate-400 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {opportunity.location}
                          </div>
                          <div className="flex items-center text-slate-400">
                            <Star className="w-4 h-4 mr-1 text-gold-400" />
                            <span className="text-gold-400">{opportunity.rating}</span>
                            <span className="ml-1">rating</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-navy-800/30 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Min. Investment</p>
                          <p className="text-slate-50 font-semibold text-lg">
                            ${opportunity.minInvestment.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-navy-800/30 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Expected Returns</p>
                          <p className="text-green-400 font-semibold text-lg">
                            {opportunity.expectedReturns}%
                          </p>
                        </div>
                        <div className="bg-navy-800/30 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Timeline</p>
                          <p className="text-slate-50 font-semibold text-lg">
                            {opportunity.timeline}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-end">
                        <Button 
                          className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-950 font-medium px-6"
                          onClick={() => handleInvestNow(opportunity.id)}
                        >
                          Invest Now
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="mt-8">
            <BlockchainTracker />
          </TabsContent>

          <TabsContent value="kyc" className="mt-8">
            <KYCVerification />
          </TabsContent>

          <TabsContent value="messages" className="mt-8">
            <MessagingSystem />
          </TabsContent>

          <TabsContent value="portfolio" className="mt-8">
            <PortfolioChart />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
