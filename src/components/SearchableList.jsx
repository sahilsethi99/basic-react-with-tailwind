// src/components/SearchableList.jsx
import React, { useState } from 'react';

const SearchableList = () => {
  const [list] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);
  const [query, setQuery] = useState('');

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Searchable List</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <ul>
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <li key={index} className="py-2 border-b">
              {item}
            </li>
          ))
        ) : (
          <li className="py-2 text-gray-500">No results found.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchableList;
