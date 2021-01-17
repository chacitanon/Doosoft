import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const ButtonRegister = styled.button`
position: absolute;
width: 146px;
height: 51px;
left: 577px;
top: 512px;
background: #66BD52;
box-shadow: 0px 4px 11px -1px rgba(0, 0, 0, 0.25);
border-radius: 15px;
color:white;
`;

const Text1 = styled.h2`
position: absolute;
height: 28px;
left: 577px;
top: 274px;
font-family: Moon;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
color:white;
`;
const Text2 = styled.h2`
position: absolute;
height: 28px;
left: 577px;
top: 319px;
font-family: Moon;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
color:white;
`;

const TextLorem = styled.div`
position: absolute;
width: 617px;
height: 102px;
left: 577px;
top: 370px;
font-family: Helvetica Neue;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
`;

const Logo = styled.img`
position: absolute;
width: 383px;
height: 235px;
left: 94px;
top: 277px;
`;

const Img1 = styled.div`
/* Vector */
position: absolute;
left: 577px;
top: 210px;
`;
const Img2 = styled.div`
/* Vector */
position: absolute;
left: 1100px;
top: 512px;

`;


function Homepage() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const onRedirect = (path) => {
    history.push(path);
    setShow(!show);
  };
  return (
    <>
      <Logo src="https://res.cloudinary.com/da8hlqolk/image/upload/v1610727677/doosoft/Screenshot_17-removebg-preview_gfzy2w.png"></Logo>
      <Img1><svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0184141 38L0.0184141 19.8932C-0.0946664 17.3995 0.313863 14.9089 1.22212 12.5549C2.08045 10.3417 3.37804 8.29192 5.0499 6.50832C8.46807 2.9119 13.2194 0.594355 18.393 0V7.81108C15.1069 8.84083 12.862 10.3598 11.6583 12.368C10.3794 14.6526 9.75803 17.1969 9.85269 19.7613L18.405 19.7613V37.989L0.0184141 38ZM27.6194 38V19.8932C27.5032 17.3993 27.9118 14.9082 28.8231 12.5549C29.6792 10.3419 30.9748 8.29214 32.6449 6.50832C36.0663 2.91277 40.8191 0.595566 45.994 0V7.81108C42.7079 8.84083 40.4609 10.3598 39.2532 12.368C37.9773 14.6536 37.3562 17.1972 37.4477 19.7613L46 19.7613L46 37.989L27.6194 38Z" fill="white" />
      </svg></Img1>
      <Text1>DOOSOFT</Text1>
      <Text2>CTO AS SERVICE</Text2>
      <TextLorem>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries,
      but also the leap into electronic typesetting,
      remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TextLorem>
      <ButtonRegister onClick={() => onRedirect("/register")}>GET START</ButtonRegister>
      <Img2><svg width="73" height="60" viewBox="0 0 73 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.9708 -2.55471e-09L72.9708 28.5896C73.1502 32.5271 72.5019 36.4596 71.0605 40.1765C69.6984 43.671 67.6392 46.9075 64.986 49.7237C59.5615 55.4023 52.0214 59.0615 43.8111 60L43.8111 47.6667C49.026 46.0408 52.5886 43.6424 54.4989 40.4716C56.5284 36.8643 57.5144 32.847 57.3642 28.7979L43.792 28.7979L43.792 0.0173467L72.9708 -2.55471e-09ZM29.1692 -3.83181e-06L29.1692 28.5896C29.3536 32.5274 28.7052 36.4607 27.259 40.1765C25.9004 43.6706 23.8443 46.9071 21.194 49.7237C15.7643 55.4009 8.22185 59.0596 0.00955963 60L0.00956071 47.6667C5.22449 46.0408 8.79024 43.6424 10.7068 40.4716C12.7316 36.8627 13.7174 32.8466 13.5722 28.7979L2.72777e-06 28.7979L5.24385e-06 0.0173429L29.1692 -3.83181e-06Z" fill="white" />
      </svg></Img2>
    </>
  );
}

export default Homepage;
