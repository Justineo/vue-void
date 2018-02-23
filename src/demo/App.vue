<template>
<div id="app">
  <v-heading>Awesome Heading!</v-heading>
  <p>👆 Overridden with actual content</p>
  <v-heading></v-heading>
  <p>👆 Fallback content</p>
  <v-heading><v-void/></v-heading>
  <p>👆 Overridden with nothing <small>except a zero-width space</small></p>
</div>
</template>

<script>
import VHeading from './VHeading'
import VVoid from '@/components/VVoid'

export default {
  name: 'app',
  components: {
    VHeading,
    VVoid
  }
}
</script>

<style scoped>
#app {
  position: fixed;
  top: 38.2%;
  left: 50%;
  transform: translate(-50%, -38.2%);
  width: 360px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,sans-serif;
}

h1 {
  padding: .3em .6em;
  border: 1px dotted #acc;
  font-size: 1.2em;
}

small {
  opacity: 0.3;
}
</style>
