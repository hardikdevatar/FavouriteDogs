import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { getAllDogs } from "../../actions/homepage-action";
import {
  getRandomList,
  isFavourite,
  setFavourites,
  toggaleFavourites,
} from "../../utils/utils";
import {
  Card,
  Col,
  Container,
  Image,
  Navbar,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import favImg from "../../images/favourite.svg";
import unFavImg from "../../images/un_favourite.svg";
import refreshImg from "../../images/refresh.svg";
import Button from "@restart/ui/esm/Button";
import DogImage from "../../components/DogImage";
import logoImage from "../../images/logo.png";

const Homepage = () => {
  const allDogs = useSelector((state) => state.HomepageReducer.dogsList);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [randomList, setRandomList] = useState([]);
  const [updateComponent, setUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  useEffect(() => {
    if (allDogs) {
      setRandomList(getRandomList(allDogs, 6));
    }
  }, [allDogs]);

  const refreshRandomList = () => {
    setRandomList(getRandomList(allDogs, 6));
  };

  const setFavourite = (item) => {
    toggaleFavourites(item);
    setUpdate(!updateComponent);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Favourite Dogs
          </Navbar.Brand>

          <div>
            <img
              className="img-refresh"
              src={refreshImg}
              onClick={refreshRandomList}
            />

            <img
              className="img-refresh ms-2"
              src={favImg}
              onClick={() => {
                navigate("favaourite");
              }}
            />
          </div>
        </Container>
      </Navbar>
      <Row className="justify-content-center">
        {randomList &&
          randomList.map((item, index) => {
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

export default Homepage;
