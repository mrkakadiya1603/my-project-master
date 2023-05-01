// import { useState } from "react";

import { useParams } from "react-router";

const Pages = (props) => {
  console.log('proops',props)
  // const [sharkData, setSharkData] = useState([]);
  const { testvalue } = useParams();

  console.log("scbhjsbkadbjkbjkdssd", testvalue);

  return (
    <section className="bg-gray-100 pt-32" pt-0>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
          <div className="rounded-lg shadow-md overflow-hidden"> <img
            className="w-full h-60 origin-center"
            alt="img"
            src={props.location.state.projectItem.image}
          /></div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/3 max-w-xl">
          <h1 className="font-normal text-sm text-black">{props.location.state.projectItem.name}</h1>
          <p className="text-gray-700 leading-relaxed">{props.location.state.projectItem.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Pages;
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
// import "./page.css";

// Pages.propTypes = {
//   sharkData: PropTypes.array.isRequired,
// };

// export default function Pages({ sharkData }) {
//   const { id } = useParams();
//   const selectedItem = sharkData.find((item) => item.id === id);

//   return (
//     <div className="page-container">
//       <div className="page-content">
//         <div className="image-container">
//           <img src={selectedItem.image} alt={selectedItem.name} />
//         </div>
//         <div className="text-container">
//           <h2>{selectedItem.name}</h2>
//           <p>{selectedItem.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
