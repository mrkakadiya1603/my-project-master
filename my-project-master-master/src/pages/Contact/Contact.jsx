import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitEmail = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: formData,
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="johndoe@example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-bold" htmlFor="subject">
          Subject:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Website feedback"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 font-bold" htmlFor="message">
          Message:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Enter your message here..."
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={submitEmail}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;

// import React from 'react';

// const Contact = () => {

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { name, email, message } = event.target.elements;

//     try {
//       const response = await fetch('/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: name.value,
//           email: email.value,
//           message: message.value,
//         }),
//       });

//       const data = await response.text();
//       console.log(data); // logs "Email sent successfully"
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//   <div id='contact' className="bg-gray-900 text-white py-20">
//     <div className="container mx-auto">
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold mb-3">Get In Touch & Sent Enguiry </h1>
//         <p className="text-lg">We'd love to hear from you</p>
//       </div>

//       <div className="flex flex-wrap justify-between">
//         <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
//           <h2 className="text-2xl font-bold mb-4">Location</h2>
//           <p className="text-lg">dfsegfrgerg</p>
//           <p className="text-lg">Anytown</p>
//         </div>

//         <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
//           <h2 className="text-2xl font-bold mb-4">Phone</h2>
//           <p className="text-lg">123-456-7890</p>
//         </div>

//         <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
//           <h2 className="text-2xl font-bold mb-4">Email</h2>
//           <p className="text-lg">info@example.com</p>
//         </div>
//       </div>

//       <form className="max-w-lg mx-auto mt-16" onClick={handleSubmit}  >
//         <div className="mb-6">
//           <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
//           <input type="text" name="name" id="name" className="w-full border border-gray-300 py-2 px-3 rounded-lg text-lg" />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="block text-lg font-bold mb-2">Email Address</label>
//           <input type="email" name="email" id="email" className="w-full border border-gray-300 py-2 px-3 rounded-lg text-lg" />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
//           <textarea name="message" id="message" rows="5" className="w-full border border-gray-300 py-2 px-3 rounded-lg text-lg"></textarea>
//         </div>

//         <div className="text-center">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Submit</button>
//         </div>
//       </form>
//     </div>
//   </div>
//   )
// };

// export default Contact;
