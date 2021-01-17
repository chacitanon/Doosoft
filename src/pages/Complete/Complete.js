import React, { useState } from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Col, Row } from 'antd';

const Text = styled.div`
position: absolute;
width: 443px;
height: 443px;
top:12rem;
border-radius:50%;
background: #66BD52;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
font-size:24px;
cursor: pointer;
`;

function Complete() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const onRedirect = (path) => {
    history.push(path);
    setShow(!show);
  };
  return (
    <Row justify="center">
      <Text onClick={() => onRedirect("/")}>
        <div>SIGN UP COMPLETE !</div>
        <br></br>
        <div>GET START</div>
      </Text>
    </Row>
  );
}

export default Complete;
