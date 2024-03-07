import { ImageType } from "../types/Image";
import ImageInfo from "./ImageInfo";

interface ImageCardProps {
  image: ImageType;
}

const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className="relative w-full h-40 overflow-hidden group">
      <a href={image.pageURL}>
        <img
          src={image.largeImageURL}
          className="h-full w-full object-cover group-hover:scale-110 transition"
        />
        <ImageInfo image={image} />
      </a>
    </div>
  );
};

export default ImageCard;
