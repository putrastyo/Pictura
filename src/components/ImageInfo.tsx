import IconView from "../assets/icons/view.png";
import { ImageType } from "../types/Image";

interface ImageInfoProps {
  image: ImageType;
}

const ImageInfo = ({ image }: ImageInfoProps) => {
  return (
    <div className="opacity-0 hover:opacity-100 bg-black/50 transition-all absolute top-0 right-0 bottom-0 left-0 p-4 text-white">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center flex-wrap justify-center gap-1">
          {image.tags.split(", ").map((item) => (
            <small className="bg-gray-100 text-gray-800 text-xs font-medium px-1 rounded">
              #{item}
            </small>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-1">
          <img src={IconView} width="12px" />
          <small className="text-xs">{image.views}</small>
        </div>
      </div>
    </div>
  );
};

export default ImageInfo;
