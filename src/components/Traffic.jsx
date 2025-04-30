import { Signal } from "./Signal";
import { useEffect, useState } from "react";

export const Traffic = ({ lights = ["red", "yellow", "green"] }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % lights.length);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="traffic-light">
        {lights.map((color, index) => (
          <Signal key={index} isActive={index === active} color={color} />
        ))}
      </div>
      <div className="bottom"></div>
    </>
  );
};
