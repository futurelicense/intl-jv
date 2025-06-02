import { useState } from 'react';
import Header from '@/components/Header';
import BlockchainTracker from '@/components/BlockchainTracker';
import KYCVerification from '@/components/KYCVerification';
import MessagingSystem from '@/components/MessagingSystem';
import PortfolioChart from '@/components/PortfolioChart';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Wallet, Users, Bell, MessageSquare, Shield, Link as LinkIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const [user] = useState({
    name: 'Alexander Thompson',
    totalInvested: 2500000,
    currentValue: 2847500,
    activeInvestments: 5,
    returns: 13.9,
    kycStatus: 'verified' // verified, pending, rejected
  });

  const investments = [
    {
      id: 1,
      name: 'Victoria Island Premium Tower',
      location: 'Victoria Island, Lagos',
      invested: 500000,
      currentValue: 587500,
      returns: 17.5,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Lekki Phase 1 Residences',
      location: 'Lekki, Lagos',
      invested: 750000,
      currentValue: 862500,
      returns: 15.0,
      status: 'Active'
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
      verified: true
    },
    {
      id: 4,
      name: 'Banana Island Development',
      location: 'Banana Island, Lagos',
      minInvestment: 1000000,
      expectedReturns: 22.0,
      timeline: '36 months',
      verified: true
    }
  ];

  const handleViewDetails = (investmentId: number) => {
    navigate(`/property/${investmentId}`);
  };

  const handleInvestNow = (opportunityId: number) => {
    navigate(`/property/${opportunityId}`);
  };

  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-50 mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-slate-400">
            Manage your premium real estate portfolio
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Invested</p>
                <p className="text-2xl font-bold text-slate-50">
                  ${user.totalInvested.toLocaleString()}
                </p>
              </div>
              <Wallet className="h-8 w-8 text-gold-500" />
            </div>
          </Card>

          <Card className="glass-effect p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Current Value</p>
                <p className="text-2xl font-bold text-slate-50">
                  ${user.currentValue.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </Card>

          <Card className="glass-effect p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Investments</p>
                <p className="text-2xl font-bold text-slate-50">
                  {user.activeInvestments}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </Card>

          <Card className="glass-effect p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Returns</p>
                <p className="text-2xl font-bold text-green-400">
                  +{user.returns}%
                </p>
              </div>
              <Bell className="h-8 w-8 text-gold-500" />
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link to="/properties">
            <Card className="glass-effect p-4 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <LinkIcon className="h-6 w-6 text-gold-500" />
                <div>
                  <h3 className="font-medium text-slate-50">Browse Properties</h3>
                  <p className="text-sm text-slate-400">Explore new investment opportunities</p>
                </div>
              </div>
            </Card>
          </Link>

          <Card className="glass-effect p-4 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-medium text-slate-50">Messages</h3>
                <p className="text-sm text-slate-400">Chat with developers and support</p>
              </div>
            </div>
          </Card>

          <Card className="glass-effect p-4 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="font-medium text-slate-50">KYC Status</h3>
                <p className="text-sm text-slate-400">
                  {user.kycStatus === 'verified' ? 'Verified' : 'Complete verification'}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="investments" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-navy-800">
            <TabsTrigger value="investments" className="text-slate-300">My Investments</TabsTrigger>
            <TabsTrigger value="opportunities" className="text-slate-300">Opportunities</TabsTrigger>
            <TabsTrigger value="blockchain" className="text-slate-300">Blockchain</TabsTrigger>
            <TabsTrigger value="kyc" className="text-slate-300">KYC</TabsTrigger>
            <TabsTrigger value="messages" className="text-slate-300">Messages</TabsTrigger>
            <TabsTrigger value="portfolio" className="text-slate-300">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="investments" className="mt-6">
            <div className="grid gap-6">
              {investments.map((investment) => (
                <Card key={investment.id} className="glass-effect p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-50 mb-2">
                        {investment.name}
                      </h3>
                      <p className="text-slate-400 mb-4">{investment.location}</p>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-slate-400 text-sm">Invested</p>
                          <p className="text-slate-50 font-semibold">
                            ${investment.invested.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Current Value</p>
                          <p className="text-slate-50 font-semibold">
                            ${investment.currentValue.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Returns</p>
                          <p className="text-green-400 font-semibold">
                            +{investment.returns}%
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
                        {investment.status}
                      </span>
                      <div>
                        <Button 
                          className="bg-gold-500 hover:bg-gold-600 text-navy-950"
                          onClick={() => handleViewDetails(investment.id)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="mt-6">
            <div className="grid gap-6">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="glass-effect p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate-50">
                          {opportunity.name}
                        </h3>
                        {opportunity.verified && (
                          <span className="inline-block px-2 py-1 bg-gold-500/20 text-gold-400 rounded text-xs">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 mb-4">{opportunity.location}</p>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-slate-400 text-sm">Min. Investment</p>
                          <p className="text-slate-50 font-semibold">
                            ${opportunity.minInvestment.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Expected Returns</p>
                          <p className="text-green-400 font-semibold">
                            {opportunity.expectedReturns}%
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Timeline</p>
                          <p className="text-slate-50 font-semibold">
                            {opportunity.timeline}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Button 
                        className="bg-gold-500 hover:bg-gold-600 text-navy-950"
                        onClick={() => handleInvestNow(opportunity.id)}
                      >
                        Invest Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="mt-6">
            <BlockchainTracker />
          </TabsContent>

          <TabsContent value="kyc" className="mt-6">
            <KYCVerification />
          </TabsContent>

          <TabsContent value="messages" className="mt-6">
            <MessagingSystem />
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <PortfolioChart />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
