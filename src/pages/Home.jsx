// TODO: Import necessary modules and data
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home({ images, setSearchQuery }) {
  return (
    <>
      <NavBar setSearchQuery={setSearchQuery} />
      <div className="imageFlex">
        {images?.map(({ id, src }) => (
          <div className="imageFlexDiv" key={id}>
            <Link to={`/image/${id}`}>
              <img loading="lazy" src={src.landscape} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </>
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
