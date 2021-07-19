import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image from "./44.jpg";
import { useParams } from "react-router-dom";

const Detailed = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);
  const [fetch1, setFetch1] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setMyData(res.data[id - 1]);
      setFetch1(res.data);
      console.log(res.data[1]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [show, setShow] = useState(false);

  const toogle = () => {
    setShow(!show);
    if (show1 === true) {
      setShow1(false);
    }
  };
  const [show1, setShow1] = useState(false);

  const handle = () => {
    setShow1(!show1);
    if (show === true) {
      setShow(false);
    }
  };

  return (
    <Container>
      <Title>Goody's Fashion Store</Title>
      <Wrapper>
        <Image src={myData && myData.image} />
        <span>{myData && myData.title}</span>
        <p>{myData && myData.description}</p>
        <div>{myData && myData.category}</div>
      </Wrapper>
      <Recommended>
        <Box1>
          <Box onClick={toogle}>Mens clothing</Box>
          <Box onClick={handle}>Womens clothing</Box>
        </Box1>
        <ShowAll>
          <Men>
            {show
              ? fetch1.map(({ id, image, category }) => (
                  <Category1 key={id}>
                    {category === "men's clothing" ? <img src={image} /> : null}
                  </Category1>
                ))
              : null}
          </Men>
          <Men>
            {show1
              ? fetch1.map(({ id, image, category }) => (
                  <Category1 key={id}>
                    {category === "women's clothing" ? (
                      <img src={image} />
                    ) : null}
                  </Category1>
                ))
              : null}
          </Men>
        </ShowAll>
      </Recommended>
    </Container>
  );
};

export default Detailed;

const Container = styled.div`
  height: 150vh;
  width: 100vw;
  background-color: darkblue;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 35px;
  color: white;
  font-family: poppins;
  margin: 10px;
  color: pink;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 15px;
    text-align: center;
    width: 700px;
  }
  span {
    margin-top: 20px;
    color: white;
    font-size: 15px;
    text-align: center;
    width: 700px;
    text-transform: uppercase;
    font-weight: bold;
  }
  div {
    margin-top: 10px;
    color: white;
    font-size: 15px;
    text-align: center;
    width: 700px;
    text-transform: uppercase;
  }
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  margin-top: 10px;
  object-fit: cover;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;

const Recommended = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
margin: 30px;
  height: 100px;
  width: 200px;
  border-radius: 10px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center
  font-size: 18px;
  font-weight: bold;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 350ms;
  &:hover{
    transform: scale(1.05)
  }
`;

const Box1 = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ShowAll = styled.div`
  height: 80px;
  width: 500px;
`;

const Men = styled.div`
  display: flex;
  justify-content: center;
`;

const Category1 = styled.div`
width: 100vw;
display; flex;
img{
  height: 150px;
  width: 150px;
  margin: 20px;
  border-radius: 5px;
}
`;
