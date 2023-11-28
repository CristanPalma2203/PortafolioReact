import React from 'react'

const Small_projects = () => {
    // we need to create some dates for this, you can do it by yourselves
    // we need about 8 projects, but you can add all yours :)
    // in this video we will create about page
    let projects = [
        {
            languages: ["Dart", "Kotlin"],
            title: "Whatsapp clone",
            body: 'Develop a whatsapp clone with flutter and kotlin connect with firebase.'
        },
        {
            languages: ["Dart", "Kotlin"],
            title: "Mobile Shop",
            body: 'Develop a mobile app shop where users can browse and purchase various mobile devices.'
        },
        {
            languages: ["Python", "Docker", "Linux"],
            title: "Cluster",
            body: 'Create a cluster with docker and linux to proceses a big data with slaves and master with pyspark.'
        },
        {
            languages: ["Python", "Beautifulsoup", "Selenium"],
            title: "Scraper Webs",
            body: 'Develop a web scraper that extracts information from various web pages.'
        },
        {
            languages: ["C#", "Windows Form"],
            title: "Game Of Life",
            body: 'Create a Windows Form application that implements the classic Game of Life.'
        },
        {
            languages: ["Java", "GRPC", "SOAP"],
            title: "Sefin Bridge",
            body: 'Develop a bridge application that connects to the "Secretaria de Finanzas" (SEFIN) to retrieve tax information.'
        },
        {
            languages: ["GitLab", "Linux", "Docker"],
            title: "Own Server GitLab",
            body: 'Set up and manage your own GitLab server for code hosting.'
        },
        
    ]
    // you will write dates by yourselves
    return (
        <div className=' pt-[80px] px-5 max-w-[1560px] mx-auto'>
            {/* title */}
            <div className="">
                <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                    <span className=" text-[#51AAEE]">#</span>
                    <span> Small-projects</span>
                </div>
            </div>
            {/* body/cards */}
            <div className="cards flex justify-center flex-wrap gap-4">
                {
                    // mapping
                    projects.map(e => {
                        let { languages, title, body } = e
                        return <>
                            {/* card */}
                            <div className="card max-w-[331px] w-full border border-[#ABB2BF]">
                                {/* skills */}
                                <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                                    {languages.map(lang => {
                                        return <span>{lang} </span>
                                    })}
                                </div>
                                {/* discription */}
                                <div className="disc p-4">
                                    <h2 className=' text-white font-medium text-2xl'>{title}</h2>
                                    <p className=' text-[#ABB2BF] py-4'>{body}</p>
                                    {/* we are only coders so maybe no one have figma projects */}
                                  
                                </div>
                            </div></>
                    })
                }
            </div>
        </div>
    )
}

export default Small_projects