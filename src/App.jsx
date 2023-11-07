import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import routes from "./routes/routes";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import ImagePage from "./pages/imagePage";
// import NavBar from "./components/NavBar";
import { apiKey } from "./apikey";

const App = () => {
  const searchUrl = "https://api.pexels.com/v1/search"; //`https://api.pexels.com/v1/search?query=${initQuery}&per_page=12`;
  // let initQuery = "?query=lion&per_page=64";
  //State
  const [images, setImages] = useState(null);
  const [searchQuery, setSearchQuery] = useState("lion");

  //Write a fetch function

  const fetchImages = (query) => {
    fetch(searchUrl + `?query=${query}&per_page=64`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setImages(data.photos);
        } else {
          throw new Error("Couldn't contact the API");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(images);
  };

  // useEffect to get an initial API call

  useEffect(() => {
    fetchImages(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route
              path="/"
              element={<Home images={images} setSearchQuery={setSearchQuery} />}
            />
            {/* Define your dynamic route here below */}
            <Route
              path="/image/:id"
              element={<ImagePage images={images} />}
            ></Route>
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
