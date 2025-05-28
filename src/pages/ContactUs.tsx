import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 mt-6">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-800 font-Futura">Contact Us</span>
          </h2>
          <div className="h-[4px] w-[80%] bg-black mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl font-Futura">
            Ready to ship with Al-Sharif? Contact us for a personalized quote or any shipping inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" style={{ color: '#000000' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 font-Futura">Our Location</h3>
                <p className="text-slate-600 font-Futura">
                  Al Sharif Holdings Building,<br />
                  Bldg No. 1315A, Road 114, Block 101, Hidd,<br />
                  Bahrain Investment Gateway Island,<br/>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" style={{ color: '#000000' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 font-Futura">Phone Numbers</h3>
                <p className="text-slate-600 font-Futura">
                  Main Office: +973 1234 5678<br />
                  Customer Service: +973 8765 4321<br />
                  Emergency: +973 9999 0000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" style={{ color: '#000000' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 font-Futura">Email</h3>
                <p className="text-slate-600 font-Futura">
                  info@alsharifbahrain.com<br />
                  sales@alsharifbahrain.com<br />
                  support@alsharifbahrain.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6" style={{ color: '#000000' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 font-Futura">Business Hours</h3>
                <p className="text-slate-600 font-Futura">
                  Sunday - Thursday: 8:00 AM - 6:00 PM<br />
                  Friday: Closed <br />
                  Saturday: 
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.042183497362!2d50.665460700000004!3d26.260294299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af2dbcd3a119%3A0xb58d6788df740240!2sAl%20Sharif%20Group!5e0!3m2!1sen!2sbh!4v1748418075192!5m2!1sen!2sbh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
