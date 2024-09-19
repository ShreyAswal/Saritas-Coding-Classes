import React from "react";
import mom_photo from "../../public/mom_professional_photo.jpg";
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
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/aswalshrey/30min",
    });
    return false;
  };

  return (
    <div className="flex items-center justify-between min-h-screen bg-white p-8 ml-20">
      {/* Left Container: Text */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Sarita</h1>
        <h4 className="text-2xl font-medium mb-4">
          Java Programming Teacher
        </h4>
        <p className="text-lg text-gray-700">
          With 20 years of experience teaching Java to class 9 and 10 students
          at Kalpa School, I've also been offering personalized 1-on-1 and group
          online tuitions for the past few years. My goal is to help students
          excel in Java programming, and after working with international
          clients, I'm now focusing on offering customized online sessions to
          learners worldwide. Let's unlock your potential in coding together!
        </p>
        <button
          className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          onClick={handleCalendlypopup}
        >
          Book a meeting!
        </button>
      </div>

      {/* Right Container: Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src={mom_photo}
          alt="Sarita Professional Photo"
          className="rounded-s-full max-w-xs border-4 border-gray-300 h-100 w-100"
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
