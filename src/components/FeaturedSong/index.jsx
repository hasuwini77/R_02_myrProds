import React from "react";
import { getAudioURL, getImageURL } from "../../utils/function";
import Container from "react-bootstrap/Container";

const FeaturedSong = ({ backgroundImg, img, artist, track, mp3 }) => {
  const backgroundStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    borderRadius: "10px",
    fontFamily: "Pixelify Sans, sans-serif",
    position: "relative",
    zIndex: "20",
  };

  const backgroundImageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${getImageURL(backgroundImg)})`,
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    filter: "blur(10px)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 100,
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px",
  };

  const imgStyle = {
    zIndex: 102,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    width: "60%",
  };

  const h3Style = {
    margin: "10px 0",
  };

  const h4Style = {
    margin: "8px 0",
    padding: "8px",
  };

  return (
    <Container>
      <div style={backgroundStyle}>
        <div style={backgroundImageStyle}></div>
        <div style={contentStyle}>
          <img src={getImageURL(img)} alt="Song" style={imgStyle} />
          <h3 style={h3Style}>{artist}</h3>
          <h4 style={h4Style}>{track}</h4>
          <audio controls>
            <source src={getAudioURL(mp3)} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedSong;
