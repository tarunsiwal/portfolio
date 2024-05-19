import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lotifiles/websiteProcesses.json'; // Replace 'animation.json' with your loti animation file

const LotiAnimation = () => {
  return <Lottie animationData={animationData} />;
};

export default LotiAnimation;
