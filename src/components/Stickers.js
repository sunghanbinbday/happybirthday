import downloadablestickers from ".././stickers/shb sticker final.png";

export default function Stickers() {
  return (
    <div className="section4">
      <h1>Downloadable Stickers</h1>
      <img style={{
        maxHeight: "90%",
        maxWidth: "90%"
      }}
        src={downloadablestickers} alt="downloadable stickers" />
    </div>
  )
}