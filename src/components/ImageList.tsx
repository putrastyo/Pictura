import { ImageType } from "../types/Image";
import ImageCard from "./ImageCard";

interface ImageListProps {
  images: ImageType[];
}

const ImageList = ({ images }: ImageListProps) => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
