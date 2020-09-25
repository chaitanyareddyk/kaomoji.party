module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/ui')
  ]
};