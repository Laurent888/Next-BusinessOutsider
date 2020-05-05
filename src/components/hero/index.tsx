import React from "react";
import Banner from "../banner";
import { Box } from "@material-ui/core";

const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        backgroundColor: "#eee",
        position: "relative",
      }}
    >
      <img
        src="/img/landscape.jpg"
        alt="landscape"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Box style={{ position: "absolute", top: "5rem", left: "10%" }}>
        <Banner />
      </Box>
    </div>
  );
};

export default Hero;
