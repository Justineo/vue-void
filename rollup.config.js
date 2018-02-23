const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')

export default {
  input: 'src/components/VVoid.js',
  external: [
    'vue'
  ],
  output: {
    format: 'umd',
    file: 'dist/VVoid.js',
    name: 'VVoid'
  },
  plugins: [
    vue(),
    buble(),
    uglify()
  ]
}
