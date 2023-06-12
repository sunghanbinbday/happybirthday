import './App.css';
import './FlipAnimation.css';
import './FlipAnimationHori.css';
import Youtube from 'react-youtube';
import Congrats from './components/Congrats';
import About from './components/About';
import Gallery from './components/Gallery';
import Stickers from './components/Stickers';

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <Youtube
          videoId='rIAwzth9iuM'
          opts={{
            playerVars: {
              autoplay: 1,
              playsinline: 1,
              controls: 0,
              loop: 1,
              mute: 1,
              playlist: "rIAwzth9iuM"
            },
          }}
          iframeClassName="iframe-background"
        />
      </div>
      <div id="overlay" className='parent'>

        <grid-item id="item1">
          <Congrats />
        </grid-item>
        <grid-item id="item2">
          <About />
        </grid-item>
        <grid-item id="item3">
          <Gallery />
        </grid-item>
        <grid-item id="item4">
          <Stickers />
        </grid-item>
        <grid-item id="item5">
          <h1> Footer.. what to put here?</h1>
        </grid-item>
      </div>
    </div>
  );
}

export default App;
