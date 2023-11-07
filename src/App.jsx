import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import routes from "./routes/routes";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import ImagePage from "./pages/imagePage";
import NavBar from "./components/NavBar";

const App = () => {
  const apiKey = "HNlWrNyrM3j4grG8blmoPR5CSzydQJhf6MlziFMRSxpluVir4aRe8eZD";
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
          throw new Error("Could't contact the API");
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
  }, []);

  useEffect(() => {
    fetchImages(searchQuery);
  }, [searchQuery]);
  return (
    <>
      <BrowserRouter>
        <NavBar setSearchQuery={setSearchQuery} />
        <main>
          <Routes>
            <Route path="/" element={<Home images={images} />} />
            {/* Define your dynamic route here below */}
            <Route
              path="/image/:id"
              element={<ImagePage images={images} />}
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
