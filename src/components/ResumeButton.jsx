// // Example: components/StickyDownloadButton.jsx
// import React from 'react';


// const ResumeButton = () => {
//   return (
//     <a
//       href="/DILSHAD_resume.pdf"
//       download
//       className="fixed bottom-10 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
//     >
//       Download Resume
//     </a>
//   );
// };

// export default ResumeButton;



// Example: components/StickyDownloadButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const ResumeButton = () => {
  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col gap-3 items-end">
      {/* Resume Download Button */}
      <a
        href="/DILSHAD_resume.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
      >
        Download Resume
      </a>

      {/* WhatsApp Button */}
<a
  href="https://wa.me/+919995869125?text=Hello%20Dilshad,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
>
  <FaWhatsapp size={24} />
</a>

    </div>
  );
};

export default ResumeButton;
