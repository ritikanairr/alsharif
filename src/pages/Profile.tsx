
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {
  const { section } = useParams<{ section: string }>();
  
  useEffect(() => {
    if (!section) {
      window.history.replaceState({}, '', '/profile/group');
    }
  }, [section]);

  const sidebarLinks = [
    { id: 'group', label: 'The Group' },
    { id: 'heritage', label: 'Our Heritage' },
    { id: 'chairman', label: 'Chairman\'s Message' },
    { id: 'vision', label: 'Vision & Mission' },
    { id: 'quality', label: 'Quality Policy' },
  ];

  const renderContent = () => {
    switch (section) {
      case 'group':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">The Group</h2>
            <div className="mb-6">
              <img 
                src="/images/building.jpg" 
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
                src="/images/heritage.png" 
                alt="Al Sharif Heritage" 
                className="w-full rounded-lg mb-6"
              />
            </div>
            <p className="mb-4">
              Al Sharif Group’s journey dates back to the 1890s. From a humble beginning our visionary leader has led us to where we are today, as a leader in the shipping industry in the Kingdom of Bahrain.
            </p>
            <p className="mb-4">
              The Al Sharif family has laid the foundation for Al Sharif Shipping Services which still remain as one of the oldest shipping companies in Bahrain and have played a prominent role in the Kingdom’s burgeoning trade industry.
            </p>
            <p>
              Later in 1957 the Group was commercially established as a full-fledged Liner Shipping Agency which diversified into ocean and airfreight forwarding, and other allied services which is the backbone of the industry. Meticulous management skills, hard work and dedication coupled with experienced professionals across generations have ensured that we continue to deliver superior services to our principals and customers.
            </p>
          </div>
        );
      default:
        return (
          <div className="text-center py-10">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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