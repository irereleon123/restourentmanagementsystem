import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="bg-gray-200 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to our Restaurant</h1>
        <p className="text-lg text-gray-600">Delicious food served with love</p>
      </header>
      <section className="about-section py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600">We are committed to providing our customers with the best dining experience possible. Our chefs use only the freshest ingredients to create mouthwatering dishes that will leave you wanting more.</p>
        </div>
      </section>
      <section className="specials-section py-10 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Specials</h2>
          <p className="text-lg text-gray-600">Check out our daily specials and indulge in something extraordinary.</p>
        </div>
      </section>
      <section className="contact-section py-10 bg-gray-300">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800">Name</label>
              <input type="text" id="name" className="form-input w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">Email</label>
              <input type="email" id="email" className="form-input w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800">Message</label>
              <textarea id="message" rows="4" className="form-textarea w-full"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
