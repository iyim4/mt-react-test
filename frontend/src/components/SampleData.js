import { useEffect, useState } from 'react';

function SampleData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/get-sample')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('API fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Sample Results</h1>

      {data ? (
        <div style={{ textAlign: 'left', padding: '20px' }}>
          <p>Message: {data.message}</p>
          <p>Sample: {data.sample.toString()}</p>
          <p>Debug: {data.debug.toString()}</p>
          <p>Raw Data (should be in json format):</p>
          <p>{JSON.stringify(data)}</p>
          <div>
          <p>pretty json</p>
          <p><pre>{JSON.stringify(data, null, 2)}</pre></p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SampleData;
