// Example: components/StickyDownloadButton.jsx
import React from 'react';

const ResumeButton = () => {
  return (
    <a
      href="/DILSHADresume.pdf"
      download
      className="fixed bottom-5 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
    >
      Download Resume
    </a>
  );
};

export default ResumeButton;
