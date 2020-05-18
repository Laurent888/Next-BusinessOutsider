import React from "react";
import Banner from "./banner";
import { Box, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "600px",
      backgroundColor: "#eee",
      position: "relative",
      [theme.breakpoints.down("sm")]: {},
    },
    box: {
      position: "absolute",
      top: "5rem",
      left: "10%",
      [theme.breakpoints.down("sm")]: {
        left: "5%",
      },
    },
  })
);

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
      <Box className={classes.box}>
        <Banner />
      </Box>
    </div>
  );
};

export default Hero;
