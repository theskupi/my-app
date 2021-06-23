import UsersPage from "../UsersPage";
import { render, screen } from "@testing-library/react";
import { FunctionComponent } from "react";

const UsersContainerMock: FunctionComponent = () => <div>UsersContainer</div>;

jest.mock("../../containers/UsersContainer", () => UsersContainerMock);

const renderComponent = () => render(<UsersPage />);

describe("<UsersPage />", () => {
  it("should render <UsersPage/>", () => {
    // 1. arrange = priprav si data co budezs pouzivat

    // 2. act = do your thing => render <UsersPage/>
    renderComponent();

    // 3. assert = validate your data that they are correct
    expect(screen.getByText("UsersContainer")).toBeInTheDocument();
  });
});
