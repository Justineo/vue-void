import { mount } from '@vue/test-utils'
import VVoid from '@/components/VVoid'

describe('VVoid.vue', () => {
  it('renders only an empty string', () => {
    const wrapper = mount(VVoid)
    expect(wrapper.vnode.tag).toBe(undefined)
    expect(wrapper.vnode.children).toBe(undefined)
    expect(wrapper.vnode.data).toBe(undefined)
    expect(wrapper.vnode.text).toBe('')
  })
})
