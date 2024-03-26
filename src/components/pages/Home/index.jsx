import React from "react";
import CategoryFilters from "../../CategoryFilters";
import FeaturedSong from "../../FeaturedSong";
import { RANDOM_MYR } from "../../../data/data";
import { Container } from "react-bootstrap";

const Home = () => {
  const randomTrack = RANDOM_MYR;

  return (
    <div className="mainContent">
      <div className="sideContent">
        {randomTrack && <FeaturedSong img={randomTrack.img} artist={randomTrack.artist} track={randomTrack.track} mp3={randomTrack.mp3} backgroundImg={randomTrack.img} />}
        <Container>
          <CategoryFilters />
        </Container>
      </div>
    </div>
  );
};

export default Home;
