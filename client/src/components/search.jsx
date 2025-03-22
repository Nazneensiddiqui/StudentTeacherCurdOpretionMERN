

const SearchBar = () => {
    return (
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search your wish here"
          className="w-1/2 p-2 border rounded-l-md focus:outline-none"
        />
        <button className="p-2 bg-gray-100 border rounded-r-md">
          🔍
        </button>
      </div>
    );
  };
  export  default SearchBar;