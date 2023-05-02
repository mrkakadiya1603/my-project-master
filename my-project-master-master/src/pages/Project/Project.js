import Shark from "./ProjectCard";
import { useEffect } from "react";

import "./Project.css";
import axios from "axios";
import { useState } from "react";
// import Pages from "../pages/page1";

export default function Project() {
  const [sharkData, setSharkData] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:5000/sharks")
      .then((response) => {
        setSharkData(response.data);
        // console.log("data", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="projects">
      <main className="w-full flex bg-normal bg-no-repeat bg-cover bg-fixed justify-center min-h-screen text-white relative ">
        <section className="w-full my-20">
          <div className="flex flex-col items-center justify-between gap-12">
            <div className="text-center drop-shadow-lg">
              <h3 className="text-black text-4xl font-semibold drop-shadow-xl">
                Our Portfolio and Resents Works
              </h3>
            </div>
            <div className="flex gap-10 justify-center items-center flex-wrap maincardcomponent">
              {sharkData.map((item) => (
                <Shark key={item.id} item={item} />
              ))}
              {/* {sharkData.map((item) => (
                <Pages key={item.id} item={item} />

              ))} */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// <Pages key={item.id} item={item} />

// import Shark from "./ProjectCard";
// import { gsap } from "gsap";
// import { useRef, useEffect } from "react";
// import "./Project.css";
// import axios from "axios";
// import { useState } from "react";
// import { Route, Switch } from "react-router-dom";
// import Pages from "../pages/page1";

// export default function Project() {
//   const cardInfo = useRef(null);
//   const q2 = gsap.utils.selector(cardInfo);
//   const [sharkData, setSharkData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/sharks")
//       .then((response) => {
//         setSharkData(response.data);
//         console.log("data", response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     gsap.to(q2(".card"), {
//       y: 0,
//       opacity: 1,
//       stagger: 0.2,
//       duration: 0.5,
//     });
//   }, []);

//   return (
//     <div id="projects">
//       <main className="w-full flex bg-normal bg-no-repeat bg-cover bg-fixed justify-center min-h-screen text-white relative ">
//         <Switch>
//           <Route exact path="/pages/:id">
//             <Pages sharkData={sharkData} />
//           </Route>
//           <Route exact path="/projects">
//             <section className="w-full my-20">
//               <div className="flex flex-col items-center justify-between gap-12">
//                 <div className="text-center drop-shadow-lg">
//                   <h3 className="text-black text-4xl font-semibold drop-shadow-xl">
//                     Our Portfolio and Resents Works
//                   </h3>
//                 </div>
//                 <div
//                   className="flex gap-10 justify-center items-center flex-wrap maincardcomponent"
//                   ref={cardInfo}
//                 >
//                   {sharkData.map((item) => (
//                     <Shark key={item.id} item={item} />
//                   ))}
//                 </div>
//               </div>
//             </section>
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// import Shark from "./ProjectCard";
// // import { gsap } from "gsap";
// import { useEffect } from "react";
// import "./Project.css";
// import axios from "axios";
// import { useState } from "react";
// import { Route, Switch } from "react-router-dom";
// import Pages from "../pages/page1";

// export default function Project() {
//   // const cardInfo = useRef(null);
//   // const q2 = gsap.utils.selector(cardInfo);
//   const [sharkData, setSharkData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/sharks")
//       .then((response) => {
//         setSharkData(response.data);
//         console.log("data", response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   // useEffect(() => {
//   //   gsap.to(q2(".card"), {
//   //     y: 0,
//   //     opacity: 1,
//   //     stagger: 0.2,
//   //     duration: 0.5,
//   //   });
//   // }, []);

//   return (
//     <div id="projects">
//       <main className="w-full flex bg-normal bg-no-repeat bg-cover bg-fixed justify-center min-h-screen text-white relative ">
//         <Switch>
//           <Route exact path="/pages/:id">
//             <Pages sharkData={sharkData} />
//           </Route>
//           <Route exact path="/projects">
//             <section className="w-full my-20">
//               <div className="flex flex-col items-center">
//                 {sharkData.map((item) => (
//                   <Shark key={item.name} item={item} />
//                 ))}
//               </div>
//             </section>
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// export default function Project() {
//   const [sharkData, setSharkData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/sharks")
//       .then((response) => {
//         setSharkData(response.data);
//         console.log("data", response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   console.log("sharkData", sharkData);

//   return (
//     <div id="projects">
//       <h1> this is projects </h1>

//       <div className="flex flex-col items-center">
//         <h1>dsjdksj</h1>
//         {sharkData.map((item) => {

//           return (
//             <Shark
//               // key={item._id}
//               // id={parseInt(item._id)}
//               name={item.name}
//               item={item}
//               // description={item.description}
//               // image={item.image}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
