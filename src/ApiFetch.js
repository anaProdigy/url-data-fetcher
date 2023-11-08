import React, { useState } from 'react';


const ApiFetch = () => {
  // const [url, setUrl] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements)
    const {url} = e.target.elements
    try {
      const response = await fetch(url.value);
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
      <form onSubmit={handleSubmit}>
        <label>
          <input name="url" type="text" required>
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

