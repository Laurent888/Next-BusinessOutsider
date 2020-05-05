import React from "react";
import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      paddingTop: "2rem",
      height: "500px",
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "space-evenly",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    text: {
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  })
);

const HeroAsk = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.text}>
        <Typography variant="h3" component="h2" color="textSecondary">
          You have a question ?{" "}
          <span
            style={{
              fontFamily: "serif",
              fontSize: "5rem",
              background:
                "-webkit-linear-gradient(95deg, rgba(25,130,232,1) 0%, rgba(74,238,250,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Business Outsider
          </span>{" "}
          has answers
        </Typography>
      </div>
      <div className={classes.image}>
        <img
          src="/img/notes.svg"
          alt="notes"
          style={{
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default HeroAsk;
