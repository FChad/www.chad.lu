/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts}', // Alle Seiten
    './components/**/*.{vue,js,ts}', // Alle Komponenten
    './layouts/**/*.{vue,js,ts}', // Layout-Dateien
    './app.vue', // Haupt-App Datei
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}

