import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar';
import FeaturedSong from './components/FeaturedSong';
import { MYR_TRACKS, RANDOM_MYR } from './data/data';
import Sidebar from './components/Sidebar';
import CategoryFilters from './components/CategoryFilters';
import { Container } from 'react-bootstrap';

function App() {
  const [randomTrack, setRandomTrack] = useState(RANDOM_MYR);

  return (
    <>
      <Nav />
      <div className='mainContent'>
        <Sidebar />
        <Container>
          <div className='sideContent'>
            {randomTrack && <FeaturedSong
              img={randomTrack.img}
              artist={randomTrack.artist}
              track={randomTrack.track}
              mp3={randomTrack.mp3}
            />}
          </div>
          <CategoryFilters />
        </Container>
      </div>
    </>
  );
}

export default App;
