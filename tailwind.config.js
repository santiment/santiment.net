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
        leftMoving: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-10px, -10px)' },
        },
        rightMoving: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(10px, 10px)' },
        },
        shiftDown: {
          '0%': {
            transform: 'translateY(-40px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        shiftUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        leftPuzzle: 'leftMoving 1s ease-in-out infinite alternate',
        rightPuzzle: 'rightMoving 1s ease-in-out infinite alternate',
        shiftDown: 'shiftDown 0.8s cubic-bezier(0, 0.96, 1, 1) both',
        shiftUp: 'shiftUp 0.8s cubic-bezier(0, 0.96, 1, 1) 0.6s both',
      },
    },
  },
  plugins: [],
}
