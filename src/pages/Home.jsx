// TODO: Import necessary modules and data
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ images, setImages }) {

  // "https://api.pexels.com/v1/search?query=nature&per_page=1"
  // TODO: Implement logic to display the list of songs

  //

  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  return (
    <div className="imageFlex">
      {images?.map(({ id, photographer, src }) => (
        <div key={id}>
          <Link to={`/image/${id}`}>
            <img src={src.medium} alt="" />
          </Link>
          <p>{photographer}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

// <div>
//         <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
//         <ol>
//           {songData.map((song, index) => {
//             return (
//               <Link to={`/song/${song.title}`} key={index}>
//                 <li>{song?.title || "Song not found"}</li>
//               </Link>
//             );
//           })}
//         </ol>
//       </div>
