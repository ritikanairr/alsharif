import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '@/components/Slideshow';

const Profile = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  const sidebarSections = [
    {
      id: 'group',
      label: 'The Group',
      page: '/profile/group',
      image: '/images/group.jpg',
    },
    {
      id: 'heritage',
      label: 'Our Heritage',
      page: '/profile/heritage',
      image: '/images/heritage.png',
    },
    {
      id: 'chairman',
      label: "Chairman's Message",
      page: '/profile/chairman',
      image: '/images/mic.jpg',
    },
    {
      id: 'vision',
      label: 'Vision & Mission',
      page: '/profile/vision',
      image: '/images/eye.png',
    },
    {
      id: 'quality',
      label: 'Quality Policy',
      page: '/profile/quality',
      image: '/images/qua.jpg',
    },
  ];

  const navigateToSection = (page: string) => navigate(page);

  const getCurrentContent = () => {
    switch (section) {
      case 'group':
        return (
          <div className="animate-fade-in">
            <h1 className="text-2xl font-Futura font-bold mb-6">The Group</h1>
            <div className="mb-6 font-Roboto">
              <img 
                src="/images/building.jpg" 
                alt="Al Sharif Holdings Building" 
                className="w-full rounded-2xl mb-6"
              />
            </div>
            <p className="mb-4 text-gray-700">
             Founded over a century ago in the year 1890 by Mr. Mohammed Mirza Ismail Al Sharif, Al Sharif Group (AG) has grown to become the largest shipping house in the Kingdom of Bahrain. AG has emerged as a synonym for quality shipping and logistics services. Over the years the company has evolved beyond Shipping Agency Services and forayed into Offshore Supply Services, Freight Forwarding, Project Cargo Handling, Chartering, and Logistics & Warehousing Services.

            </p>
            <p className="mb-4 text-gray-700">
             By employing a dedicated team of highly experienced and motivated shipping professionals, we have continued to grow in the local market. This has helped us offer world-class services to our ever-expanding customer base from across the world by thoroughly understanding the unique requirements of our principals and customers. Our specialist teams for cargo operations are fully trained and equipped to handle all kinds of vessels including ULCC, VLCC, product tankers, container mother ships, feeder ships, RO-RO ships, cattle ships, cruise ships, Naval ships and more. 
            </p>
            <p className="mb-4 text-gray-700">
            Our dedicated break bulk and bulk service teams are always ready to handle vessels 24/7, carrying a wide range of cargoes ranging from iron ore to alumina, cement, steel, timber, raw sugar, food grade items and more. 

            </p>
            <p className="mb-4 text-gray-700">
             With an extensive range of services that include vessel, cargo and crew handling, dry-docking, repairs, provision supply, spares, bunkering & husbanding, AG offers unparalleled dedication even when time is a constraint. Fast and efficient vessel turnaround is further ensured by our team of professionals who have built an excellent relationship with the port, customs & terminal authorities.

            </p>
            <p className="mb-4 text-gray-700">
              Our high standards of service are well supported by state of the art IT technology and communication systems offering 24/7 real-time information to every principal ensuring operational efficiency, cost savings and faster turnaround of our ships.
            </p>
            <p className="text-gray-700">
              Our sales / marketing and customer service teams of well trained and experienced professionals with a sound knowledge and experience in the marketing liner, break bulk & project cargo service has access to our central database system which helps them in offering required solutions to our customers at all times. 
            </p>
          </div>
        );
      case 'heritage':
        return (
           <div className="animate-fade-in ">
            <h2 className="text-2xl font-Futura font-bold mb-6">Our Heritage</h2>
            <div className="mb-6 ">
              <img 
                src="/images/heritagee.png" 
                alt="Al Sharif Heritage" 
                className="w-full rounded-lg mb-6"
              />
            </div>
            <p className="mb-4 text-gray-700">
              With a legacy dating back to 1890, Al Sharif Group carries a rich heritage of maritime excellence and trusted service in the Kingdom of Bahrain. Our story began with a vision to establish a reliable shipping service that would connect Bahrain to the world.
            </p>
            <p className="mb-4 text-gray-700">
              Through generations, we have upheld the founding principles of integrity, reliability, and excellence. Each era has added a new dimension to our services while maintaining our core values.
            </p>
            <p className="mb-6 text-gray-700">
              Today, we continue to honor our heritage by combining traditional values with modern innovations, ensuring that Al Sharif Group remains at the forefront of the shipping and logistics industry in the region.
            </p>
            <Slideshow/>
          </div>
        );
      case 'chairman':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold font-Futura mb-6">Chairman's Message</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/3">
                <div className="bg-white border border-gray-50 rounded-lg p-6 text-center">
                  <div className="w-48 h-64 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/images/sir.png" 
                      alt="Khalid Al Sharif" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Khalid Al Sharif</h3>
                  <p className="text-gray-700">President & CEO</p>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Directors</h4>
                    <p className="text-gray-700">Hassan Al Sharif</p>
                    <p className="text-gray-700">Hussein Al Sharif</p>
                    <p className="text-gray-700">Isa Al Sharif</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 font-roboto">
                <h3 className="text-xl font-semibold mb-4 text-black">Greetings one and all</h3>
                
                <p className="mb-4 text-gray-700 leading-relaxed">
                  A humble thank you for visiting us and here's why.
                </p>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                 As a shipping agent serving the Kingdom of Bahrain for a remarkable 100 years plus, we have long realized the importance of forging strong and valuable relationships. 'You' being our customers, the authorities, the principals or even the important stake holders in the industry are the reason we are here! This connect between us is built on a foundation of trust, dedication and quality as that’s what Al Sharif Group stands for.
                </p>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our industry is an ocean of change and as the saying goes “Change is the only Constant”. Yes, the shipping industry is dynamic in nature and in today’s business scenario there is no place for complacency. Adaptability to changing global trends is the key, which is why we very often find many others struggle, who fail to see the changes around them and adapt quickly.

                </p>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  The world has indeed become much smaller today than when we debuted a century ago. The entire globe is well connected with ocean, air and land transport networks. Technology is king and has played a key role in seamless delivery of cargo to and from anywhere in the world.
                </p>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                 Global market trends and the challenges faced by the shipping industry have made us truly flexible to meet every demand of our principals and customers to offer sustainable and cost effective solutions at all times. As an agent we realise it’s our duty to stay cost efficient and deliver quality, not just once, but consistently. Time and time again we adhere to our top class standards and we add tremendous value to our principals and customers.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
 Our world is full of opportunities for the future generations and the learning curve never ends. Being around for a really long time has added to our rich experience and tremendous knowledge over the decades. Today, it’s important that we continue to carry forward our values from the past to the future.  
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Without a doubt, we are aware that challenges will be far greater but so are the opportunities and the solutions. A healthy and honest relationship can and will weather any storm and this is why we value, nurture and protect our relationships with you. Over the past 100 years this is what we have stood for, believed in and even today continue to do so. 
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  I personally take this opportunity to warmly thank every one of you, who has made us what we are today. Our teams and future generations at Al Sharif Group will no doubt do better and be the best in the Kingdom of Bahrain offering a truly world class service to you.

                </p>
                <h4 className="text-xl font-bold text-gray-700">Khalid Al Sharif</h4>
                  <p className="text-gray-700">President & CEO</p>
              </div>
            </div>
          </div>
        );
      case 'vision':
        return (
           <div className="animate-fade-in">
            <h1 className="text-2xl font-Futura font-bold mb-6">Our Vision and Mission</h1>
            <div className="mb-6 font-Roboto">
              <img 
                src="/images/vision.jpg" 
                alt="Al Sharif Holdings Building" 
                className="w-[600px] rounded-2xl mb-6"
              />
            </div>
            <p className="mb-4 font-bold">Our Vision</p>
            <p className="mb-4 text-gray-700 ">
              To serve our principals and customers with the best, efficient and cost effective solutions in today’s competitive world.
            </p>
            <p className="mb-4 font-bold">Our Mission</p>
            <p className="mb-4 text-gray-700">
              To be the leading provider of the widest range of shipping solutions while being focused on continuously adding value to our principals and customers.
            </p>
          </div>
        );
      case 'quality':
        return (
          <div className="animate-fade-in">
            <h1 className="text-2xl font-Futura font-bold mb-6 ">Quality Assurance</h1>
            <div className="mb-6 font-Roboto">
              <img 
                src="/images/quality.png" 
                className="w-[600px] h-[400px] rounded-2xl mb-6"
              />
            </div>
            <p className="mb-4 text-gray-700 ">
              Al Sharif Group W.L.L., Shipping & Freight Agents are totally committed to employ the best resources and quality processes which are continuously reviewed by our Quality Management System (QMS) in order to be the best in the industry offering quality shipping services to our customers. The system is designed to ensure that Quality Objectives are established and reviewed at relevant functional levels within the company.
            </p>
            <p className="mb-4 text-gray-700">
              Our goal is to offer efficient, cost-effective and the best transport solutions to our customers, principals and our associates and constantly improve the effectiveness of the quality management system.
            </p>
            <p className="mb-4 text-gray-700">
              Continuous investments in Human Resources and IT infrastructure enables us to deliver consistent professional quality services and solutions, which will sustain us in an ever changing dynamic market.
            </p>
          </div>
        );
      default:
        return (
          <div className="animate-fade-in">
            <h1 className="text-2xl font-Futura font-bold mb-6">The Group</h1>
            <div className="mb-6 font-Roboto">
              <img 
                src="/images/building.jpg" 
                alt="Al Sharif Holdings Building" 
                className="w-full rounded-2xl mb-6"
              />
            </div>
            <p className="mb-4 text-gray-700">
             Founded over a century ago in the year 1890 by Mr. Mohammed Mirza Ismail Al Sharif, Al Sharif Group (AG) has grown to become the largest shipping house in the Kingdom of Bahrain. AG has emerged as a synonym for quality shipping and logistics services. Over the years the company has evolved beyond Shipping Agency Services and forayed into Offshore Supply Services, Freight Forwarding, Project Cargo Handling, Chartering, and Logistics & Warehousing Services.

            </p>
            <p className="mb-4 text-gray-700">
             By employing a dedicated team of highly experienced and motivated shipping professionals, we have continued to grow in the local market. This has helped us offer world-class services to our ever-expanding customer base from across the world by thoroughly understanding the unique requirements of our principals and customers. Our specialist teams for cargo operations are fully trained and equipped to handle all kinds of vessels including ULCC, VLCC, product tankers, container mother ships, feeder ships, RO-RO ships, cattle ships, cruise ships, Naval ships and more. 
            </p>
            <p className="mb-4 text-gray-700">
            Our dedicated break bulk and bulk service teams are always ready to handle vessels 24/7, carrying a wide range of cargoes ranging from iron ore to alumina, cement, steel, timber, raw sugar, food grade items and more. 

            </p>
            <p className="mb-4 text-gray-700">
             With an extensive range of services that include vessel, cargo and crew handling, dry-docking, repairs, provision supply, spares, bunkering & husbanding, AG offers unparalleled dedication even when time is a constraint. Fast and efficient vessel turnaround is further ensured by our team of professionals who have built an excellent relationship with the port, customs & terminal authorities.

            </p>
            <p className="mb-4 text-gray-700">
              Our high standards of service are well supported by state of the art IT technology and communication systems offering 24/7 real-time information to every principal ensuring operational efficiency, cost savings and faster turnaround of our ships.
            </p>
            <p className="text-gray-700">
              Our sales / marketing and customer service teams of well trained and experienced professionals with a sound knowledge and experience in the marketing liner, break bulk & project cargo service has access to our central database system which helps them in offering required solutions to our customers at all times. 
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 md:px-9 py-8 flex flex-col md:flex-row gap-7 scale-[0.94] md:scale-100">
        {/* Sidebar */}
        <aside className="md:w-50 flex-shrink-0 md:sticky md:top-[calc(64px+1rem)] md:self-start md:h-[calc(100vh-20px)] bg-white border-2 border-black rounded-2xl p-4 md:p-6 shadow-lg font-Futura ml-0 md:ml-9 overflow-x-auto md:overflow-visible flex md:flex-col gap-4 md:gap-6">
          {sidebarSections.map((item, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px] md:min-w-0">
              <div
                onClick={() => navigateToSection(item.page)}
                className={`cursor-pointer w-[80px] h-[80px] md:w-[93px] md:h-[93px] rounded-2xl flex flex-col items-center justify-center mb-1 md:mb-2
                  ${section === item.id ? 'bg-black' : 'bg-transparent'}`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mb-1"
                />
                <span
                  className={`text-[10px] md:text-xs font-semibold text-center select-none ${
                    section === item.id ? 'text-gray-50' : 'text-gray-900'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 font-roboto font-normal text-[15px] md:text-[17px] leading-[120%] tracking-[0] align-middle weight-400">
          <div className="bg-white rounded-lg p-4 md:p-6">{getCurrentContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
