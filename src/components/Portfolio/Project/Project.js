
import Shark from "./ProjectCard";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import sharkData from "..//content/sharkData.json";
import './Project.css'

export default function Project() {
  const cardInfo = useRef(null);
  const q2 = gsap.utils.selector(cardInfo);

  useEffect(() => {
    gsap.to(q2(".card"), {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
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
          <div
            className="flex gap-10 justify-center items-center flex-wrap maincardcomponent"
            ref={cardInfo}
          >
            {sharkData.map((item) => (
              <Shark key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
