import React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "rgba(255,255,255,0.64)",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 100,
  friction: () => 100,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};
const ParticleImg = (props) => {
  return (
    <ParticleImage
      src={props.src}
      scale={0.75}
      entropy={20}
      maxParticles={4000}
      mouseMoveForce={motionForce}
      // touchMoveForce={motionForce}
      particleOptions={particleOptions}
      backgroundColor="transparent"
    />
  );
};

export default ParticleImg;
