```
project-root/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── App.jsx
│   ├── pages/
│   │   ├── Popup/
│   │   │   ├── Popup.jsx
│   │   │   └── index.jsx
│   │   ├── Options/
│   │   │   ├── Options.jsx
│   │   │   └── index.jsx
│   │   └── Sidebar/
│   │       ├── Sidebar.jsx
│   │       └── index.jsx
│   ├── scripts/
│   │   ├── background.js
│   │   └── content.js
│   ├── styles/
│   │   ├── global.css
│   │   └── popup.css
│   ├── popup.html
│   ├── options.html
│   └── manifest.json
├── public/
│   └── icons/
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
├── dist/          # Build output directory
├── config/
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```