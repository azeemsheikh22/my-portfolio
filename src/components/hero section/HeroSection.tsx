import React from "react";
import { StarsBackground } from "../animate-ui/backgrounds/stars";
import { HighlightText } from "../animate-ui/text/highlight";
import { RollingText } from "../animate-ui/text/rolling";
import { SplittingText } from "../animate-ui/text/splitting";
import { RippleButton } from "../animate-ui/buttons/ripple";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <StarsBackground className="absolute inset-0 z-0" />
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 xl:px-0 py-20">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start space-y-6">
          <RollingText
            className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-white mb-4"
            text="Hi, Myself"
          ></RollingText>
          <span>
            <HighlightText
              className="bg-gradient-to-r from-emerald via-pink-500 to-purple-500 px-2 py-1 rounded inline-block text-white text-3xl md:text-5xl 2xl:text-6xl font-bold"
              text="Azeem Sheikh"
            />
          </span>
          <SplittingText
            className="text-lg 2xl:text-xl text-gray-200"
            text="I am a frontend developer specializing in creating responsive,
            visually appealing websites. I excel in leveraging modern
            technologies to deliver seamless user experiences and robust API
            integrations."
            delay={1500}
            type="words"
          />
          <RippleButton className=" border-2 border-white  text-white px-8 py-6 rounded-3xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200  font-semibold text-md">
            View CV
          </RippleButton>
        </div>
        {/* Right Column: Animated Image */}
        <div className="flex items-center justify-center h-full w-full">
          <img
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Azeem Sheikh"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl animate-float"
            style={{ animation: 'float 3.5s ease-in-out infinite' }}
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
