
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../ui/Dropdown';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Profile dropdown items
  const profileItems = [
    { label: 'The Group', href: '/profile/group' },
    { label: 'Our Heritage', href: '/profile/heritage' },
    { label: 'Chairman\'s Message', href: '/profile/chairman' },
    { label: 'Vision & Mission', href: '/profile/vision' },
    { label: 'Quality Policy', href: '/profile/quality' },
  ];

  // Services dropdown items
  const servicesItems = [
    { label: 'Shipping Agency', href: '/services/shipping-agency' },
    { label: 'Freight Forwarding', href: '/services/freight-forwarding' },
    { label: 'Ship Chandling', href: '/services/ship-chandling' },
    { label: 'Ship\'s Support Services', href: '/services/ships-support' },
    { label: 'Stevedoring Services', href: '/services/stevedoring' },
  ];

  // Check if the path starts with a specific route
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo section with border */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center bg-white/90 backdrop-blur-sm border-2 border-black rounded-lg px-4 py-2">
              <div className="w-33 h-10 mr-2">
                <img src="/images/alsharif.png" alt="Al Sharif Group Flag Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-sm border-2 border-black rounded-lg px-6 py-2">
  <div className="flex items-center space-x-6">
    <Link
      to="/"
      className={`nav-link font-bold text-black hover:text-sharif-red ${
        isActive('/') ? 'active' : ''
      }`}
    >
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
    <Link
      to="/accreditations"
      className={`nav-link font-bold text-black hover:text-sharif-red ${
        isActive('/accreditations') ? 'active' : ''
      }`}
    >
      Accreditations
    </Link>
    <Link
      to="/related-info"
      className={`nav-link font-bold text-black hover:text-sharif-red ${
        isActive('/related-info') ? 'active' : ''
      }`}
    >
      Related Info
    </Link>
    <Link
      to="/contact-us"
      className={`nav-link font-bold text-black hover:text-sharif-red ${
        isActive('/contact-us') ? 'active' : ''
      }`}
    >
      Contact us
    </Link>
  </div>
</nav>

          
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="p-2 bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
