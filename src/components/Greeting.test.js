import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Writing Tests - The Three "A"s

// 1. Arrange => Set up the test data, test conditions and test environments / Render a component which we want to test
// 2. Act => We wanna do the thig which we wana actually test, Run logic that should be tested (eg. execute function)
// 3. Assert => Compare execution results with expected results

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />); // it expects jsx code

    // Act
    // ... nothing to act here in this case

    // Assert

    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was Clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // for any event to trigger we import this userEvent from library
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not renders good to seee you if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.queryByText('good to see you!', {exact: false}) // get by text will return error in both cases so we use query method that returns null if not found
    expect(outputElement).toBeNull()
  })
});
