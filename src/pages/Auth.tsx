
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    investorType: 'individual'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass-effect rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-gold-500" />
              <span className="text-xl font-bold gradient-text">IntlJV</span>
            </div>
            <Link to="/" className="text-slate-400 hover:text-gold-400">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-50 mb-2">
              {isLogin ? 'Welcome Back' : 'Join IntlJV'}
            </h1>
            <p className="text-slate-400">
              {isLogin 
                ? 'Access your premium investment portfolio' 
                : 'Create your exclusive investor account'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="bg-navy-800 border-navy-700 text-slate-50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="bg-navy-800 border-navy-700 text-slate-50"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-slate-300">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-navy-800 border-navy-700 text-slate-50"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-slate-300">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="bg-navy-800 border-navy-700 text-slate-50"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword" className="text-slate-300">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="bg-navy-800 border-navy-700 text-slate-50"
                  required
                />
              </div>
            )}

            <Button 
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-gold-400 hover:text-gold-300 text-sm"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
