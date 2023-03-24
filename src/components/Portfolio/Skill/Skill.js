// import React from 'react';

// const Skills = () => {
//   const skills = [
//     'Web Development',
//     'Mobile App Development',
//     'Cloud Computing',
//     'Artificial Intelligence',
//     'Machine Learning',
//     'Data Analytics',
//     'UI/UX Design',
//     'DevOps',
//     'Cybersecurity',
//     'Blockchain',
//     'AR/VR',
//   ];

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {skills.map((skill) => (
//             <div key={skill} className="rounded-lg shadow-md p-4 bg-white">
//               <h3 className="text-lg font-semibold mb-2">{skill}</h3>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                 quis enim at est porta placerat eu vel turpis. Nullam
//                 condimentum eleifend ligula, sit amet iaculis elit sagittis
//                 quis.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import './Skill.css';

const Skills = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Our Skills</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Web Development</h3>
              <p className="mt-3 text-md text-gray-500">
                Our web developers are experts in building high-quality, responsive websites using the latest web technologies.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Mobile Development</h3>
              <p className="mt-3 text-md text-gray-500">
                Our mobile app developers create stunning, user-friendly mobile applications for iOS and Android devices.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Cloud Computing</h3>
              <p className="mt-3 text-md text-gray-500">
                Our cloud computing experts can help you develop, deploy, and manage cloud-based applications and infrastructure.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Artificial Intelligence</h3>
              <p className="mt-3 text-md text-gray-500">
                Our AI engineers build intelligent systems that can learn from data, recognize patterns, and make decisions.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">UI/UX Design</h3>
              <p className="mt-3 text-md text-gray-500">
                Our designers create stunning, user-centered interfaces that are both functional and visually appealing.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">DevOps</h3>
              <p className="mt-3 text-md text-gray-500">
                Our DevOps engineers can help you streamline your development and deployment processes and improve your team's efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;