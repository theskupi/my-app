import * as React from "react";
import { FunctionComponent } from "react";

interface DebugPreCodeInterface {
  title: string;
  object: unknown;
}

const DebugPreCode: FunctionComponent<DebugPreCodeInterface> = ({
  title,
  object,
}) => {
  return (
    <>
      <div data-testid="title">{title}: </div>
      <pre
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        <code data-testid="content">{JSON.stringify(object, null, 2)}</code>
      </pre>
    </>
  );
};

export default DebugPreCode;
