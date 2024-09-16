/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        women: "url('/welcome-page-image-ww.png')",
        men: "url('welcome-page-image-mw.png')",
        kids: "url('/welcome-page-image-kw.png')",
      }
    },
  },
  plugins: [],
}

