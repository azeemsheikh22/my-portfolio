import React from 'react'
import { BubbleBackground } from '@/components/animate-ui/backgrounds/bubble';

const HeroSection: React.FC = () => {
  return (
    <div>
        <BubbleBackground
      interactive
      className="absolute inset-0 flex items-center justify-center rounded-xl"
    />
    </div>
  )
}

export default HeroSection