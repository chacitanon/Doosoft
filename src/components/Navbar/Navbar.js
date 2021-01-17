import React, { useContext, useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import styled from "styled-components";
import LocalStorageService from "../../services/LocalStorageService";
import { UserOutlined } from '@ant-design/icons';

const NavbarWrapper = styled.div`
  min-height: 2rem;
  height: 4rem;
  width: 100vw;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: #66BD52;
box-shadow: 0px 4px 7px 7px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  
`;
const LeftContainer = styled.div`
  width: 50rem;
  padding-left: 0.1rem;
  padding-top: 1.5rem;
  
`;



const RightContainer = styled.div`
  width: 25rem;
  padding-top: 1.5rem;
  margin-right:-5rem;
  
`;
const SpanNev = styled.span`
cursor: pointer;
  color:white;
  margin-left:5rem;
`;

function Navbar(props) {
  const [show, setShow] = useState(false);
  const { role, setRole } = useContext(UserContext);
  const history = useHistory();
  const onRedirect = (path) => {
    history.push(path);
    setShow(!show);
  };


  const logOut = (props) => {
    LocalStorageService.removeToken();
    setRole("GUEST");
    onRedirect("/");
  };

  return (
    <NavbarWrapper>

      <LeftContainer>
        {role === "GUEST" ? (
          <Fragment>
            <SpanNev onClick={() => onRedirect("/")}>HOME</SpanNev>
            <SpanNev onClick={() => onRedirect("/")}>ABOUT US</SpanNev>
            <SpanNev onClick={() => onRedirect("/")}>CONTACT</SpanNev>
            <SpanNev onClick={() => onRedirect("/")}>BLOG</SpanNev>
          </Fragment>
        ) : (
            <Fragment>
              <SpanNev><img style={{ width: "4rem", marginTop: "-1rem", marginRight: "-3rem" }} src="https://res.cloudinary.com/da8hlqolk/image/upload/v1610881232/doosoft/pixlr-bg-result_ukl9e4.png" /></SpanNev>
              <SpanNev onClick={() => onRedirect("/")}>DASHBOARD</SpanNev>
            </Fragment>
          )}
      </LeftContainer>
      <RightContainer>
        {role === "GUEST" ? (
          <Fragment>
            <SpanNev onClick={() => onRedirect("/register")}>SIGN UP</SpanNev>
            <SpanNev onClick={() => onRedirect("/login")}>LOGIN</SpanNev>
          </Fragment>
        ) : (
            <Fragment>
              <SpanNev ><UserOutlined style={{ width: "5rem", height: "5rem", borderRadius: "50%", marginRight: "-3rem" }} /></SpanNev>
              <SpanNev onClick={logOut} >LOGOUT</SpanNev>
            </Fragment>
          )}
      </RightContainer>
    </NavbarWrapper>
  );
}
export default Navbar;
