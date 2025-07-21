
import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_links,
  live_link,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full lg:w-[280px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover object-left rounded-2xl"
          />

          {/* Icons */}
          <div className="absolute flex flex-col gap-2 justify-start items-start m-3 card-img_hover
                        top-[160px] sm:left-[100px] lg:left-[180px]">
            {/* Frontend GitHub */}
            <div
              onClick={() => window.open(source_code_links.frontend, "_blank")}
              // className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute left-[410px] top-[0px] lg:-left-[50px] lg:top-[13px] md:left-[90px]  sm:left-[10px]"
className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute
sm:left-[10px] md:left-[90px] lg:-left-[50px]
left-[200px] top-[10px] lg:top-[13px]"

              title="Frontend Code"
            >
              <img
                src={github}
                alt="frontend code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* Backend GitHub */}
            <div
              onClick={() => window.open(source_code_links.backend, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute
sm:left-[10px] md:left-[90px] lg:-left-[50px]
left-[260px] top-[10px] lg:top-[13px]"
              // className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute left-[340px] top-[0px] lg:left-[1px] lg:top-[13px] md:left-[150px] "
              title="Backend Code"
            >
              <img
                src={github}
                alt="backend code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* Live Demo */}
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute
sm:left-[10px] md:left-[90px] lg:-left-[50px]
left-[140px] top-[10px] lg:top-[13px]"
                // className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute left-[270px] top-[0px] lg:-left-[100px] lg:top-[13px] md:left-[30px]"
                title="Live Demo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/2 h-1/2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3h7v7m0 0L10 21l-7-7L17 3z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
