import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PepForm from './PepForm.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives
})

describe('PepMembers.vue', () => {
	it('should render the component', () => {
		const wrapper = mount(PepForm, { global: { plugins: [vuetify] } })
		expect(wrapper.exists()).toBe(true)
	})

	it('should have pepRelation dropdown element', () => {
		const wrapper = mount(PepForm, { global: { plugins: [vuetify] } })
		const selectElements = wrapper.findAll('.pepRelation')
		expect(selectElements.length).toBe(1)
	})

	it('should have pepRegion dropdown element', () => {
		const wrapper = mount(PepForm, { global: { plugins: [vuetify] } })
		const selectElements = wrapper.findAll('.pepRegion')
		expect(selectElements.length).toBe(1)
	})

	it('should have pepPosition dropdown element', () => {
		const wrapper = mount(PepForm, { global: { plugins: [vuetify] } })
		const selectElements = wrapper.findAll('.pepPosition')
		expect(selectElements.length).toBe(1)
	})

	it('should have pepDuration dropdown element', () => {
		const wrapper = mount(PepForm, { global: { plugins: [vuetify] } })
		const selectElements = wrapper.findAll('.pepDuration')
		expect(selectElements.length).toBe(1)
	})
})
