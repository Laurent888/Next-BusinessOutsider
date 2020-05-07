import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: "3rem",
      background: "#eee",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    hacker: {
      fontSize: "40px",
      fontStyle: "italic",
      fontWeight: "lighter",
      color: "#444",
    },
  })
);

const Banner = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        style={{ fontFamily: "serif" }}
      >
        Business Outsider
      </Typography>
      <div
        style={{
          width: "200px",
          height: "2px",
          backgroundColor: "#3c8edd",
          marginBottom: "1rem",
        }}
      ></div>
      <Typography variant="h5" component="h3">
        News from <span className={classes.hacker}>HackerNews</span>
      </Typography>
    </Paper>
  );
};

export default Banner;
