import * as React from "react";
import { FunctionComponent } from "react";
import { cUser, UserInterface } from "../../models/User";
import { Formik } from "formik";
import { Button, Grid } from "@material-ui/core";
import FormikDebug from "../../../common/components/FormikDebug";
import FormikInput from "../../../common/components/FormikInput";
import { userEditFormSchema } from "./schema";

interface UserEditFormProps {
  initialValues: UserInterface;
  onSubmit: (values: UserInterface) => void;
}

const UserEditForm: FunctionComponent<UserEditFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={userEditFormSchema}
    >
      {({ values, errors, submitForm }) => (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormikInput name={cUser.id} placeholder="ID" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormikInput name={cUser.name} placeholder="Name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormikInput name={cUser.username} placeholder="Username" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormikInput type="email" name={cUser.email} placeholder="Email" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" onClick={submitForm}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormikDebug />
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default UserEditForm;
