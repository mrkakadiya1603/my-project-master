import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Project.css";

Shark.propTypes = {
  item: PropTypes.string,
};

export default function Shark({ item }) {
  console.log(item);
  return (
    <section className="max-w-md w-[450px] border rounded-lg bg-white p-4 shadow-lg ring-gray-200 overflow-hidden backdrop-blur-[3px]">
    <div className="h-2/4 bg-blue-100 overflow-hidden object-cover">
      <Link to="/pages">
        <img className="w-full h-full origin-center" src={item.image} />
      </Link>
    </div>
    <div className="p-3 h-2/4 overflow-hidden text-clip">
      <h5 className="mb-1 text-xl font-semibold tracking-wide">{item.name}</h5>
      <p className="h-[100px] font-normal text-sm text-black text-ellipsis overflow-hidden tracking-wide leading-normal">
        {item.description}
      </p>
    </div>
  </section>
  );
}