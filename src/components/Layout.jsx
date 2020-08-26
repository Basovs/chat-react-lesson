import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

const Main = styled.div`
  inline-size: 100%;
  max-inline-size: 1200px;
  margin: 0 auto;
`;
