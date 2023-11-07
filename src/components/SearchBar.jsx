import { useState } from "react";

export default function SearchBar({ setSearchQuery }) {
  let inputValue;
  const sendQuery = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  const handleInput = (e) => {
    inputValue = e.target.value;
  };
  return (
    <form>
      <input type="text" onChange={handleInput} value={inputValue} />
      <button onClick={sendQuery} type="submit">
        Search
      </button>
    </form>
  );
}
