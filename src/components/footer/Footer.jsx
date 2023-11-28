import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandUpwork } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos="fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span></span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">cristianpalma1703@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>FullStack Web Developer and Mobile Developer based in El Salvador</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://github.com/CristanPalma2203">
                <FaGithub color="#A3AAB6" size={25} />
              </a>
              <a href="https://www.instagram.com/alexpalma2203/">
                <FaInstagram color="#A3AAB6" size={25} />
              </a>
              <a href="https://www.upwork.com/freelancers/~01208e978963c01e22">
                <TbBrandUpwork color="#A3AAB6" size={29} />

              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by Cristian Palma
        </div>
      </div>
    </>
  );
};

export default Footer;
