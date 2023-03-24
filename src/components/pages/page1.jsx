import React from "react";
import image from "../../images/employer/intrap-logo.png";

const Pages = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
          <div className="rounded-lg shadow-md overflow-hidden">
            <img src={image} alt="React Image" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/3 max-w-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Retailer or brand looking to reduce packaging waste?
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus ipsum in mollis interdum. Donec eget lobortis nulla. Sed eu
            nulla nisi. Sed sagittis, est vel molestie pretium, dui ipsum
            dignissim mauris, eget tincidunt turpis orci eget neque. Nam eu
            metus sed tortor consectetur malesuada eu in sem. Cras sit amet
            massa vel odio fringilla blandit a non nisl. Nunc non posuere sem,
            in euismod metus.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
        <div className="w-full sm:w-1/2 lg:w-2/3 max-w-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus ipsum in mollis interdum. Donec eget lobortis nulla. Sed eu
            nulla nisi. Sed sagittis, est vel molestie pretium, dui ipsum
            dignissim mauris, eget tincidunt turpis orci eget neque. Nam eu
            metus sed tortor consectetur malesuada eu in sem. Cras sit amet
            massa vel odio fringilla blandit a non nisl. Nunc non posuere sem,
            in euismod metus.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
          <div className="rounded-lg shadow-md overflow-hidden">
            <h1 className="text-3xl font-bold text-gray-800 px-4 pt-6 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;