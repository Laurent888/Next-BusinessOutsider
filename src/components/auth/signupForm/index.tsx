// IMPORT
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../../../services/queries";

// UI IMPORT
import CustomFormInput from "../../form/customInput";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface IMessageState {
  success: string | null;
  error: string | null;
}

const SignupForm = () => {
  const [message, setMessage] = useState<IMessageState>({
    success: null,
    error: null,
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().min(6, "Password must be 6 characters minimum"),
  });

  const [createUser] = useMutation(CREATE_USER);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createUser({
          variables: {
            name: values.name,
            email: values.email,
            password: values.password,
          },
        });

        if (res.data.createUser.error) {
          setMessage({ ...message, error: res.data.createUser.error });
        }
        if (res.data.createUser.token) {
          setMessage({
            ...message,
            success:
              "You have successfully registered. You will be redirected to the login page",
          });
        }

        setTimeout(() => {
          setMessage({ success: null, error: null });
        }, 4000);
        setSubmitting(false);
        resetForm({});

        // Set token to local storage
      }}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomFormInput label="name" name="name" type="text" />
        <CustomFormInput label="email" name="email" type="email" />
        <CustomFormInput label="password" name="password" type="password" />
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          style={{ marginTop: "1.5rem" }}
        >
          Register
        </Button>
        {message.error || message.success ? (
          <Typography
            variant="body1"
            style={{
              marginTop: "1rem",
              padding: ".7rem",
              backgroundColor: `${message.error ? "#da3030" : "#2bba18"}`,
              color: "#fff",
            }}
          >
            {message.error ? message.error : message.success}
          </Typography>
        ) : null}
      </Form>
    </Formik>
  );
};

export default SignupForm;
