
const Values = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img 
                src="/images/company-values.png" 
                alt="Al Sharif Group Values" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Meticulous management skills, hard work and dedication coupled through industry experienced professionals across generations ensure we deliver superior services to our principals and customers.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-blue-600">We Lead</h3>
                  <p className="text-gray-600">with inspiration & integrity</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-600">We Care</h3>
                  <p className="text-gray-600">with empathy & respect</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-purple-600">We Deliver</h3>
                  <p className="text-gray-600">with passion & commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;