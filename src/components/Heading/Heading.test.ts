import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Heading from './Heading.vue'

describe('Heading.vue', () => {
	it('renders Heading with the correct src and alt attribute', () => {
		const wrapper = mount(Heading)
		expect(wrapper.find('img').attributes('alt')).toBe('inbank logo')
	})
})
