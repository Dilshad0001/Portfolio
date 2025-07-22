
import { motion } from "framer-motion";
import { styles } from "../styles";
import myImage from "../assets/myimg.png";
import ResumeButton from "./ResumeButton";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Text and Line */}
      <ResumeButton/>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left vertical line */}
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero Text */}
        <div className="mt-28 md:mt-5 z-10 absolute top-[450px] left-[100px] md:top-[40px] md:left-[100px]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Dillshad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Python Full-stack Developer <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* Bullet-Hit Style Animated Image */}
      <div className="absolute w-full h-full flex justify-center items-center">
        <motion.img
          src={myImage}
          alt="My Photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.05 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-80 h-80 sm:w-56 sm:h-56 md:w-64 md:h-64
                     rounded-full object-cover
                     border-4 border-[#915EFF]
                     shadow-[0_0_100px_20px_rgba(145,94,255,0.5)]
                     ring-8 ring-purple-400/40
                     bg-white/5 backdrop-blur-sm
                     animate-bounce-slight
                     transition-all duration-700 ease-in-out z-10 absolute lg:right-[200px] lg:top-[200px] top-[260px]"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
