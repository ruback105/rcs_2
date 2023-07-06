import { render, screen } from "@testing-library/react";
import Card from "../";
import React from "react";
import renderer from "react-test-renderer";

const title = "Some title";
const description = "Some description";

describe("Card component", () => {
  it("should render Card component", () => {
    render(<Card title={title} description={description} />);

    expect(screen.getByText(title).textContent).toEqual(title);
    expect(screen.getByText(description).textContent).toEqual(description);
  });

  it("should render additional content", () => {
    const testId = "additional-content";
    const additionalContent = "Additional content";

    render(<Card title="" description="" />);

    expect(screen.getByTestId(testId).textContent).toEqual(additionalContent);
  });

  it("should match snapshot", () => {
    const component = renderer.create(
      <Card title={title} description={description} />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
