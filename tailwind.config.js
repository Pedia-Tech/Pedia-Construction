/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          bg: '#FAF9F5',
          card: '#FFFFFF',
          subtle: '#F4F2EB',
          concrete: '#ECEAE1',
          border: '#DED9CE',
          borderLight: '#ECE8DF',
          navy: '#0B1528',
          navyLight: '#182742',
          slate: '#505E70',
          slateLight: '#7E8B9B',
          accent: '#C5A059',
          accentHover: '#B28E46',
          accentLight: '#F5EEDC',
          steel: '#2B4C6F',
          steelLight: '#E6EDF5',
          terracotta: '#C85A32',
          terracottaLight: '#FCEFEA',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(11, 21, 40, 0.04), 0 1px 2px rgba(11, 21, 40, 0.02)',
        'premium': '0 10px 30px -5px rgba(11, 21, 40, 0.06), 0 4px 12px -2px rgba(11, 21, 40, 0.03)',
        'elevated': '0 20px 40px -10px rgba(11, 21, 40, 0.08), 0 8px 16px -4px rgba(11, 21, 40, 0.04)',
        'technical': '0 0 0 1px #DED9CE, 0 4px 16px rgba(11, 21, 40, 0.04)',
      }
    },
  },
  plugins: [],
}
