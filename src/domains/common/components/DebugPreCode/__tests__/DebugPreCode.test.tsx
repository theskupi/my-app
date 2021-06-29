import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import DebugPreCode from "../DebugPreCode";

it("should render title and object", () => {
  const title = "header";
  const content = "content";

  const { getByTestId } = render(
    <DebugPreCode title={title} object={content} />
  );

  expect(getByTestId("title")).toHaveTextContent(new RegExp(title));
  expect(getByTestId("content")).toHaveTextContent(new RegExp(content));
});

it("should render object as JSON string", () => {
  const title = "header";
  const content = { content: "string" };

  const { getByTestId } = render(
    <DebugPreCode title={title} object={content} />
  );

  const renderedContent = getByTestId("content").textContent;

  expect(renderedContent).toBeTruthy();
  expect(JSON.parse(renderedContent as string)).toEqual(content);
});

it("should match snapshot", () => {
  const title = "header";
  const content = { content: "string" };

  const tree = renderer
    .create(<DebugPreCode title={title} object={content} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
