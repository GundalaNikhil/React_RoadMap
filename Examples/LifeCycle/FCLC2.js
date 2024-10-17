import React, { useState, useEffect } from "react";

const DataFetcher = ({ query }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect to handle data fetching
  useEffect(() => {
    console.log("Component Did Mount / Query Changed");
    // Simulate an API call
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();

    // Cleanup function for unmounting
    return () => {
      console.log("Component Will Unmount");
      // Clean up if necessary (e.g., cancel a fetch or clear timers)
    };
  }, [query]); // Runs whenever `query` prop changes

  console.log("Render Method");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data Fetched</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
