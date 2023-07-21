import { React, useEffect } from "react";

const Box = () => {
  useEffect(() => {
    const handleClick = () => {
      console.log("Click");
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem
        in ullam perferendis consequatur pariatur, odit rerum? Sapiente
        molestiae autem odit exercitationem blanditiis, ipsa omnis recusandae!
        Excepturi eius quae ullam?
      </p>
    </div>
  );
};

export default Box;
