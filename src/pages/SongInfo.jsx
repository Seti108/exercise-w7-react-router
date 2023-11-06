// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";
import data from "../data/songs.json";
// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const songParams = useParams();
  const songData = data.songs;

  const songInfo = songData.find((song) => {
    return song.title === songParams.songTitle;
  });

  return (
    <>
      <div>
        <h2>{songInfo?.title || "No title found"}</h2>
        <p>Rank: {songInfo?.rank || "Rank not found"}</p>
        <p>Rank: {songInfo?.artist || "Artist not found"}</p>
        <p>Album: {songInfo?.album || "Album not found"}</p>
        <p>Year: {songInfo?.year || "Year not found"}</p>
      </div>
    </>
  );

  songInfo.defaultProps = {
    title: "No title found",
    rank: "Rank not found",
    album: "No album found",
    year: "Year not found",
  };
}

export default SongInfo;
