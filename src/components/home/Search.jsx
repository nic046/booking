import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ setResult }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(inputRef.current.value.trim().toLowerCase());
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-fit">
      <div className="input-form flex items-center gap-4 bg-white">
        <input
          ref={inputRef}
          type="text"
          className="w-full md:w-fit focus:outline-none"
        />
        <button className="btn">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default Search;
