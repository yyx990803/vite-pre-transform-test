export default {
  plugins: [
    {
      name: 'make-it-slow',
      async transform(code) {
        // simulate a 5ms transform
        await new Promise((r) => setTimeout(r, 5))
        return code
      }
    }
  ]
}
