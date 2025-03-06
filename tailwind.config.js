module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',  // Extra Small screens (small phones)
      sm: '480px',  // Small devices
      smd: '540px', // NEW - Small-Medium devices (e.g., mid-sized phones)
      md: '768px',  // Tablets
      lg: '976px',  // Laptops
      xl: '1440px', // Large desktops
      xxl: '1920px' // Extra Large screens (4K displays)
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontSize: {
        xl2: '1.75rem',
        xl3: '2rem',
        xl4: '2.5rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem', // NEW - Useful for large sections
        '192': '48rem', // NEW - For fullscreen designs
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem', // NEW - More rounded corners
        '6xl': '3rem', // NEW - Ultra-rounded elements
      },
    }
  },
  plugins: [],
};
