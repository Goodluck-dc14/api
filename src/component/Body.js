import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const App = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setFetchData(res.data);
      console.log("This is myData:", fetchData);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      {fetchData.map(({ id, title, description, image, category }) => (
        <Wrapper key={id}>
          <RoutLink to={`/Detailed/${id}`}>
            <Image src={image} />
            <span>{title}</span>
            <div>{category}</div>
          </RoutLink>
        </Wrapper>
      ))}
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: pink;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 160px;
  height: 230px;
  background-color: #4a154b;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  color: white;
  span {
    display: flex;
    // flex-direction: column;
    font-weight: bold;
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 8px;
  }
  > div {
    font-size: 5px;
    font-weight: bold;
    color: red;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 5px;
  object-fit: cover;
`;

const RoutLink = styled(Link)`
  color: white;
`;
