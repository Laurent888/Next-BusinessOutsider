import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden",
    },
    bcgImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    formWindow: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "40%",
      minWidth: "500px",
      background: "#fff",
      boxShadow: "3px 0 10px rgba(0,0,0,0.3)",
      zIndex: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        minWidth: "100%",
        width: "100%",
      },
    },
  })
);
