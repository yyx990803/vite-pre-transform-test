export default {
  plugins: [
    {
      name: 'make-it-slow',
      async transform(code) {
        await new Promise((r) => setTimeout(r, 5))
        return code
      }
    }
  ]
}
