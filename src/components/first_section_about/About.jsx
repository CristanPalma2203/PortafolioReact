import "./about.css";
import { RiContactsBook2Line } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import { useEffect, useState } from "react";


const About = () => {
  const reqSvgs = require.context('../../images/shapes', false, /.png$/);
  const allSvgFilepaths = reqSvgs.keys();
  const [state, setState] = useState(
    {
      circle: allSvgFilepaths[0],
      halfCircle: allSvgFilepaths[1],
      letters: allSvgFilepaths[2],
      points2: allSvgFilepaths[3],
      square: allSvgFilepaths[4],
      triangle: allSvgFilepaths[5],
      wave: allSvgFilepaths[6],
      waveShape: allSvgFilepaths[6],
      x: allSvgFilepaths[7],
    }
  )
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <header className="headerL" id="headerL">
          <div className="overlayL overlayL-lg">
            <img src={reqSvgs(state.square)} className="shape square" alt="" />
            <img src={reqSvgs(state.circle)} className="shape circle" alt="" />
            <img src={reqSvgs(state.halfCircle)} className="shape half-circle1" alt="" />
            <img src={reqSvgs(state.halfCircle)} className="shape half-circle2" alt="" />
            <img src={reqSvgs(state.x)} className="shape xshape" alt="" />
            <img src={reqSvgs(state.x)} className="shape xshape2" alt="" />
            <img src={reqSvgs(state.wave)} className="shape wave wave1" alt="" />
            <img src={reqSvgs(state.wave)} className="shape wave wave2" alt="" />
            <img src={reqSvgs(state.triangle)} className="shape triangle" alt="" />
            <img src={reqSvgs(state.letters)} className="letters" alt="" />
            <img src={reqSvgs(state.points2)} className="points points2" alt="" />

          </div>
        </header>
        <div data-aos="fade-right" className="w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Cristian is a{" "}
            <span className="text-[#51AAEE]">
              FullStack Web Developer{" "}
              <HiOutlineDesktopComputer className="inline-block" />
            </span>{" "}
            <br></br>
            and{" "}
            <span className="text-[#51AAEE]">
              Mobile Developer{" "}
              <FiSmartphone className="inline-block" />
            </span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="text-white font-medium py-2 px-4 border duration-200 border-[#51AAEE] hover:bg-[#51AAEE33]">
            <RiContactsBook2Line className="inline-block" /> Contact me!
          </button>
        </div>
        <div data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="img-person">

            <img src={require("./imgs/man.png")} className="img-person" alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#51AAEE]"></div>
            <div className="">
              Currently working on{" "}
              <span className="text-white">Sistema De Pagos (POS) </span>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="px-5 py-10">
        <img className="mx-auto" src={require("./imgs/quote.png")} alt="" />
      </div>
    </>
  );
};

export default About;
