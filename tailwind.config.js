import tailwindConfig from 'san-webkit-next/tailwind.config.js'

export default {
  presets: [tailwindConfig],
  content: [
    ...tailwindConfig.content,
    './node_modules/san-webkit-next/dist/**/*.{js,svelte}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '74.5rem',
      },
    },
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'left-moving': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-10px, -10px)' },
        },
        'right-moving': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(10px, 10px)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'left-puzzle': 'left-moving 1s ease-in-out infinite alternate',
        'right-puzzle': 'right-moving 1s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
