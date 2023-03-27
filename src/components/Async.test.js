import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // mock = mocking fetch requests to save load  on server and / or modifying data
    window.fetch = jest.fn(); // we are mocking our fetch function , jest library provided this by default
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    // When we have useEffect and have https request in our component the test will fail bcz at first time when it renders it doesn't have the renders listitems but after some miliseconds useEffect will run and data is rendered, so we use findAll type of methods bcs they return a promise and we can use async await on that promise
    // const listItemElement = screen.getAllByRole("listitem");

    const listItemElements = await screen.findAllByRole("listitem"); // these find methods takes 3rd argument that is timeout, by default is 1 second

    expect(listItemElements).not.toHaveLength(0);
  });
});
