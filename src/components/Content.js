import React, { useState } from "react";

const Content = ({ text, img }) => {
  const [status, setStatus] = useState(false);

  let styles = {
    background: `url(${img})`,
  };

  let textStyles = {
    opacity: status ? 1 : 0,
    transform: status ? `translateY(-100%)` : `translateY(0%)`,
  };

  return (
    <div
      className="content"
      style={styles}
      onMouseLeave={() => setStatus(false)}
    >
      <h3 style={textStyles} onMouseEnter={() => setStatus(true)}>
        {text}
      </h3>
    </div>
  );
};

export default Content;
