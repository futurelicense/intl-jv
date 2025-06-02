
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Mock authentication state - in real app this would come from context/auth provider
  const isAuthenticated = location.pathname !== '/' && location.pathname !== '/auth';

  const navItems = isAuthenticated ? [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Investments', href: '/dashboard' },
    { name: 'Opportunities', href: '/dashboard' },
    { name: 'Portfolio', href: '/dashboard' }
  ] : [
    { name: 'Investments', href: '#investments' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-gold-500" />
          <span className="text-xl font-bold gradient-text">IntlJV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            isAuthenticated ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-300 hover:text-gold-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-gold-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" className="text-slate-300 hover:text-gold-400">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" className="text-slate-300 hover:text-gold-400">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="ghost" className="text-slate-300 hover:text-gold-400">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy-900 border-navy-700">
            <nav className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => (
                isAuthenticated ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-4 pt-6">
                {isAuthenticated ? (
                  <>
                    <Button variant="ghost" className="text-slate-300 hover:text-gold-400 justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="text-slate-300 hover:text-gold-400 justify-start">
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="text-slate-300 hover:text-gold-400 justify-start w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold w-full">
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
