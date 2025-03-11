// Background script for the Chrome Extension
console.log('Background script loaded');

// Example of using Chrome API in background script
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
  
  // Initialize storage with default values
  chrome.storage.local.set({
    count: 0,
    settings: {
      theme: 'light',
      notifications: true
    }
  });
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received in background script:', message);
  
  if (message.type === 'GET_DATA') {
    // Example of sending data back to the requester
    sendResponse({ success: true, data: 'Data from background script' });
  }
  
  // Return true to indicate you want to send a response asynchronously
  return true;
});