import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar';
import FeaturedSong from './components/FeaturedSong';
import { MYR_TRACKS, RANDOM_MYR } from './data/data';

function App() {

  {/*Using state to hold the Random track selected  */ }
  const [randomTrack, setRandomTrack] = useState(RANDOM_MYR);

  return (
    <>
      < Nav />
      {randomTrack &&
        < FeaturedSong
          img={randomTrack.img}
          artist={randomTrack.artist}
          track={randomTrack.track}
          mp3={randomTrack.mp3} />}
    </>
  )
}

export default App
