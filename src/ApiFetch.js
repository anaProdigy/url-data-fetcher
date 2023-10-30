import React, { useState } from 'react';


const ApiFetch = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);

  const async fetchData = () => {
    const response = await fetch(url);

    const jsonData = await response.json();
    setData(jsonData)
  }

  return (
    <div>
      <h1>Api Data Fetcher</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("Onsubmit");
      }}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required>
        </input>
      </form>
      <h2>
        Display Data
      </h2>

    </div>
  );

};

export default ApiFetch;

