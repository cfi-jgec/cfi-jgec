import React, { useEffect, useRef } from "react";

const AtoZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimateText = ({ text }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    let count = 0;
    const interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, i) => {
          if (i < count) {
            return text[i] || " ";
          }
          return AtoZ[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (count >= text.length) {
        clearInterval(interval);
      }
      count++;
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return <div ref={elementRef}></div>;
};

export default AnimateText;
