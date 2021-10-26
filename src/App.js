import {useState, useEffect} from 'react';
import Player from './components/Player/Player';



function App() 
{
  const [songs] = useState([
    {
      title: "Who says",
      artist: "Selena Gomez",
      img_src: "./images/song-1.jpg",
      src: "./music/who_says.mp3"
    },
    {
      title: "Sorry",
      artist: "Justin Bieber",
      img_src: "./images/song-2.jpg",
      src: "./music/sorry.mp3"
    },
    {
      title: "Ella es mi",
      artist: "Juank Ricardo",
      img_src: "./images/song-3.jfif",
      src: "./music/ella_es_me.mp3"
    },
    {
      title: "Unstopable",
      artist: "Sia",
      img_src: "./images/song-4.jfif",
      src: "./music/unstopable.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}



export default App;
