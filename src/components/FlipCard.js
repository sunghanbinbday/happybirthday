export default function FlipCard({ imgUrl, msg, author, imgBackUrl }) {
  const displayHam = imgBackUrl ? <img style={{
    overflow: 'hidden',
    maxWidth: "100%",
    minHeight: "0%"
  }}
    src={imgBackUrl} alt="hamster" /> : <div></div>;
  return (
    <label>
      <input type="checkbox"></input>
      <div className="flip-card">
        <div class="front">
          <img style={{
            overflow: 'hidden',
            maxWidth: "100%",
            minHeight: "0%"
          }}
            src={imgUrl} alt="hanbin childhood" />
        </div>
        <div className="back">

          {displayHam}
          <h3> {author} </h3>
          <p style={{
            textAlign: "left"
          }}> {msg} </p>
        </div>
      </div>
    </label>
  )

}