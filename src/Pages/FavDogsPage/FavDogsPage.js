import React, { useEffect, useState } from "react";
import { Card, Col, Container, Navbar, Row, Spinner } from "react-bootstrap";
import { KEY_STORAGE_FAV_DOGS } from "../../utils/constants";
import { isFavourite, toggaleFavourites } from "../../utils/utils";
import "./FavDogsPage.css";
import favImg from "../../images/favourite.svg";
import unFavImg from "../../images/un_favourite.svg";
import DogImage from "../../components/DogImage";
import backImage from "../../images/back.svg";
import { useNavigate } from "react-router";

const FavDogsPage = () => {
  const [dogList, setDogs] = useState(
    JSON.parse(localStorage.getItem(KEY_STORAGE_FAV_DOGS) || "[]")
  );
  let navigate = useNavigate();

  const setFavourite = (item) => {
    toggaleFavourites(item);
    setDogs(JSON.parse(localStorage.getItem(KEY_STORAGE_FAV_DOGS) || "[]"));
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
         
          <Navbar.Brand href="/">
          <img
            className="img-refresh"
            src={backImage}
            onClick={()=>{
              navigate('/');
            }}
          />{" "}
            All Favourites
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row className="justify-content-center">
        {dogList &&
          dogList.map((item, index) => {
            return (
              <Col key={index} className="m-2" md={3} sm={2}>
                <Card style={{ width: "18rem" }}>
                  <DogImage
                    key={item}
                    variant="top"
                    className="dog-image"
                    src={`${process.env.REACT_APP_BASEURL}/${item}`}
                  />
                  <Card.Body>
                    <div
                      onClick={() => {
                        setFavourite(item);
                      }}
                    >
                      {isFavourite(item) ? (
                        <img src={favImg} height="25px" width="25px" />
                      ) : (
                        <img src={unFavImg} height="25px" width="25px" />
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default FavDogsPage;
