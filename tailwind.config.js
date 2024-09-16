/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        women: "url('/landing-page/img2/welcome-page-image-ww.png')",
        men: "url('/landing-page/img2/welcome-page-image-mw.png')",
        kids: "url('/landing-page/img2/welcome-page-image-kw.png')",
      }
    },
  },
  plugins: [],
}

