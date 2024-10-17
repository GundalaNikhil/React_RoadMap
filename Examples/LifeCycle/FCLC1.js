import React, { useState, useEffect } from "react";

function LifecycleExample() {
  const [count, setCount] = useState(0);

  // Similar to constructor and componentDidMount
  useEffect(() => {
    console.log("Component has been rendered to the DOM");
    // Simulating an API call
    const timer = setTimeout(() => {
      setCount(1);
    }, 1000);

    // Similar to componentWillUnmount
    return () => {
      console.log("Component is about to be removed from the DOM");
      clearTimeout(timer);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Similar to componentDidUpdate
  useEffect(() => {
    console.log("Component has been updated");
    if (count > 0) {
      console.log("The count has changed");
    }
  }, [count]); // This effect runs when count changes

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("Component is being rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default LifecycleExample;
