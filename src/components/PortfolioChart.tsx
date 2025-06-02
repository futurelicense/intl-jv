
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';

const PortfolioChart = () => {
  const portfolioData = [
    { month: 'Jan', value: 2000000, invested: 1800000 },
    { month: 'Feb', value: 2100000, invested: 1900000 },
    { month: 'Mar', value: 2250000, invested: 2100000 },
    { month: 'Apr', value: 2400000, invested: 2300000 },
    { month: 'May', value: 2650000, invested: 2500000 },
    { month: 'Jun', value: 2847500, invested: 2500000 }
  ];

  const chartConfig = {
    value: {
      label: "Portfolio Value",
      color: "#10b981",
    },
    invested: {
      label: "Total Invested",
      color: "#d4af37",
    },
  };

  return (
    <div className="space-y-6">
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-slate-50">Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <AreaChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                labelFormatter={(value) => `Month: ${value}`}
                formatter={(value, name) => [
                  `$${Number(value).toLocaleString()}`,
                  name === 'value' ? 'Portfolio Value' : 'Total Invested'
                ]}
              />
              <Area
                type="monotone"
                dataKey="invested"
                stackId="1"
                stroke="var(--color-invested)"
                fill="var(--color-invested)"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="value"
                stackId="2"
                stroke="var(--color-value)"
                fill="var(--color-value)"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-effect p-4">
          <h4 className="text-slate-300 text-sm mb-2">Total Returns</h4>
          <p className="text-2xl font-bold text-green-400">+13.9%</p>
          <p className="text-slate-400 text-xs">+$347,500</p>
        </Card>
        
        <Card className="glass-effect p-4">
          <h4 className="text-slate-300 text-sm mb-2">Best Performer</h4>
          <p className="text-lg font-semibold text-slate-50">Victoria Island Tower</p>
          <p className="text-green-400 text-sm">+17.5% returns</p>
        </Card>
        
        <Card className="glass-effect p-4">
          <h4 className="text-slate-300 text-sm mb-2">Monthly Growth</h4>
          <p className="text-2xl font-bold text-blue-400">+7.4%</p>
          <p className="text-slate-400 text-xs">Last 30 days</p>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioChart;
