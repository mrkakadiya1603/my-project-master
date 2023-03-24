import React from 'react';

const Contact = () => (
  <div id='contact' className="bg-gray-900 text-white py-20">
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Get In Touch & Sent Enguiry </h1>
        <p className="text-lg">We'd love to hear from you</p>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <p className="text-lg">dfsegfrgerg</p>
          <p className="text-lg">Anytown</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
          <h2 className="text-2xl font-bold mb-4">Phone</h2>
          <p className="text-lg">123-456-7890</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
          <h2 className="text-2xl font-bold mb-4">Email</h2>
          <p className="text-lg">info@example.com</p>
        </div>
      </div>

      <form className="max-w-lg mx-auto mt-16">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
          <input type="text" name="name" id="name" className="w-full border border-gray-300 py-2 px-3 rounded-lg text-lg" />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-bold mb-2">Email Address</label>
          <input type="email" name="email" id="email" className="w-full border border-gray-300 py-2 px-3 rounded-lg text-lg" />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
          <textarea name="message" id="message" rows="5" className="w-full border border-gray-300 py-2 px-3 rounded-lg text-lg"></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;