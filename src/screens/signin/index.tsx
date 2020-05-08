import React from "react";
import Link from "next/link";
import { withApollo } from "../../services/client";

// UI IMPORT
import useStyles from "./styles";

import SigninForm from "../../components/auth/signinForm";
import { Typography } from "@material-ui/core";

const Signin: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="/img/landscape.jpg" className={classes.bcgImage} />
      <div className={classes.formWindow}>
        <Typography
          variant="h4"
          color="textSecondary"
          style={{
            fontWeight: "lighter",
            fontFamily: "serif",
            position: "absolute",
            top: "2rem",
            left: "3rem",
          }}
        >
          <Link href="/">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              Business Outsider
            </a>
          </Link>
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "2rem",
            background:
              "-webkit-linear-gradient(95deg, rgba(25,130,232,1) 0%, rgba(74,238,250,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Log in to your account
        </Typography>
        <SigninForm />
      </div>
    </div>
  );
};

export default withApollo(Signin);
