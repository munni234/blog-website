import React from "react";

const AboutAndContact = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-12">
      {/* About Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
         Welcome to my blog website and share your knowledge and content 
         with writing Blogs.It's a dynmaic blog website where you can add unlimited blogs.You can also drop your feedback and comments 
         your comments are valueable for us to make more effective this platfomr.
         </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          With a passion for excellence and a commitment to our values, we
          strive to make a positive impact in the lives of our clients and the
          community. Thank you for trusting us!
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Have questions or feedback? We'd love to hear from you. Fill out the
          form below or reach us through the provided contact details.
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
          <textarea
            placeholder="Your Message"
            
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-6 space-y-2 text-gray-700">
          <p>
            <strong>Email:</strong> munniabbasi22@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 92 876655555
          </p>
        
        </div>
      </section>
    </div>
  );
};

export default AboutAndContact;