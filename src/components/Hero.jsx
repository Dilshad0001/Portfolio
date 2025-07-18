// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import myImage from "../assets/myimg.jpg";


// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div className="mt-28 md:mt-5 lg:5 z-10">
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Navaf</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I build full-stack  web applications with modern technologies
//           </p>
//         </div>
//       </div>

//       {/* <ComputersCanvas /> */}
// <div className="relative w-full h-screen ">
//   <img
//     src={myImage}
//     alt="My Photo"
//     className="absolute top-[250px] left-[750px] w-64 h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-purple-400"
//   />
// </div>



//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import myImage from "../assets/myimg.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left vertical line */}
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text content */}
        <div className="mt-28 md:mt-5 z-10 absolute top-[350px] left-[100px] md:top-[40px] md:left-[100px]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Navaf</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build full-stack web applications <br className="sm:block hidden" />
            with modern technologies
          </p>
        </div>
      </div>

      {/* Animated Image */}
      <div className="absolute w-full h-full flex justify-center items-center ">
        <motion.img
          src={myImage}
          alt="My Photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className=" w-80 h-80 rounded-3xl  sm:w-56 sm:h-56 md:w-64 md:h-64 absolute top-[150px] left-[130px] sm:top-[20px] sm:left-[50px] md:top-[220px] md:left-[1000px]  object-cover  shadow-xl 
                     hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-purple-400 
                     transition-all duration-500 ease-in-out z-10"
        />
      </div>

      {/* Scroll down indicator */}
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
