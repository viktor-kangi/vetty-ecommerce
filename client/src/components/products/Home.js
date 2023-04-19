import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data from API endpoint
    fetch('https://example.com/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
