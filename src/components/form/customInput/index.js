// IMPORTS
import React from "react";
import { useField } from "formik";

// UI IMPORT
import { TextField } from "@material-ui/core";

const CustomInputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        style={{ margin: "1rem 0", width: "20rem" }}
        variant="outlined"
        {...field}
        {...props}
        error={meta.touched && meta.error ? true : false}
      />
    </>
  );
};

export default CustomInputField;
