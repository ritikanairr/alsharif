import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../ui/Dropdown';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const profileItems = [
    { label: 'The Group', href: '/profile/group' },
    { label: 'Our Heritage', href: '/profile/heritage' },
    { label: 'Chairman\'s Message', href: '/profile/chairman' },
    { label: 'Vision & Mission', href: '/profile/vision' },
    { label: 'Quality Policy', href: '/profile/quality' },
  ];

  const servicesItems = [
    { label: 'Shipping Agency', href: '/services/shipping-agency' },
    { label: 'Freight Forwarding', href: '/services/freight-forwarding' },
    { label: 'Ship Chandling', href: '/services/ship-chandling' },
    { label: 'Ship\'s Support Services', href: '/services/ships-support' },
    { label: 'Stevedoring Services', href: '/services/stevedoring' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 py-4 px-4 transition-all ${scrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center bg-white/90 border-black border-2 backdrop-blur-sm rounded-2xl px-4 py-1">
            <div className="w-[290px] h-[53px] mr-2 ">
              <img src="/images/alsharif.png" alt="Al Sharif Group Flag Logo" className="w-full h-full object-cover" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-2 border-black border-2">
            <div className="flex items-center space-x-6">
              <Link to="/" className={`nav-link font-bold text-black hover:text-sharif-red ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
              <Dropdown
                label={<span className="font-bold">Profile</span>}
                items={profileItems}
                isActive={isActive('/profile')}
              />
              <Dropdown
                label={<span className="font-bold">Services</span>}
                items={servicesItems}
                isActive={isActive('/services')}
              />
              <Link to="/accreditations" className={`nav-link font-bold text-black hover:text-sharif-red ${isActive('/accreditations') ? 'active' : ''}`}>
                Accreditations
              </Link>
              <Link to="/related-info" className={`nav-link font-bold text-black hover:text-sharif-red ${isActive('/related-info') ? 'active' : ''}`}>
                Related Info
              </Link>
              <Link to="/contact-us" className={`nav-link font-bold text-black hover:text-sharif-red ${isActive('/contact-us') ? 'active' : ''}`}>
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="mt-4 flex flex-col bg-white/90 backdrop-blur-sm rounded-lg p-4 space-y-4 md:hidden">
            <Link to="/" className={`font-bold text-black hover:text-sharif-red ${isActive('/') ? 'text-sharif-red' : ''}`} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <div>
              <span className="font-bold text-black">Profile</span>
              <div className="ml-4 mt-2 space-y-2">
                {profileItems.map(item => (
                  <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-sharif-red">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-black">Services</span>
              <div className="ml-4 mt-2 space-y-2">
                {servicesItems.map(item => (
                  <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-sharif-red">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/accreditations" className={`font-bold text-black hover:text-sharif-red ${isActive('/accreditations') ? 'text-sharif-red' : ''}`} onClick={() => setMenuOpen(false)}>
              Accreditations
            </Link>
            <Link to="/related-info" className={`font-bold text-black hover:text-sharif-red ${isActive('/related-info') ? 'text-sharif-red' : ''}`} onClick={() => setMenuOpen(false)}>
              Related Info
            </Link>
            <Link to="/contact-us" className={`font-bold text-black hover:text-sharif-red ${isActive('/contact-us') ? 'text-sharif-red' : ''}`} onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
