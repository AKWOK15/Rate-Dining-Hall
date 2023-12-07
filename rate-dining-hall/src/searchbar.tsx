import React, { useState } from 'react';
import {Link} from 'react-router-dom';
function SearchBar() {
  const [search, setSearch] = useState('');
  const diningHalls = [
    { name: "Roberts" },
    { name: "Dana" },
    { name: "Spa" },
    { name: "Foss" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Use filter and store the result in a variable
  const filteredDiningHalls = diningHalls.filter((diningHall) => 
    diningHall.name.toLowerCase().match(search.toLowerCase()) !== null
    );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for your dining hall"
        value={search}
        onChange={handleChange}
      />
      {/* Map over the filtered result instead of the original array */}
      {/* The outermost curly braces {}: These are used to indicate that the content inside is a JavaScript expression, and the result of this expression will be rendered by React */}
      {filteredDiningHalls.map((diningHall, index) => (
        <div key={index}>
          <Link to={"/"+diningHall.name.toLowerCase()}>{diningHall.name}</Link>
        </div>
      ))}
    </div>
  );
}


export default SearchBar;



