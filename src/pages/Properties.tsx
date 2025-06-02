
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, MapPin, TrendingUp, Users, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('returns');
  const [filterBy, setFilterBy] = useState('all');

  const properties = [
    {
      id: 1,
      name: 'Victoria Island Premium Tower',
      location: 'Victoria Island, Lagos',
      description: 'Luxury commercial and residential tower in prime location',
      image: '/placeholder.svg',
      totalValue: 15000000,
      availableTokens: 6000,
      tokenPrice: 2500,
      minInvestment: 250000,
      expectedReturns: 18.5,
      timeline: '24 months',
      verified: true,
      currentInvestors: 23,
      fundingProgress: 67,
      type: 'Commercial'
    },
    {
      id: 2,
      name: 'Lekki Phase 1 Residences',
      location: 'Lekki, Lagos',
      description: 'Modern residential complex with premium amenities',
      image: '/placeholder.svg',
      totalValue: 8500000,
      availableTokens: 3400,
      tokenPrice: 2500,
      minInvestment: 200000,
      expectedReturns: 15.0,
      timeline: '18 months',
      verified: true,
      currentInvestors: 18,
      fundingProgress: 45,
      type: 'Residential'
    },
    {
      id: 3,
      name: 'Ikoyi Luxury Apartments',
      location: 'Ikoyi, Lagos',
      description: 'High-end apartment complex in prestigious area',
      image: '/placeholder.svg',
      totalValue: 12000000,
      availableTokens: 4800,
      tokenPrice: 2500,
      minInvestment: 300000,
      expectedReturns: 20.2,
      timeline: '30 months',
      verified: true,
      currentInvestors: 31,
      fundingProgress: 78,
      type: 'Residential'
    },
    {
      id: 4,
      name: 'Banana Island Development',
      location: 'Banana Island, Lagos',
      description: 'Ultra-luxury development on exclusive island',
      image: '/placeholder.svg',
      totalValue: 25000000,
      availableTokens: 10000,
      tokenPrice: 2500,
      minInvestment: 500000,
      expectedReturns: 22.0,
      timeline: '36 months',
      verified: true,
      currentInvestors: 15,
      fundingProgress: 32,
      type: 'Luxury'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || property.type.toLowerCase() === filterBy.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'returns':
        return b.expectedReturns - a.expectedReturns;
      case 'funding':
        return b.fundingProgress - a.fundingProgress;
      case 'value':
        return b.totalValue - a.totalValue;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-50 mb-2">Investment Properties</h1>
          <p className="text-slate-400">Discover verified real estate opportunities in Lagos</p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search properties or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-navy-800 border-navy-700 text-slate-50"
            />
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="returns">Expected Returns</SelectItem>
              <SelectItem value="funding">Funding Progress</SelectItem>
              <SelectItem value="value">Total Value</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProperties.map((property) => (
            <Card key={property.id} className="glass-effect overflow-hidden">
              <div className="aspect-video bg-navy-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-slate-400">Property Image</p>
                </div>
                {property.verified && (
                  <Badge className="absolute top-3 right-3 bg-gold-500/20 text-gold-400 border-gold-500/30">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-50">{property.name}</h3>
                  <Badge variant="outline" className="text-xs">{property.type}</Badge>
                </div>
                
                <div className="flex items-center text-slate-400 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{property.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Expected Returns</span>
                    <span className="text-green-400 font-semibold">{property.expectedReturns}%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Min. Investment</span>
                    <span className="text-slate-50 font-semibold">${property.minInvestment.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Funding Progress</span>
                    <span className="text-slate-50 font-semibold">{property.fundingProgress}%</span>
                  </div>
                  
                  <div className="w-full bg-navy-800 rounded-full h-2">
                    <div 
                      className="bg-gold-500 h-2 rounded-full" 
                      style={{ width: `${property.fundingProgress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-slate-400 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {property.currentInvestors} investors
                    </div>
                    <div className="text-slate-400 text-sm">{property.timeline}</div>
                  </div>
                </div>
                
                <Link to={`/property/${property.id}`}>
                  <Button className="w-full mt-4 bg-gold-500 hover:bg-gold-600 text-navy-950">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
