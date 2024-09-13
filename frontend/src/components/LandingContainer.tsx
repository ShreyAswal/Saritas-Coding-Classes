import React from "react";
// import { Link } from "react-router-dom";

// Declare Calendly as a global variable for TypeScript
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const LandingPage: React.FC = () => {
  const handleCalendlypopup = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/aswalshrey/30min' });
    return false;
  }

  return (
    <div className="flex items-center justify-between min-h-screen bg-white p-8">
      {/* Left Container: Text */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Shrey</h1>
        <h4 className="text-2xl font-medium mb-4">Java Expert</h4>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptatibus nostrum neque ipsa at? Molestias omnis perspiciatis
          laborum, consectetur nemo saepe accusamus magnam natus dolores! Velit
          hic voluptatibus quod nemo?
        </p>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800" onClick={handleCalendlypopup}>
          Book a meeting!
        </button>
        
      </div>

      {/* Right Container: Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src="path/to/your/image.jpg"
          alt="Shrey"
          className="rounded-full max-w-xs border-4 border-gray-300"
        />
      </div>
    </div>
  );
};

export default LandingPage;




// <button>
//           <a href="https://calendly.com/aswalshrey/30min">
//             Schedule an appointment!
//           </a>
//         </button>
//         {/* <!-- Calendly link widget begin --> */}
//         <Link
//           to="https://calendly.com/assets/external/widget.css"
//           rel="stylesheet"
//         >
//           {" "}
//           Book a meeting!
//           <script
//             src="https://calendly.com/assets/external/widget.js"
//             type="text/javascript"
//           ></script>
//           {/* <!-- Calendly link widget end --> */}
//         </Link>
//         {/* <!-- Calendly link widget begin --> */}
//         <link 
//           href="https://calendly.com/assets/external/widget.css"
//           rel="stylesheet"
//         >
//           <script
//             src="https://calendly.com/assets/external/widget.js"
//             type="text/javascript"
//           ></script>
//           {/* <!-- Calendly link widget end --> */}
//         </link>