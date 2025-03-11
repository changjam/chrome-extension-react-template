import React, { useState, useEffect } from 'react';
import '../../styles/popup.css';

const Popup = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Example of using Chrome storage API
    chrome.storage.local.get(['count'], (result) => {
      if (result.count) {
        setCount(result.count);
      }
    });
  }, []);
  
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    chrome.storage.local.set({ count: newCount });
  };
  
  return (
    <div className="popup-container">
      <h1>Chrome Extension</h1>
      <p>This is a React-powered Chrome Extension 123342</p>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default Popup;