
import React from 'react';

const PixelSprites = () => {
  console.log('Rendering Enhanced Dynamic PixelSprites');
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced Professional Developer sprite - diagonal movement */}
      <div className="absolute top-1/4 left-0 animate-diagonal-bounce">
        <div className="pixel-sprite developer w-12 h-12 bg-gray-900 relative shadow-lg">
          {/* Head */}
          <div className="absolute top-1 left-4 w-4 h-3 bg-gray-200 rounded-sm"></div>
          {/* Hair */}
          <div className="absolute top-0 left-3 w-6 h-2 bg-black"></div>
          {/* Eyes */}
          <div className="absolute top-2 left-4 w-1 h-1 bg-black"></div>
          <div className="absolute top-2 left-6 w-1 h-1 bg-black"></div>
          {/* Body - suit */}
          <div className="absolute top-4 left-2 w-8 h-6 bg-gray-800 border border-white"></div>
          {/* Tie */}
          <div className="absolute top-4 left-5 w-2 h-4 bg-black"></div>
          {/* Laptop */}
          <div className="absolute top-6 left-1 w-6 h-2 bg-gray-300 border border-black"></div>
          {/* Screen glow */}
          <div className="absolute top-5 left-2 w-4 h-1 bg-white opacity-80"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-3 w-2 h-3 bg-gray-700"></div>
          <div className="absolute bottom-0 right-3 w-2 h-3 bg-gray-700"></div>
        </div>
      </div>

      {/* Enhanced AI Robot sprite - circular movement */}
      <div className="absolute top-3/4 right-0 animate-circle-path">
        <div className="pixel-sprite ai-robot w-12 h-12 bg-gray-200 relative shadow-lg">
          {/* Head */}
          <div className="absolute top-0 left-3 w-6 h-4 bg-gray-800 border border-white"></div>
          {/* Eyes - glowing */}
          <div className="absolute top-1 left-4 w-1 h-1 bg-white animate-pulse"></div>
          <div className="absolute top-1 left-6 w-1 h-1 bg-white animate-pulse"></div>
          {/* Antenna */}
          <div className="absolute -top-1 left-5 w-2 h-1 bg-black"></div>
          {/* Body */}
          <div className="absolute top-4 left-2 w-8 h-6 bg-gray-300 border-2 border-black"></div>
          {/* Chest panel */}
          <div className="absolute top-5 left-4 w-4 h-3 bg-black"></div>
          <div className="absolute top-6 left-5 w-2 h-1 bg-white"></div>
          {/* Arms */}
          <div className="absolute top-5 left-0 w-2 h-4 bg-gray-400"></div>
          <div className="absolute top-5 right-0 w-2 h-4 bg-gray-400"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-3 w-2 h-3 bg-gray-600"></div>
          <div className="absolute bottom-0 right-3 w-2 h-3 bg-gray-600"></div>
        </div>
      </div>

      {/* Enhanced Full-stack Developer sprite - corner to corner */}
      <div className="absolute top-0 left-0 animate-corner-to-corner">
        <div className="pixel-sprite fullstack-dev w-14 h-12 bg-white relative shadow-xl border border-gray-300">
          {/* Head */}
          <div className="absolute top-1 left-5 w-4 h-3 bg-gray-100 border border-gray-400"></div>
          {/* Glasses */}
          <div className="absolute top-2 left-4 w-2 h-1 border border-black"></div>
          <div className="absolute top-2 right-4 w-2 h-1 border border-black"></div>
          <div className="absolute top-2 left-6 w-2 h-1 bg-black"></div>
          {/* Hoodie */}
          <div className="absolute top-4 left-3 w-8 h-6 bg-gray-800"></div>
          {/* Logo on hoodie */}
          <div className="absolute top-5 left-6 w-2 h-2 bg-white"></div>
          {/* Multiple monitors setup */}
          <div className="absolute top-6 left-1 w-4 h-2 bg-black border border-gray-400"></div>
          <div className="absolute top-6 left-5 w-4 h-2 bg-black border border-gray-400"></div>
          <div className="absolute top-6 right-1 w-4 h-2 bg-black border border-gray-400"></div>
          {/* Code on screens */}
          <div className="absolute top-6 left-1 w-1 h-1 bg-white"></div>
          <div className="absolute top-6 left-6 w-1 h-1 bg-white"></div>
          <div className="absolute top-6 right-2 w-1 h-1 bg-white"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-4 w-2 h-3 bg-gray-700"></div>
          <div className="absolute bottom-0 right-4 w-2 h-3 bg-gray-700"></div>
        </div>
      </div>

      {/* Enhanced Tech Lead sprite - zigzag movement */}
      <div className="absolute top-2/3 right-0 animate-zigzag">
        <div className="pixel-sprite tech-lead w-12 h-14 bg-gray-900 relative shadow-lg">
          {/* Head */}
          <div className="absolute top-1 left-4 w-4 h-3 bg-gray-200"></div>
          {/* Professional hair */}
          <div className="absolute top-0 left-3 w-6 h-2 bg-gray-800"></div>
          {/* Eyes */}
          <div className="absolute top-2 left-4 w-1 h-1 bg-black"></div>
          <div className="absolute top-2 left-6 w-1 h-1 bg-black"></div>
          {/* Professional blazer */}
          <div className="absolute top-4 left-2 w-8 h-7 bg-black border-2 border-white"></div>
          {/* White shirt */}
          <div className="absolute top-5 left-4 w-4 h-3 bg-white"></div>
          {/* Tablet/iPad */}
          <div className="absolute top-6 left-1 w-3 h-4 bg-gray-300 border border-black"></div>
          {/* Presentation gesture */}
          <div className="absolute top-5 right-1 w-1 h-3 bg-gray-200"></div>
          {/* Professional shoes */}
          <div className="absolute bottom-0 left-3 w-2 h-2 bg-black"></div>
          <div className="absolute bottom-0 right-3 w-2 h-2 bg-black"></div>
        </div>
      </div>

      {/* Enhanced Meditation/Focus sprite - 360 rotation */}
      <div className="absolute top-1/2 right-1/3 animate-spin-360">
        <div className="pixel-sprite zen-coder w-10 h-10 bg-white relative shadow-xl border border-gray-300">
          {/* Head in meditation */}
          <div className="absolute top-2 left-3 w-4 h-3 bg-gray-100"></div>
          {/* Closed eyes */}
          <div className="absolute top-3 left-4 w-1 h-1 bg-black"></div>
          <div className="absolute top-3 left-6 w-1 h-1 bg-black"></div>
          {/* Peaceful expression */}
          <div className="absolute top-4 left-5 w-1 h-1 bg-gray-400"></div>
          {/* Minimalist clothing */}
          <div className="absolute top-5 left-2 w-6 h-4 bg-gray-200"></div>
          {/* Lotus position */}
          <div className="absolute bottom-0 left-1 w-8 h-2 bg-gray-300"></div>
          {/* Floating code symbols */}
          <div className="absolute -top-1 left-2 w-1 h-1 bg-black opacity-60"></div>
          <div className="absolute -top-2 right-2 w-1 h-1 bg-black opacity-40"></div>
        </div>
      </div>

      {/* Enhanced GitHub Contributor sprite - vertical bounce */}
      <div className="absolute top-1/5 right-0 animate-vertical-bounce">
        <div className="pixel-sprite github-dev w-12 h-12 bg-gray-800 relative shadow-lg">
          {/* Head */}
          <div className="absolute top-1 left-4 w-4 h-3 bg-gray-200"></div>
          {/* Beanie/cap */}
          <div className="absolute top-0 left-3 w-6 h-2 bg-black"></div>
          {/* Eyes */}
          <div className="absolute top-2 left-4 w-1 h-1 bg-black"></div>
          <div className="absolute top-2 left-6 w-1 h-1 bg-black"></div>
          {/* Casual hoodie */}
          <div className="absolute top-4 left-2 w-8 h-6 bg-gray-700"></div>
          {/* GitHub logo on hoodie */}
          <div className="absolute top-5 left-5 w-2 h-2 bg-white"></div>
          {/* Laptop with GitHub */}
          <div className="absolute top-7 left-1 w-6 h-2 bg-black border border-white"></div>
          {/* Git commits visualization */}
          <div className="absolute top-6 left-2 w-1 h-1 bg-white"></div>
          <div className="absolute top-6 left-4 w-1 h-1 bg-white"></div>
          <div className="absolute top-6 left-6 w-1 h-1 bg-white"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-3 w-2 h-3 bg-gray-600"></div>
          <div className="absolute bottom-0 right-3 w-2 h-3 bg-gray-600"></div>
        </div>
      </div>

      {/* Enhanced Floating Innovation cube - figure-8 pattern */}
      <div className="absolute top-1/2 left-1/4 animate-figure-eight">
        <div className="pixel-sprite innovation-cube w-8 h-8 bg-black relative shadow-xl border-2 border-white">
          <div className="absolute inset-1 bg-white"></div>
          <div className="absolute top-2 left-2 w-4 h-1 bg-black"></div>
          <div className="absolute top-4 left-2 w-4 h-1 bg-black"></div>
          <div className="absolute top-3 left-1 w-1 h-2 bg-black"></div>
          <div className="absolute top-3 right-1 w-1 h-2 bg-black"></div>
          {/* Binary code effect */}
          <div className="absolute -top-2 left-1 w-1 h-1 bg-black opacity-70 animate-pulse"></div>
          <div className="absolute -top-3 left-3 w-1 h-1 bg-black opacity-50 animate-pulse"></div>
          <div className="absolute -top-2 right-1 w-1 h-1 bg-black opacity-60 animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Data Satellite - orbital with tilt */}
      <div className="absolute top-1/3 right-1/4 animate-orbital-tilt">
        <div className="pixel-sprite data-satellite w-6 h-6 bg-gray-200 relative shadow-lg border border-black">
          <div className="absolute inset-1 bg-gray-800"></div>
          <div className="absolute top-1 left-1 w-4 h-1 bg-white"></div>
          <div className="absolute top-3 left-1 w-4 h-1 bg-white"></div>
          {/* Solar panels */}
          <div className="absolute -top-1 left-0 w-2 h-1 bg-black"></div>
          <div className="absolute -top-1 right-0 w-2 h-1 bg-black"></div>
          <div className="absolute -bottom-1 left-0 w-2 h-1 bg-black"></div>
          <div className="absolute -bottom-1 right-0 w-2 h-1 bg-black"></div>
          {/* Signal */}
          <div className="absolute -top-2 left-2 w-1 h-1 bg-white animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Success/Achievement sprite - bounce around corners */}
      <div className="absolute top-4/5 left-1/3 animate-corner-bounce">
        <div className="pixel-sprite achievement w-10 h-10 bg-white relative shadow-xl border-2 border-black">
          {/* Trophy base */}
          <div className="absolute bottom-0 left-2 w-6 h-2 bg-black"></div>
          {/* Trophy stem */}
          <div className="absolute bottom-2 left-4 w-2 h-3 bg-gray-800"></div>
          {/* Trophy cup */}
          <div className="absolute top-2 left-2 w-6 h-4 bg-gray-200 border-2 border-black"></div>
          {/* Trophy handles */}
          <div className="absolute top-3 left-1 w-1 h-2 bg-black"></div>
          <div className="absolute top-3 right-1 w-1 h-2 bg-black"></div>
          {/* Winner inscription */}
          <div className="absolute top-4 left-3 w-4 h-1 bg-black"></div>
          {/* Sparkle effects */}
          <div className="absolute -top-1 left-1 w-1 h-1 bg-black animate-pulse"></div>
          <div className="absolute -top-2 right-1 w-1 h-1 bg-black animate-pulse"></div>
          <div className="absolute top-1 -left-1 w-1 h-1 bg-black animate-pulse"></div>
        </div>
      </div>

      {/* New sprites for more dynamic movement */}
      
      {/* Cute anime developer - top corner movement */}
      <div className="absolute top-0 right-0 animate-top-corner-dance">
        <div className="pixel-sprite anime-dev w-10 h-12 bg-pink-100 relative shadow-lg border border-gray-300">
          {/* Head */}
          <div className="absolute top-1 left-3 w-4 h-3 bg-pink-50"></div>
          {/* Anime eyes */}
          <div className="absolute top-2 left-3 w-2 h-1 bg-black"></div>
          <div className="absolute top-2 right-3 w-2 h-1 bg-black"></div>
          {/* Blush */}
          <div className="absolute top-3 left-2 w-1 h-1 bg-pink-300"></div>
          <div className="absolute top-3 right-2 w-1 h-1 bg-pink-300"></div>
          {/* Kawaii outfit */}
          <div className="absolute top-4 left-2 w-6 h-5 bg-pink-200"></div>
          {/* Heart on shirt */}
          <div className="absolute top-5 left-4 w-2 h-1 bg-red-500"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-3 w-2 h-3 bg-pink-300"></div>
          <div className="absolute bottom-0 right-3 w-2 h-3 bg-pink-300"></div>
        </div>
      </div>

      {/* Ninja coder - stealth movement */}
      <div className="absolute top-1/6 left-0 animate-stealth-move">
        <div className="pixel-sprite ninja-coder w-8 h-10 bg-gray-900 relative shadow-lg">
          {/* Head */}
          <div className="absolute top-1 left-2 w-4 h-3 bg-gray-800"></div>
          {/* Ninja mask */}
          <div className="absolute top-0 left-1 w-6 h-4 bg-black"></div>
          {/* Eyes */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-white"></div>
          <div className="absolute top-2 right-2 w-1 h-1 bg-white"></div>
          {/* Body */}
          <div className="absolute top-4 left-1 w-6 h-4 bg-black"></div>
          {/* Throwing stars */}
          <div className="absolute top-5 left-0 w-1 h-1 bg-white"></div>
          <div className="absolute top-6 right-0 w-1 h-1 bg-white"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-2 w-2 h-2 bg-black"></div>
          <div className="absolute bottom-0 right-2 w-2 h-2 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default PixelSprites;
