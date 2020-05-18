// IMPORTS
import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// UI IMPORTS
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Box,
} from "@material-ui/core";

import { removeToken } from "../../../utils/utils";
import AuthContext from "../../../context/authContext";

const useStyles = (router: any) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: `${router.pathname === "/signin" && "none"}`,
      },
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
          fontWeight: "lighter",
        },
      },
    })
  );

const Navbar = () => {
  const router = useRouter();

  const classes = useStyles(router)();

  const { auth } = useContext(AuthContext);

  const signout = () => {
    removeToken(router.push("/"));
  };

  return (
    <AppBar position="static" color="default" className={classes.root}>
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

          {/* TO BE UNHIDDEN WHEN READY  */}
          {auth ? (
            <>
              <Typography variant="h6">
                <Link href="/user">
                  <a className={classes.link}>User</a>
                </Link>
              </Typography>

              <Typography
                variant="h6"
                className={classes.link}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  signout();
                }}
              >
                Logout
              </Typography>
            </>
          ) : (
            <>
              {/* <Typography variant="h6">
                <Link href="/signup">
                  <a className={classes.link}>Register</a>
                </Link>
              </Typography> */}
              <Typography variant="h6">
                <Link href="/signin">
                  <a className={classes.link}>Login</a>
                </Link>
              </Typography>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
