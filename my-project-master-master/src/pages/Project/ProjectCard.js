// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Project.css";
 
// Shark.propTypes = {
//   item: PropTypes.string,
// };

const Shark = (props) => {
  const { item } = props;
  return (
    <section className="max-w-md w-[450px] border rounded-lg bg-white p-4 shadow-lg ring-gray-200 overflow-hidden hover:scale-105 transition duration-500  backdrop-blur-[3px]">
      {/* <Link to="/pages"  params={{ projectItem: item }}> */}
      <Link to={{
      pathname: '/pages',
      state: { projectItem: item }
    }} >
        <div
          className="h-2/4 bg-blue-100 overflow-hidden object-cover"
          onClick={console.log("dfsbsdjhbsbbjfb")}
        >
          {console.log("item.id", item.id)}
          <img
            className="w-full h-60 origin-center"
            alt="img"
            src={item.image}
          />
        </div>
        <div className="p-3 h-2/4 overflow-hidden text-clip">
          <h1 className="font-normal text-sm text-black">{item.name}</h1>
          <p className="h-[100px] font-normal text-sm text-black text-ellipsis overflow-hidden tracking-wide leading-normal">
            {item.description}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Shark;

// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import "./Project.css";

// const Shark=(props)=> {
//   const {name} =props

//   console.log('des ::',name);
//   return (
//     <h1 className="font-normal text-sm text-black">{name}</h1>
//     // <section className="max-w-md w-[450px] border rounded-lg bg-white p-4 shadow-lg ring-gray-200 overflow-hidden hover:scale-105 transition duration-500  backdrop-blur-[3px]">
//     //   <Link to={`/pages/${id}`} params={{ testvalue: "hello" }}>
//     //     <div className="h-2/4 bg-blue-100 overflow-hidden object-cover">
//     //       <img className="w-full h-60 origin-center" alt="images" src={item.image} />
//     //     </div>
//     //     <div className="p-3 h-2/4 overflow-hidden text-clip">
//     //       <h1 className="font-normal text-sm text-black">{item.name}</h1>
//     //       <p className="h-[100px] font-normal text-sm text-black text-ellipsis overflow-hidden tracking-wide leading-normal">
//     //         {item.description}
//     //       </p>
//     //     </div>
//     //   </Link>
//     // </section>
//   );
// }

// export default Shark
// // Shark.propTypes = {
// //   item: PropTypes.shape({
// //     id: PropTypes.string.isRequired,
// //     image: PropTypes.string.isRequired,
// //     name: PropTypes.string.isRequired,
// //     description: PropTypes.string.isRequired,
// //   }),
// // };
