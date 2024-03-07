import { useState } from "react";
import SearchIcon from "../assets/icons/search.png";

interface SearchImageProps {
  searchText: (text: string) => void;
}

const SearchImage = ({ searchText }: SearchImageProps) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="lg:w-1/2 w-full py-4 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-stretch">
          <input
            type="search"
            name="search"
            placeholder="Type to search..."
            className="border-2 border-gray-600 py-2 px-3 outline-none rounded-l text-sm text-gray-800 font-medium w-full focus:bg-slate-200 transition"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoComplete="off"
          />
          <button className="bg-gray-600 rounded-r px-4" type="submit">
            <img src={SearchIcon} width="18px" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchImage;
