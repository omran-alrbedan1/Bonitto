import type { Config } from 'tailwindcss';

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#000000',
          teal: '#4AB2A8',
          'teal-dark': '#467873',
          ink: '#1A1A1A',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        body: ['var(--font-body)'],
      },
      borderRadius: {
        button: '0px',
      },
    },
  },
} satisfies Config;
