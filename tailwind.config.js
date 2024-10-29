export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // HEADER TOP
      'header-top-text': '#7f4dff',
      'header-top-text-hover': '#7000ff',
      'header-top-bg': '#f0f2f5',

      // HEADER
      'header-catalog-btn-color': '#7f4dff',
      'header-catalog-btn-bg': '#e5e5ff',
      'header-catalog-btn-bg-hover': '#ceccff',

      'h-hover': '#dee0e5',
      'txt-p': '#1f2026',
      'primary': '#7f4dff',
      'secondary': '#1f2026',
      'dark': '#4d4f59',
      'primary-90': '#e5e5ff',
      'h-btn-hover': '#ceccff',
      'grey-o-100': '#36374033',
      'grey-100': '#f0f2f5',
      'grey-200': '#edeff2',

      // HEADER BOTTOM
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font for "font-sans" class
      },
    },
  },
  plugins: [],
};
