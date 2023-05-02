// import React from "react";
// import { expData } from "./expData";

// import "./Exp.css";

// const Exp = () => {
//     return (
//         <div id="experience" className="expContainer">
//             <div className="headerContainer">
//                 <div className="header">
                    
//                     <p className="headerTitle" >Experience</p>
//                 </div>
//                 <div className="divider" style={{width: "255px"}}></div>
//             </div>
//             <div className="expContentContainer">
//                 {
//                     expData.map((exp) => (
//                         <div className="expCard">
//                             <div className="expCardContent">
//                                 <div className="expCardFront">
//                                     <img style={{objectFit: "contain", width: "55%", margin: "20px"}} src={exp.employerImg.img} alt="" />
//                                     <div style={{fontFamily: "'Abril Fatface', cursive", fontSize: "20px", marginBottom: "5px"}}>{exp.employer}</div>
//                                     <div style={{fontFamily: "'Quattrocento', serif", fontSize: "18px", marginBottom: "5px"}}>{exp.jobTitle}</div>
//                                     <div style={{fontFamily: "'Quattrocento', serif"}}>{exp.date}</div>
//                                 </div>
//                                 <div className="expCardBack" style={{backgroundColor: exp.employerImg.bkgColor}}>
//                                     <div style={{display: "flex", flexDirection: "row", alignContent: "center"}} className="rowCard">
//                                         <img style={{objectFit: "contain", width: "25%", margin: "20px"}} src={exp.employerImg.img} alt="" />
//                                         <div style={{display: "flex", flexDirection: "column", margin: "20px 0px", alignSelf: "center"}}>
//                                             <div style={{fontFamily: "'Abril Fatface', cursive", fontSize: "18px", marginBottom: "5px", textAlign: "left"}}>{exp.employer}</div>
//                                             <div style={{fontFamily: "'Quattrocento', serif", fontSize: "16px", marginBottom: "5px", textAlign: "left"}}>{exp.jobTitle}</div>
//                                             <div style={{fontFamily: "'Quattrocento', serif", fontSize: "14px", textAlign: "left"}}>{exp.date}</div>
//                                         </div>
//                                     </div>
//                                     <ul>
//                                         {
//                                             exp.descs.map((desc) => (
//                                                 <li style={exp.descs.length>=3 ? {fontFamily: "'Quattrocento', serif", marginBottom: "10px",textAlign: "left", fontSize: "16px"} : {fontFamily: "'Quattrocento', serif", marginBottom: "15px", textAlign: "left", fontSize: "18px"}}>{desc}</li>
//                                             ))
//                                         }
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Exp;
import React from "react";


function Exp() {
  return (
    <div id="experience" className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Tailwind CSS Component Experience Page</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-72 h-72 bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-8 transform hover:-translate-y-1 transition duration-500 ease-in-out">
          <img src="https://source.unsplash.com/random/800x800" alt="" className="w-full h-44 object-cover" />
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Product Name</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus sit amet ligula lacinia sollicitudin ac vel elit. Aliquam fermentum magna eget est aliquet, ut vehicula magna accumsan. </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Buy Now</button>
          </div>
        </div>
        <div className="w-72 h-72 bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-8 transform hover:-translate-y-1 transition duration-500 ease-in-out">
          <img src="https://source.unsplash.com/random/800x800" alt="" className="w-full h-44 object-cover" />
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Product Name</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus sit amet ligula lacinia sollicitudin ac vel elit. Aliquam fermentum magna eget est aliquet, ut vehicula magna accumsan. </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Buy Now</button>
          </div>
        </div>
        <div className="w-72 h-72 bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-8 transform hover:-translate-y-1 transition duration-500 ease-in-out">
          <img src="https://source.unsplash.com/random/800x800" alt="" className="w-full h-44 object-cover" />
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Product Name</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus sit amet ligula lacinia sollicitudin ac vel elit. Aliquam fermentum magna eget est aliquet, ut vehicula magna accumsan. </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;