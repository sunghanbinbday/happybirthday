import meow from '.././galleryassets/meow-speech-bubble-final.png';
import useSound from 'use-sound';
import meowsound from '.././galleryassets/cat-meow-6226.mp3';

const FlipCard2 = ({ imgUrl, backImgUrl }) => {
  const [playMeowSound] = useSound(meowsound);

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front" onMouseEnter={() => {
          playMeowSound()
        }}>
          <img style={{
            objectFit: "contain",
            overflow: 'hidden',
            maxWidth: "100%"
          }}
            src={imgUrl} alt="Avatar" />
        </div>
        <div class="flip-card-back">
          <img style={{
            objectFit: "contain",
            overflow: 'hidden',
            maxWidth: "100%"
          }}
            src={backImgUrl} alt="cat"></img>
          <img style={{
            objectFit: "contain",
            overflow: 'hidden',
            maxWidth: "25%"
          }}
            src={meow}
            alt="meow bubble text" />

        </div>
      </div>
    </div>
  )
}
export default FlipCard2;
