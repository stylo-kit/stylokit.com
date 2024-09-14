/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Black
        'black-1': '#0F0C0B',

        // White Alpha
        'alpha-0': 'rgba(255, 255, 255, 0.00)',
        'alpha-5': 'rgba(255, 255, 255, 0.05)',
        'alpha-10': 'rgba(255, 255, 255, 0.10)',
        'alpha-20': 'rgba(255, 255, 255, 0.20)',
        'alpha-30': 'rgba(255, 255, 255, 0.30)',
        'alpha-40': 'rgba(255, 255, 255, 0.40)',

        // Black Alpha
        'black-5': 'rgba(0, 0, 0, 0.05)',
        'black-10': 'rgba(0, 0, 0, 0.10)',

        // Brand
        'brand-1': '#450E03',
        'brand-2': '#A2260C',
        'brand-3': '#CD3001',
        'brand-4': '#FF4800',
        'brand-5': '#FF620A',
        'brand-6': '#FF8532',

        // Brand Alpha
        'brand-alpha-8': 'rgba(255, 72, 0, 0.08)',
        'brand-alpha-16': 'rgba(255, 72, 0, 0.16)',
        'brand-alpha-24': 'rgba(255, 72, 0, 0.24)',

        // Yellow Color
        'yellow-1': 'rgb(214, 245, 25)',
        'yellow-2': 'rgb(239, 254, 90)',

        // Gray
        'gray-750': '#201F22',

        // Zing
        'zing': {
          50: '#FAFAFA',
          100: '#F5F5F4',
          200: '#E4E4E6',
          300: '#D5D4D9',
          400: '#A0A1AA',
          500: '#71717A',
          600: '#51525B',
          700: '#28272A',
          800: '#171719',
          900: '#111113',
          950: '#09090B',
        },

        // Purple
        'purple': {
          50: '#F4F3FF',
          100: '#EBE8FD',
          200: '#DCD6FE',
          300: '#C4B5FB',
          400: '#A58CF8',
          500: '#895DF3',
          600: '#7A3EEA',
          700: '#6C2CD9',
          800: '#5825B1',
          900: '#4A1F92',
          950: '#380E80',
        },

        // Neo Green
        'neo-green': {
          50: '#FDFDE4',
          100: '#FCFFC6',
          200: '#F6FE94',
          300: '#EFFE5A',
          400: '#E1FB23',
          500: '#D6F519',
          600: '#99B30D',
          700: '#738709',
          800: '#5B6C0D',
          900: '#364108',
          950: '#1F2700',
        },
      },
      aspectRatio: {
        'card-preview': '1.5916666666666666 / 1'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
