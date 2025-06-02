
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, Clock, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const BlockchainTracker = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 'tx_001',
      hash: '0x1234567890abcdef1234567890abcdef12345678',
      type: 'Investment',
      amount: 250000,
      property: 'Victoria Island Premium Tower',
      status: 'confirmed',
      timestamp: '2024-06-02T10:30:00Z',
      blockNumber: 18450123,
      gasUsed: 0.0025
    },
    {
      id: 'tx_002',
      hash: '0xabcdef1234567890abcdef1234567890abcdef12',
      type: 'Dividend',
      amount: 12500,
      property: 'Lekki Phase 1 Residences',
      status: 'confirmed',
      timestamp: '2024-06-01T14:22:00Z',
      blockNumber: 18449856,
      gasUsed: 0.0018
    },
    {
      id: 'tx_003',
      hash: '0x567890abcdef1234567890abcdef1234567890ab',
      type: 'Investment',
      amount: 500000,
      property: 'Ikoyi Luxury Apartments',
      status: 'pending',
      timestamp: '2024-06-02T11:45:00Z',
      blockNumber: null,
      gasUsed: null
    }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshTransactions = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Update pending transactions to confirmed
    setTransactions(prev => prev.map(tx => 
      tx.status === 'pending' 
        ? { ...tx, status: 'confirmed', blockNumber: 18450124, gasUsed: 0.0022 }
        : tx
    ));
    
    setIsRefreshing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-gold-500" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: 'bg-green-500/20 text-green-400',
      pending: 'bg-gold-500/20 text-gold-400',
      failed: 'bg-red-500/20 text-red-400'
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
  };

  return (
    <Card className="glass-effect p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-slate-50">Blockchain Transactions</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={refreshTransactions}
          disabled={isRefreshing}
          className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-navy-700">
              <TableHead className="text-slate-300">Transaction</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Amount</TableHead>
              <TableHead className="text-slate-300">Property</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-slate-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className="border-navy-700 hover:bg-navy-800/50">
                <TableCell className="font-mono text-slate-300">
                  {truncateHash(tx.hash)}
                </TableCell>
                <TableCell className="text-slate-300">{tx.type}</TableCell>
                <TableCell className="text-slate-50 font-semibold">
                  ${tx.amount.toLocaleString()}
                </TableCell>
                <TableCell className="text-slate-300 max-w-[200px] truncate">
                  {tx.property}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(tx.status)}
                    {getStatusBadge(tx.status)}
                  </div>
                </TableCell>
                <TableCell className="text-slate-300">
                  {formatDate(tx.timestamp)}
                </TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gold-400 hover:text-gold-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 text-xs text-slate-400 space-y-1">
        <p>• All transactions are secured by Ethereum blockchain</p>
        <p>• Smart contracts ensure automatic execution and transparency</p>
        <p>• Gas fees are optimized for cost-effective transactions</p>
      </div>
    </Card>
  );
};

export default BlockchainTracker;
