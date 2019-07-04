import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a> Hello, {name}, You are{" "}
      {loggedIn ? "logged in" : "anonymous"}
    </header>
  );
};

export default Header;
