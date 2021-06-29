import * as React from "react";
import { FunctionComponent } from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { useField } from "formik";

const FormikInput: FunctionComponent<TextFieldProps & { name: string }> = (
  props
) => {
  const [field, meta] = useField(props.name);
  const hasError = !!meta.error;

  return (
    <TextField
      variant="filled"
      fullWidth
      {...props}
      {...field}
      error={hasError}
      helperText={meta.error}
    />
  );
};

export default FormikInput;
