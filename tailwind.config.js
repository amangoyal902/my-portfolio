export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['Space Grotesk', 'Inter', 'sans-serif'] },
    colors: { ink: '#050816', violet2: '#7C3AED', fuchsia2: '#C026D3', cyan2: '#22D3EE', pink2: '#F472B6' },
    keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      blob: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(30px,-30px) scale(1.15)' } } },
    animation: { float: 'float 5s ease-in-out infinite', blob: 'blob 14s ease-in-out infinite' },
  } },
  plugins: [],
}
