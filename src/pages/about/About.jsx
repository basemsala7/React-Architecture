import React, { useEffect, useState } from "react";

const About = () => {
  console.log("About page");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(4);
  }, []);
  return (
    <div>
      About
      <button onClick={() => setCount((ele) => ele + 1)}>
        count is -- {count}
      </button>
    </div>
  );
};

export default About;
