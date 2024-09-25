import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  const adminUser: User = {
    id: 1,
    name: "Alan",
    isAdmin: true,
  };

  const normalUser: User = {
    id: 1,
    name: "Alan",
    isAdmin: false,
  };

  it("should render Edit button if user is an admin", () => {
    render(<UserAccount user={adminUser} />);

    const button = screen.queryByRole("button", { name: /edit/i });
    expect(button).toBeInTheDocument();
  });

  it("should not render Edit button if user is not an admin", () => {
    render(<UserAccount user={normalUser} />);

    const button = screen.queryByRole("button", { name: /edit/i });

    expect(button).not.toBeInTheDocument();
  });

  it("should render user's name", () => {
    render(<UserAccount user={normalUser} />);
    screen.debug();

    const nameElement = screen.getByText(normalUser.name);
    expect(nameElement).toBeInTheDocument();
  });
});
