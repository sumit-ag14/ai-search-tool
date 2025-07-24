import React, { useEffect, useState } from 'react';

function SearchBar({ onSearch, resetSignal }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };
  useEffect(() => {
    setQuery('');
    return () => {
      
    };
  }, [resetSignal]);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 mb-6"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => {
            // console.log("User typing:", e.target.value);
            setQuery(e.target.value)
        }}
        placeholder="Search products..."
        className="w-full max-w-md p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        🔍
      </button>
    </form>
  );
}

export default SearchBar;
