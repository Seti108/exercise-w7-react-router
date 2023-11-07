// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";

// TODO: Destrcutrue props to receive information coming in from the parent comp
function ImagePage({ images }) {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const imageParams = useParams();

  const image = images.find((image) => {
    return parseInt(image.id) === parseInt(imageParams.id);
  });
  // console.log(image);
  return (
    <>
      <main>
        <img src={image.src.medium} alt="" />
      </main>
    </>
  );
}

export default ImagePage;
