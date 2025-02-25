import Ubside from "../Elements/Ubside";
import foto from "../../assets/image/foto.svg";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Gallery from "./Gallery.jsx";
import React, { useEffect, useRef } from "react";
import logo from "../../../public/vite.svg";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function CircularProgress({ level, color = "text-purple-400" }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const finalOffset = circumference - (level / 100) * circumference;

  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20">
      <circle
        className="text-gray-700"
        strokeWidth="8"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />

      <circle
        className={`circular-progress ${color}`}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        data-final-offset={finalOffset}
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
      />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className={`text-2xl font-bold circular-number ${color}`}
        fill="currentColor"
        data-final-number={level}
      >
        0%
      </text>
    </svg>
  );
}

function Landingpage() {
  const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 70 },
    { name: "TailwindCSS", level: 80 },
    { name: "JavaScript", level: 40 },
    { name: "React", level: 50 },
    { name: "Java", level: 70 },
    { name: "PHP", level: 30 },
    { name: "Laravel", level: 40 },
    { name: "MySQL", level: 70 },
    { name: "Git", level: 35 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Teamwork", level: 90 },
    { name: "Leadership", level: 80 },
    { name: "Communication", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Adaptability", level: 80 },
    { name: "Critical Thinking", level: 85 },
  ];

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const skillsContainerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          pin: true,
          scrub: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  useEffect(() => {
    const skillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: skillsContainerRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    skillsTimeline.to(".skill-progress", {
      width: function (i, target) {
        return target.getAttribute("data-final-width");
      },
      duration: 3,
      ease: "power1.out",
      stagger: 0.1,
    });

    skillsTimeline.to(
      ".horizontal-number",
      {
        duration: 3,
        text: function (i, target) {
          return target.getAttribute("data-final-number") + "%";
        },
        ease: "power1.out",
        stagger: 0.1,
      },
      "<"
    );

    skillsTimeline.to(
      ".circular-progress",
      {
        strokeDashoffset: function (i, target) {
          return target.getAttribute("data-final-offset");
        },
        duration: 3,
        ease: "power1.out",
        stagger: 0.1,
      },
      "<"
    );

    skillsTimeline.to(
      ".circular-number",
      {
        duration: 3,
        text: function (i, target) {
          return target.getAttribute("data-final-number") + "%";
        },
        ease: "power1.out",
        stagger: 0.1,
      },
      "<"
    );
  }, []);

  return (
    <div className="">
      <div className="flex flex-col text-white  h-screen relative Cilok  ">
        <div className="flex justify-between p-4 relative z-10">
          <h1 className="text-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-400 cursor-pointer">
            Alfaril Dzaky <br /> Praptana
          </h1>
          <ul className="flex flex-col gap-4 ">
            <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-400 cursor-pointer">
              Home
            </li>
            <Link to="about" className="cursor-pointer " smooth={true}>
              <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-400">
                About Me
              </li>
            </Link>
            <Link to="project" className="cursor-pointer " smooth={true}>
              <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-400">
                Portofolio
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex justify-center items-center flex-grow">
          <h1 className="text-8xl text-center relative z-10 Cilok text-purple-500 hidden sm:block ">
            IT <br /> STUDENT
          </h1>
          <Ubside />
        </div>

        <div className="flex justify-between items-end relative z-10">
          <ul className="flex flex-col gap-4 p-4">
            <a href="https://www.instagram.com/alfarildzaky/">
              <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-400 cursor-pointer">
                Instagram
              </li>
            </a>
            <div className="relative inline-block group">
              <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-400 cursor-pointer">
                Email
              </li>
              <div className="absolute bottom-full left-full transform -translate-x-1/2 mb-2 hidden group-hover:block">
                <div className="bg-white text-black text-xs p-2 rounded shadow-md relative">
                  alfarildzaky@gmail.com
                </div>
              </div>
            </div>
          </ul>

          <div className="p-4 flex flex-col gap-4">
            <h1>SURABAYA</h1>
            <p>12 April 2005</p>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <img src={logo} className="w-[300px] sm:hidden" />
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
          <img src={foto} alt="Foto" className="w-[550px] hidden sm:block" />
        </div>
      </div>
      <section className="overflow-hidden">
        <div ref={triggerRef}>
          <div
            id="scroll-section-inner"
            ref={sectionRef}
            className="h-[100vh] w-[200vw] flex flex-row relative"
          >
            <div
              className="w-[100vw] h-[100vh] flex justify-center text-white items-center "
              id="about"
            >
              <div className="md:text-2xl text-sm font-bold flex text-center leading-8 md:max-w-6xl max-w-3xl ">
                <h1 className="leading-8">
                  Hi there! I'm{" "}
                  <span className="electricText text-purple-300">
                    Alfaril Dzaky Praptana
                  </span>
                  , an Information Technology student at the Faculty of Computer
                  Science, Brawijaya University. <br />
                  I'm passionate about project management, software development,
                  and business development, <br />
                  always striving to bridge innovative tech solutions with
                  effective business strategies.
                </h1>
              </div>
            </div>

            <div
              ref={skillsContainerRef}
              className="w-[100vw] h-[100vh] text-white"
            >
              <div className="container mx-auto px-10 py-8 text-white">
                <h2 className="text-center text-3xl font-bold mb-6">
                  MY SKILLS
                </h2>
                <h3 className="text-center text-xl font-semibold mb-8 text-purple-400">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span>{skill.name}</span>

                        <span
                          className="horizontal-number"
                          data-final-number={skill.level}
                        >
                          0%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-700 rounded">
                        <div
                          className="skill-progress h-3 bg-purple-400 rounded"
                          data-final-width={`${skill.level}%`}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-center text-xl font-semibold mb-8 text-purple-400">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <CircularProgress level={skill.level} />
                    <p className="mt-2 text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="project"
        className="h-[100vh] flex flex-col justify-center mx-auto items-center text-white"
      >
        <h1 className="text-4xl text-center relative z-10 Cilok  mt-16 text-purple-500">
          Project Gallery
        </h1>
        <Gallery />
      </div>
    </div>
  );
}

export default Landingpage;
