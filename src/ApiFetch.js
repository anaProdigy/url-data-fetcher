import React, { useState } from 'react';


const ApiFetch = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
      setData(null);
    }
  };

  return (
    <div>
      <h1>Api Data Fetcher</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        fetchData();
      }}>
        <label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required>
          </input>
        </label>
       <button type="submit">SUBMIT</button>
      </form>
      <h2>
        Your Data
      </h2>

      {data ? (
        <div>
          
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ):(
        <h4>Sorry, nothing to show</h4>
      )}
    </div>
  );

};

export default ApiFetch;

