import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <MyNav>
      <Ul>
        <li>
          <Link to="/">Rooms</Link>
        </li>
        <li>
          <Link to="/room">Room</Link>
        </li>
      </Ul>
    </MyNav>
  );
};

export default Nav;

const MyNav = styled.nav`
  box-shadow: 0px -10px 35px 4px rgba(17, 17, 17, 0.4);
  inline-size: 100vw;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;

  inline-size: 100%;
  max-inline-size: 300px;
  margin: 0 auto;
  padding: 20px 0;
  list-style: none;
  a {
    text-decoration: none;
    color: #111;
    font-weight: bold;
    :hover {
      color: #4b4b4b;
    }
  }
`;
