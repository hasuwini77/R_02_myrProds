import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar';
import FeaturedSong from './components/FeaturedSong';
import { MYR_TRACKS } from './data/data';

function App() {


  return (
    <>
      < Nav />
      < FeaturedSong />
    </>
  )
}

export default App
