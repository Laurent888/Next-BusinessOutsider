import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      position: "relative",
    },
    bcgImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
    formWindow: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "50%",
      background: "#fff",
      paddingTop: "8rem",
    },
  })
);
