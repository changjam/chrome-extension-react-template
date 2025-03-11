// Content script injected into web pages
console.log('Content script loaded');

// Example of manipulating the DOM
function addInfoBanner() {
  const banner = document.createElement('div');
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  banner.style.color = 'white';
  banner.style.padding = '10px';
  banner.style.zIndex = '9999';
  banner.style.textAlign = 'center';
  banner.textContent = 'Chrome Extension Active';
  banner.style.display = 'none'; // Hidden by default
  
  document.body.appendChild(banner);
  
  // Example of communication with background script
  chrome.runtime.sendMessage({ type: 'GET_DATA' }, (response) => {
    if (response && response.success) {
      console.log('Received from background:', response.data);
    }
  });
  
  return banner;
}

// Wait for page to load fully
window.addEventListener('load', () => {
  const banner = addInfoBanner();
  
  // Example: Toggle banner visibility with keyboard shortcut (Alt+B)
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'b') {
      banner.style.display = banner.style.display === 'none' ? 'block' : 'none';
    }
  });
});