import React from 'react'
// imgs
import first from "../../videos/videolux.mp4";
import second from "../../videos/clinica.mp4";
import third from "../../videos/pos.mp4";
import forth from "../../videos/todo.mp4";
import fifth from "../../videos/sapi.mp4";
import six from "../../videos/superset.mp4";
import Project_card from '../project_card/Project_card';
import { FaGithub } from "react-icons/fa";

const Complete_apps = () => {
    const projects = [
        // 6 projects date
        {
            src: first,
            langs: ["TypeScript", "React Hooks", "Frame-Motion", "Tailwind", "GSAP"],
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
            langs: ["JavaScript,", "Redux,", "React", ".NET CORE API,", "AWS-EC2", "SQL"],
            title: "Payment System",
            disc: "Payment system for services in Honduras",
        },
        {
            src: forth,
            langs: ["Vite", "TypeScript", "GraphQL", "React", "Tailwind"],
            title: "To-Do List",
            disc: "Challenge to create a to-do list with drag and drop functionality",
        },
        {
            src: fifth,
            langs: ["JavaScript", "React Class", ".Net Core", "Node.js", "C#"],
            title: "Import System",
            disc: "Import system for a company in Honduras",
        },
        {
            src: six,
            langs: ["Superset", "Docker", "Linux"],
            title: "SuperSet",
            disc: "Create a system report with superset",
        },
    ];
    return (
        <div>
            <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#51AAEE]">/</span>
                        <span> Projects</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">List of my projects, you can view the code <a href='https://github.com/CristanPalma2203' ><span className=" text-[#51AAEE]">here</span> </a> <FaGithub className="inline-block mb-1"  /></div>

                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#51AAEE]">#</span>
                        <span> Complete-apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
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
            </div>
        </div>
    )
}

export default Complete_apps