
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {
  const { section } = useParams<{ section: string }>();
  
  // Set default section if none is specified
  useEffect(() => {
    if (!section) {
      window.history.replaceState({}, '', '/profile/group');
    }
  }, [section]);

  // Sidebar navigation links
  const sidebarLinks = [
    { id: 'group', label: 'The Group' },
    { id: 'heritage', label: 'Our Heritage' },
    { id: 'chairman', label: 'Chairman\'s Message' },
    { id: 'vision', label: 'Vision & Mission' },
    { id: 'quality', label: 'Quality Policy' },
  ];

  // Content based on section
  const renderContent = () => {
    switch (section) {
      case 'group':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">The Group</h2>
            <div className="mb-6">
              <img 
                src="/images/al-sharif-building.jpg" 
                alt="Al Sharif Holdings Building" 
                className="w-full rounded-lg mb-6"
              />
            </div>
            <p className="mb-4">
              Founded over a century ago in the year 1890 by Mr. Mohammed Mirza Ismail Al Sharif, Al Sharif Group (AG) has grown to become the largest shipping house in the Kingdom of Bahrain. AG has emerged as a synonym for quality shipping and logistics services. 
            </p>
            <p className="mb-4">
              Over the years the company has evolved beyond Shipping Agency Services and forayed into Offshore Supply Services, Freight Forwarding, Project Cargo Handling, Chartering, and Logistics & Warehousing Services.
            </p>
            <p className="mb-4">
              By employing a dedicated team of highly experienced and motivated shipping professionals, we have continued to grow in the local market. This has helped us offer world-class services to our ever-expanding customer base from across the world by thoroughly understanding the unique requirements of our principals and customers. 
            </p>
            <p>
              Our specialist teams for cargo operations are fully trained and equipped to handle all kinds of vessels including ULCC, VLCC, product tankers, container mother ships, feeder ships, RO-RO ships, cattle ships, cruise ships, Naval ships and more.
            </p>
          </div>
        );
      case 'heritage':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Our Heritage</h2>
            <div className="mb-6">
              <img 
                src="/images/heritage.jpg" 
                alt="Al Sharif Heritage" 
                className="w-full rounded-lg mb-6"
              />
            </div>
            <p className="mb-4">
              With a legacy dating back to 1890, Al Sharif Group carries a rich heritage of maritime excellence and trusted service in the Kingdom of Bahrain. Our story began with a vision to establish a reliable shipping service that would connect Bahrain to the world.
            </p>
            <p className="mb-4">
              Through generations, we have upheld the founding principles of integrity, reliability, and excellence. Each era has added a new dimension to our services while maintaining our core values.
            </p>
            <p>
              Today, we continue to honor our heritage by combining traditional values with modern innovations, ensuring that Al Sharif Group remains at the forefront of the shipping and logistics industry in the region.
            </p>
          </div>
        );
      // Add other profile sections as needed
      default:
        return (
          <div className="text-center py-10">
            <p>Please select a section from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-[90px]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4 text-sharif-red">Profile</h3>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.id}
                to={`/profile/${link.id}`}
                className={`block py-2 px-3 rounded-md transition-colors ${
                  section === link.id
                    ? 'bg-sharif-red text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 bg-white rounded-lg p-6 shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;