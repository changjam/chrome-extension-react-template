import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup.html'),
        options: resolve(__dirname, 'src/options.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  // Custom config to copy scripts and manifest to dist folder
  // This hooks into Vite's build process
  configureServer: ({ middlewares }) => {
    middlewares.use((req, res, next) => {
      next();
    });
  },
  // Add a custom hook that runs after the build
  closeBundle: () => {
    // Copy manifest.json
    fs.copyFileSync('src/manifest.json', 'dist/manifest.json');
    
    // Create scripts directory in dist if it doesn't exist
    if (!fs.existsSync('dist/scripts')) {
      fs.mkdirSync('dist/scripts', { recursive: true });
    }
    
    // Copy background.js and content.js
    fs.copyFileSync('src/scripts/background.js', 'dist/scripts/background.js');
    fs.copyFileSync('src/scripts/content.js', 'dist/scripts/content.js');
    
    // Copy icons
    if (!fs.existsSync('dist/icons')) {
      fs.mkdirSync('dist/icons', { recursive: true });
    }
    
    const iconDir = 'public/icons';
    fs.readdirSync(iconDir).forEach(file => {
      fs.copyFileSync(`${iconDir}/${file}`, `dist/icons/${file}`);
    });
    
    console.log('Additional extension files copied to dist folder');
  }
});