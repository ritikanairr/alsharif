
const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 pt-[90px]">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <div className="h-1 w-20 bg-sharif-red mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Al Sharif Group W.L.L.</h3>
              <address className="not-italic text-gray-600">
                <p>Al Sharif Holdings Building,</p>
                <p>Bldg No. 1315A, Road 114,</p>
                <p>Block 101, Hidd,</p>
                <p>Bahrain Investment Gateway Island,</p>
                <p>Kingdom of Bahrain.</p>
              </address>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Phone & Fax</h3>
              <p className="text-gray-600">T: +973 17515050</p>
              <p className="text-gray-600">F: +973 17911321</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Email</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-600 mb-1">General enquiries:</p>
                  <a href="mailto:alsharif@batelco.com.bh" className="text-sharif-red hover:underline">
                    alsharif@batelco.com.bh
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Sales enquiries:</p>
                  <a href="mailto:sales@shippingbahrain.com" className="text-sharif-red hover:underline">
                    sales@shippingbahrain.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form Card */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sharif-red focus:border-sharif-red"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sharif-red focus:border-sharif-red"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sharif-red focus:border-sharif-red"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sharif-red focus:border-sharif-red"
                required
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="bg-sharif-red hover:bg-red-700 text-white py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sharif-red"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Our Location</h2>
        <div className="w-full h-96 bg-gray-200 rounded-lg">
          {/* Placeholder for map - In a real implementation, use Google Maps or other mapping service */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">Map of Al Sharif Group location in Bahrain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
