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
//     <div className="bg-white rounded-md shadow-md p-6 max-w-md mx-auto">
//   <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
//   <form>
//     <div className="mb-4">
//       <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//         Name
//       </label>
//       <input
//         className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//         type="text"
//         id="name"
//         name="name"
//         placeholder="John Doe"
//         value={formData.name}
//         onChange={handleInputChange}
//       />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//         Email
//       </label>
//       <input
//         className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//         type="email"
//         id="email"
//         name="email"
//         placeholder="johndoe@example.com"
//         value={formData.email}
//         onChange={handleInputChange}
//       />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
//         Subject
//       </label>
//       <input
//         className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//         type="text"
//         id="subject"
//         name="subject"
//         placeholder="Website feedback"
//         value={formData.subject}
//         onChange={handleInputChange}
//       />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
//         Message
//       </label>
//       <textarea
//         className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//         id="message"
//         name="message"
//         placeholder="Enter your message here..."
//         value={formData.message}
//         onChange={handleInputChange}
//       ></textarea>
//     </div>
//     <div className="flex items-center justify-end">
//       <button
//         className="inline-block px-4 py-2 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         type="submit"
//         onClick={submitEmail}
//       >
//         Submit
//       </button>
//     </div>
//   </form>
// </div>
<div id="contact" className="grid  max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 my-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src="../../assets/images/blog_display.jpeg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 border-solid border-2 border-black-500 rounded " />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 border-solid border-2 border-black-500 rounded " />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 border-solid border-2 border-black-500 rounded "></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
	</form>
</div>
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
