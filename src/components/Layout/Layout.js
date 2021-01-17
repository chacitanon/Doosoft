import React, { Fragment } from 'react';
import styled from "styled-components";
import Navbar from '../Navbar/Navbar';

const Background = styled.div`
  width: 100vw;
  position: relative;
  height:100vh;
  background-color:black;
`;
const MainSection = styled.div`
  margin-top: 4rem;
  width: 100vw;
  position: absolute;
  z-index: 5;
  margin: 0;
  color:white;
`;

function Layout(props) {
  return (
    <Fragment>
      <Background>
        <Navbar />
        <MainSection>{props.children}</MainSection>
      </Background>
    </Fragment>
  );
}

export default Layout;
