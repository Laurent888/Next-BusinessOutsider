import React from "react";
import { withApollo } from "../../services/client";

// UI IMPORT
import useStyles from "./styles";

import SignupForm from "../../components/auth/signupForm";
import { Typography } from "@material-ui/core";

const Signup: React.FC = () => {
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
          Sign up
        </Typography>
        <SignupForm />
      </div>
    </div>
  );
};

export default withApollo(Signup);
