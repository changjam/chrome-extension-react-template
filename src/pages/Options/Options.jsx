import React, { useState, useEffect } from 'react';

const Options = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true
  });
  
  useEffect(() => {
    // Load settings from Chrome storage
    chrome.storage.local.get(['settings'], (result) => {
      if (result.settings) {
        setSettings(result.settings);
      }
    });
  }, []);
  
  const handleThemeChange = (e) => {
    const newSettings = { ...settings, theme: e.target.value };
    setSettings(newSettings);
    chrome.storage.local.set({ settings: newSettings });
  };
  
  const handleNotificationChange = (e) => {
    const newSettings = { ...settings, notifications: e.target.checked };
    setSettings(newSettings);
    chrome.storage.local.set({ settings: newSettings });
  };
  
  return (
    <div className="options-container">
      <h1>Extension Options</h1>
      
      <div className="option-group">
        <label>
          Theme:
          <select value={settings.theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      
      <div className="option-group">
        <label>
          Enable Notifications:
          <input 
            type="checkbox" 
            checked={settings.notifications} 
            onChange={handleNotificationChange} 
          />
        </label>
      </div>
    </div>
  );
};

export default Options;