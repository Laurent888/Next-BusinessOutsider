import React from "react";

const SingleNewsHero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        backgroundColor: "#eee",
        position: "relative",
        zIndex: -100,
      }}
    >
      <img
        src="/img/sea.jpg"
        alt="landscape"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default SingleNewsHero;
