import axios from "axios";
import ImageList from "./components/ImageList";
import { useState, useEffect } from "react";
import { ImageType } from "./types/Image";
import SearchImage from "./components/SearchImage";

const App = () => {
  const [images, setImages] = useState<ImageType[] | null>([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=42736044-c517b9a8a44fcd47faff7d25e&q=${term}&image_type=photo&pretty=true`
        );
        setImages(response.data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getImages();
    // eslint-disable-next-line
  }, [term]);

  return (
    <div className="lg:container px-2 mx-auto">
      <SearchImage searchText={(text) => setTerm(text)} />
      {images?.length ? <ImageList images={images} /> : <p>Not found.</p>}
    </div>
  );
};

export default App;
