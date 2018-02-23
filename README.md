# Vue Void

Before `vue@2.5.3`, the following code:

```html
<template slot="..."></template>
```

...results in clearing the slot content. But in later versions this will reveal the fallback content instead.

To clear the fallback content of a predefined slot, the quickest way seem to be [using a zero-width space (`&#8203;`)](https://github.com/vuejs/vue/issues/7064#issuecomment-344798116) in the template. But it does look hacky. Let's hide the hack under the hood and use a more semantic approach.

This component renders nothing except a zero-width space so you can now clear a slot like this:

```html
<template slot="..."><v-void/></template>
```

It'll be more ideal if Vue can support this in its core with something like:

```html
<template slot="..." void></template>
```

`void`/`blank`/`no-fallback`/... are all fine as long as it's explicit on the purpose.
