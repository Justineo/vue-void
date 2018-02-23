export default {
  name: 'VVoid',
  functional: true,
  render (h) {
    return h('b', ['\u200b']).children[0]
  }
}
