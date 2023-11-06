// TODO: Import necessary modules and data
import { Link } from "react-router-dom";
import data from "../data/songs.json";
function Home() {
  // TODO: Implement logic to display the list of songs
  const songData = data.songs;
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        <ol>
          {songData.map((song, index) => {
            return (
              <Link to={`/song/${song.title}`} key={index}>
                <li>{song?.title || "Song not found"}</li>
              </Link>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default Home;
