import * as React from "react";
import { FunctionComponent, useState } from "react";
import { useFormikContext } from "formik";
import DebugPreCode from "../DebugPreCode";
import { Box, Button } from "@material-ui/core";

const FormikDebug: FunctionComponent = () => {
  const { values, errors, ...rest } = useFormikContext();
  const [hide, setHide] = useState(false);

  if (hide || process.env.NODE_ENV === "production") return null;

  return (
    <Box my={5} style={{ position: "relative" }}>
      <Button
        color="primary"
        variant="contained"
        disableElevation
        onClick={() => setHide(true)}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        Hide form debug
      </Button>
      <div>
        <DebugPreCode title="Values" object={values} />
        <DebugPreCode title="Errors" object={errors} />
        <DebugPreCode title="Rest" object={rest} />
      </div>
    </Box>
  );
};

export default FormikDebug;
