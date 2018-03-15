# Vue Void

Before `vue@2.5.3`, the following code:

```html
<template slot="..."></template>
```

...results in clearing the slot content. But in later versions this will reveal the fallback content instead.

To clear the fallback content of a predefined slot, the quickest way seem to be [using a zero-width space (`&#8203;`)](https://github.com/vuejs/vue/issues/7064#issuecomment-344798116) in the template. But it does look hacky. Let's hide the hack under the hood and use a more semantic approach, which doesn't even need an extra character here.

This component renders absolutely nothing except a comment node (which won't appear in DOM tree so that CSS selectors like `:first-child` will not be affected) so you can now clear a slot like this:

```html
<template slot="..."><v-void/></template>
```

It'll be more ideal if Vue can support this with a native custom component like `<transition>`/`<keep-alive>`:

```html
<template slot="..."><void/></template>
```
