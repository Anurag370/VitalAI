import React from 'react';
import { HeartPulse } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <HeartPulse className="text-purple-500" size={30} />
      <h1 className="text-3xl font-normal font-[Poppins] text-purple-500 tracking-tight">
        <span className="font-bold">HEALTH</span>AI
      </h1>
    </div>
  );
};

export default Logo;