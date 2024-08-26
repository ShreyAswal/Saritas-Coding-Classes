import React from 'react';

const LandingPage: React.FC = () => {
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
      </div>

      {/* Right Container: Image */}
      <div className="w-1/2 flex justify-center">
        <img src="path/to/your/image.jpg" alt="Shrey" className="rounded-full max-w-xs border-4 border-gray-300" />
      </div>
    </div>
  );
}

export default LandingPage;

