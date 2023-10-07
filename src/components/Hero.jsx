import React from "react";
import { styles } from "../styles";
import { Link } from "react-scroll";
import AstroCanvas from "./canvas/Astronaut";
const Hero = () => {
  return (
    <section className={`relative w-full  h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]   max-w-7xl  ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex   flex-col justify-center items-center mt-5">
          <div className="w-5  h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1  sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            {" "}
            Hey,
            <span className="text-[#915eff]">Momin </span>
            here.
          </h1>
          <p className={`${styles.heroSubText}`}>
            I'm Software engineer <br className="sm:block hidden " /> with
            expertise in web development
          </p>
        </div>
      </div>
      
      <AstroCanvas/>
     <Link to={'about'} smooth={true} duration={1000} >
     <div className="absolute xs:bottom-10 border-[1px] left-[60px] rounded-full  w-6  h-8 p-1 border-white  flex justify-center items-center ">
        
        <div className="bg-blue-900 animate-bounce rounded-full h-4 w-5 " />
          
        </div>
     </Link>
    </section>
  );
};

export default Hero;
