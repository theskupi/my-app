import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import userEvent from "@testing-library/user-event";
import FormikDebug from "../FormikDebug";

const renderComponent = () =>
  render(<FormikDebug />, {
    wrapper: ({ children }) => (
      <Formik
        initialValues={{ values: "values" }}
        onSubmit={() => {
          /**/
        }}
      >
        {children}
      </Formik>
    ),
  });

describe("<FormikDebug>", () => {
  it("should render <FormikDebug/>", () => {
    renderComponent();

    expect(screen.getByText("Values:")).toBeInTheDocument();
    expect(screen.getByText("Errors:")).toBeInTheDocument();
    expect(screen.getByText("Rest:")).toBeInTheDocument();
  });

  it("should unmount itself on hide button click", () => {
    renderComponent();

    userEvent.click(screen.getByText("Hide form debug"));

    expect(screen.queryByText("Values:")).not.toBeInTheDocument();
    expect(screen.queryByText("Errors:")).not.toBeInTheDocument();
    expect(screen.queryByText("Rest:")).not.toBeInTheDocument();
  });
});
