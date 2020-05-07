// IMPORT
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";

// UI IMPORT
import CustomFormInput from "../../form/customInput";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { LOGIN } from "../../../services/queries";
import { loginSetUserLocalStorageAndCookie } from "../../auth/actions/auth";

const SigninForm = () => {
  const [message, setMessage] = useState<string | null>(null);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().min(6, "Password must be 6 characters minimum"),
  });

  const [login] = useMutation(LOGIN);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await login({
          variables: {
            email: values.email,
            password: values.password,
          },
        });

        setSubmitting(false);

        if (res.data.login.error !== "") {
          setMessage(res.data.login.error);
          setTimeout(() => {
            setMessage(null);
          }, 4000);
          return;
        }

        setTimeout(() => {
          resetForm({});
        }, 300);
        console.log(res.data);
        // Set token to local storage and cookie
        loginSetUserLocalStorageAndCookie(
          res.data.login.token,
          res.data.login.user
        );
      }}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomFormInput label="email" name="email" type="email" />
        <CustomFormInput label="password" name="password" type="password" />
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          style={{ marginTop: "1.5rem" }}
        >
          Login
        </Button>
        {message && (
          <Typography
            variant="body1"
            style={{
              marginTop: "1rem",
              padding: ".7rem",
              backgroundColor: "#da3030",
              color: "#fff",
            }}
          >
            {message}
          </Typography>
        )}
      </Form>
    </Formik>
  );
};

export default SigninForm;
