import React from "react";
import styled from "styled-components";
import image from "./gg.jpg";

const Home = () => {
  return (
    <Container id="Home">
      <Image src={image} />
      <Hold>
        <Text>I'm Goodluck Ogbonna A Full-Stack Developer </Text>
        <Text1>A Portfolio made by Goodluck</Text1>
      </Hold>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  background-filter: blur(5px);
`;

const Hold = styled.div`
  position: absolute;
`;

const Text = styled.div`
  font-family: "Quicksand", sans-serif;
`;

const Text1 = styled.div`
  font-family: "Quicksand", sans-serif;
`;
