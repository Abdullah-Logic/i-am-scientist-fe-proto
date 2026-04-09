import React from 'react';

const Page = () => {
  return (
<div
  className="min-h-screen flex items-center justify-center px-6 text-center"
  style={{
    background:
      "linear-gradient(180deg, #0A0E27 0%, #3A0CA3 45%, #7209B7 70%, #F72585 100%)",
  }}
>
  <div className="max-w-xl">
    
    {/* Floating AI Emoji */}
    <div className="text-6xl mb-6 animate-bounce">🤖</div>

    <h1
      className="text-3xl md:text-5xl font-extrabold mb-4"
      style={{
        background: "linear-gradient(90deg,#00D3F2,#B835FF,#FF6AD5)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Our AI System Is Under Maintenance
    </h1>

    <p className="text-white text-lg leading-relaxed mb-6">
      Our AI robots are learning new tricks. 
      We’re improving the platform to make learning AI even more fun for kids.
    </p>

    <p className="text-white/80 mb-8">
      🚀 We'll be back very soon!
    </p>

    {/* Fun Loader */}
    <div className="flex justify-center gap-2">
      <span className="h-3 w-3 bg-cyan-400 rounded-full animate-bounce"></span>
      <span className="h-3 w-3 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
      <span className="h-3 w-3 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
    </div>

  </div>
</div>

  );
};

export default Page;