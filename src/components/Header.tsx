
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, User, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isAuthenticated = location.pathname !== '/' && location.pathname !== '/auth';

  const navItems = isAuthenticated ? [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Portfolio', href: '/dashboard' },
    { name: 'Opportunities', href: '/properties' },
    { name: 'Analytics', href: '/dashboard' }
  ] : [
    { name: 'Investments', href: '#investments' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-2 bg-gold-500/10 rounded-xl group-hover:bg-gold-500/20 transition-colors">
            <Shield className="h-7 w-7 text-gold-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">IntlJV</span>
            <span className="text-xs text-slate-400 -mt-1">Premium Real Estate</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            isAuthenticated ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </a>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 group">
                <User className="h-4 w-4 mr-2" />
                Profile
                <ChevronDown className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-200" />
              </Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 font-medium">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gold-500 hover:bg-gold-600 text-slate-900 font-bold px-6 rounded-xl shadow-lg shadow-gold-500/25">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-900 border-slate-800 w-80">
            <nav className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => (
                isAuthenticated ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-4 pt-6 border-t border-slate-800">
                {isAuthenticated ? (
                  <>
                    <Button variant="ghost" className="text-slate-300 hover:text-white justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="text-slate-300 hover:text-white justify-start">
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="text-slate-300 hover:text-white justify-start w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="bg-gold-500 hover:bg-gold-600 text-slate-900 font-bold w-full rounded-xl">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
