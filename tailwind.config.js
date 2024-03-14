/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem'
      },
      colors: {
        light: {
          pr: '#D8FF84',
          pr_snd: '#A9DB3E',
          snd: '#DAD6CA',
          bg: '#111111',
          bg_snd: '#1C1C1C'
        }
      },
      flex: {
        half: '0 0 50%'
      }
    },
    fontFamily: {
      grozen: ['GrozenMedical', 'sans'],
      neue: ['Neue', 'sans']
    }
  },
  plugins: []
}
