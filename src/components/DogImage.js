import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const DogImage = (props) => {
  const [loaded, setLoaded] = useState(false);
  const imageStyle = !loaded ? { display: "none" } : {};

  const loadComplete = () => {
    setLoaded(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      {!loaded && <Spinner animation="border" className="m-5"/>}
      <Card.Img {...props} style={imageStyle} onLoad={loadComplete} />
    </div>
  );
};

export default DogImage;
