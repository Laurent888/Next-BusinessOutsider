import React from "react";
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
          color="primary"
          variant="h4"
          component="h4"
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Login
        </Typography>
        <SigninForm />
      </div>
    </div>
  );
};

export default withApollo(Signin);
