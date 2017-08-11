﻿import VIcon from '~components/icons/VIcon'
import { test } from '~util/testing'

test('VIcon.js', ({ mount, functionalContext }) => {
  it('should render correctly', () => {
    const context = functionalContext({}, 'add')
    const wrapper = mount(VIcon, context)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should throw warning when using deprecated prop mdi', () => {
    const context = functionalContext({ props: { mdi: true } }, 'add')
    mount(VIcon, context)

    expect("'fa' and 'mdi' will be deprecated").toHaveBeenTipped()
  })

  it('should still render correctly when using deprecated prop mdi', () => {
    const context = functionalContext({ props: { mdi: true } }, 'add')
    const wrapper = mount(VIcon, context)

    expect(wrapper.hasClass('mdi')).toBe(true)
    expect(wrapper.hasClass('mdi-add')).toBe(true)
    expect(wrapper.text()).toBe('')

    expect("'fa' and 'mdi' will be deprecated").toHaveBeenTipped()
  })

  it('should throw warning when using deprecated prop fa', () => {
    const context = functionalContext({ props: { fa: true } }, 'add')
    mount(VIcon, context)

    expect("'fa' and 'mdi' will be deprecated").toHaveBeenTipped()
  })

  it('should still render correctly when using deprecated prop fa', () => {
    const context = functionalContext({ props: { fa: true } }, 'add')
    const wrapper = mount(VIcon, context)

    expect(wrapper.hasClass('fa')).toBe(true)
    expect(wrapper.hasClass('fa-add')).toBe(true)
    expect(wrapper.text()).toBe('')

    expect("'fa' and 'mdi' will be deprecated").toHaveBeenTipped()
  })

  it('should allow third-party icons when using <icon>- prefix', () => {
    const context = functionalContext({ props: {} }, 'fa-add')
    const wrapper = mount(VIcon, context)

    expect(wrapper.hasClass('fa')).toBe(true)
    expect(wrapper.hasClass('fa-add')).toBe(true)
    expect(wrapper.text()).toBe('')
  })

  it('should allow the use of v-text', () => {
    const wrapper = mount(VIcon, functionalContext({
      domProps: { textContent: 'fa-home' }
    }))

    expect(wrapper.hasClass('fa')).toBe(true)
    expect(wrapper.hasClass('fa-home')).toBe(true)
    expect(wrapper.text()).toBe('')
  })

  it('should allow the use of v-html', () => {
    const wrapper = mount(VIcon, functionalContext({
      domProps: { innerHTML: 'fa-home' }
    }))

    expect(wrapper.hasClass('fa')).toBe(true)
    expect(wrapper.hasClass('fa-home')).toBe(true)
    expect(wrapper.text()).toBe('')
  })
})