import Project_card from "../project_card/Project_card";
import first from "../../videos/videolux.mp4";
import second from "../../videos/clinica.mp4";
import third   from "../../videos/pos.mp4";
import { NavLink } from "react-router-dom";

const Projects = () => {
  // date
  const projects = [
    {
      src: first,
      langs: ["TypeScript", "React", "Frame-Motion", "Tailwind", "GSAP"],
      title: "LuxWare",
      disc: "El Salvador consulting landing page",
    },
    {
      src: second,
      langs: ["C#", "Windows Form", "SQL", "AWS-EC2"],
      title: "CLinic App",
      disc: "Desktop clinic app connected to a database on an AWS EC2 instance",
    },
    {
      src: third,
      langs: ["JavaScript,", "Redux,","React", ".NET CORE API,", "AWS-EC2", "SQL"],
      title: "Payment System",
      disc: "Payment system for services in Honduras",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#51AAEE]">#</span> Projects
            </div>
            <div className="line w-2/3 h-px bg-[#51AAEE]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <NavLink to="/projects">
              <span>View all ~~&gt;</span>
            </NavLink>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ src, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  src={src}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
