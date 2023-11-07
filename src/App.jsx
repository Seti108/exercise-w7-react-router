import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import routes from "./routes/routes";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import ImagePage from "./pages/imagePage";

const App = () => {
  const apiKey = "HNlWrNyrM3j4grG8blmoPR5CSzydQJhf6MlziFMRSxpluVir4aRe8eZD";
  const searchUrl = "https://api.pexels.com/v1/search"; //`https://api.pexels.com/v1/search?query=${initQuery}&per_page=12`;
  let initQuery = "?query=react&per_page=12";
  //State
  const [images, setImages] = useState(null);

  //Write a fetch function

  const fetchImages = (query) => {
    fetch(searchUrl + query, {
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
    fetchImages(initQuery);
  }, []);
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home images={images} setImages={setImages} />}
            />
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
