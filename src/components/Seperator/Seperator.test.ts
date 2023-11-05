import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Seperator from './Seperator.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives
})

describe('Seperator.vue', () => {
	it('renders seperator with correct class and style', () => {
		const wrapper = mount(Seperator, { global: { plugins: [vuetify] } })
		expect(wrapper.classes()).toContain('seperator')
	})

	it('contains "Or" text in the middle column', async () => {
		const wrapper = mount(Seperator, { global: { plugins: [vuetify] } })
		const middleCol = wrapper.find('.text-center')
		expect(middleCol.text()).toBe('Or')
	})
})
