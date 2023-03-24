// import Fade from "react-reveal";

// import React, { Component } from "react";

// class MainContent extends Component {
//   render() {
//     if (!this.props.data) return null;

   
//     const name = this.props.data.name;
//     const description = this.props.data.description;

//     return (
//         <div className="  row banner ">
//         <div className="banner-text row-banner2">
//           <Fade bottom>
//             <h1 className="responsive-headline">{name}</h1>
//           </Fade>
//           <Fade bottom duration={1200}>
//             <h3>{description}.</h3>
           
//           </Fade>
//           <hr />
//           <Fade bottom duration={2000}></Fade>
//         </div>
//       </div>
//     );
//   }
// }

// export default MainContent;
import React from "react";
import Fade from "react-reveal/Fade";

const MainContent = ({ data }) => {
  if (!data) return null;

  

  return (
    <div className="row banner">
      <div className="banner-text row-banner2">
        <Fade bottom>
          <h1 className="responsive-headline">Infinity Additional Tech Solutions</h1>
        </Fade>
        <Fade bottom duration={1200}>
          <h3>dgh</h3>
        </Fade>
        <hr />
        <Fade bottom duration={2000}></Fade>
      </div>
    </div>
  );
};

export default MainContent;




