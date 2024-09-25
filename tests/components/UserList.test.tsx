import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserList from "../../src/components/UserList";

describe("UserList", () => {
  const emptyUserList: User[] = [];
  const userList: User[] = [
    {
      id: 1,
      name: "Alan",
      isAdmin: true,
    },
    {
      id: 2,
      name: "Jane",
      isAdmin: false,
    },
  ];

  it("should not render a list if userList is empty", () => {
    render(<UserList users={emptyUserList} />);

    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  it("should render message if user list is empty", () => {
    render(<UserList users={emptyUserList} />);

    const message = screen.getByText(/no users/i);

    expect(message).toBeInTheDocument();
  });

  it("should show list of users if user list is not empty and not show message", () => {
    render(<UserList users={userList} />);

    userList.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
