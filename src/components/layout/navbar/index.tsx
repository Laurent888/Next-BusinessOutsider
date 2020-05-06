import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Box,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      fontFamily: "serif",
      textDecoration: "none",
      "&:hover": {
        color: "#666",
        cursor: "pointer",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "35px",
      },
    },

    navlinks: {
      display: "flex",
      justifyContent: "center",
      width: "70%",
    },
    link: {
      textDecoration: "none",
      fontWeight: "lighter",
      color: theme.palette.grey[600],
      paddingTop: "2px",
      margin: "0 2rem",
      "&:hover": {
        color: theme.palette.info.main,
        fontWeight: "initial",
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography className={classes.logo}>
          <Link href="/">
            <a style={{ color: "inherit", textDecoration: "none" }}>
              Business Outsider
            </a>
          </Link>
        </Typography>
        <Box className={classes.navlinks}>
          <Typography variant="h6">
            <Link href="/">
              <a className={classes.link}>News</a>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="/ask">
              <a className={classes.link}>Ask</a>
            </Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
