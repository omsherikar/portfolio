import musicData from "../utils/musicData";

function Songs() {
  return (
    <div className="section">
      <h1>Our Songs 🎶</h1>
      {musicData.map((song, index) => (
        <div key={index} className="my-4">
          <p>{song.title}</p>
          <audio controls>
            <source src={song.src} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}

export default Songs;
