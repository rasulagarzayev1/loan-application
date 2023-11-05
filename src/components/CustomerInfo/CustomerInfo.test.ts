import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CustomerInfo from './CustomerInfo.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives
})

describe('CustomerInfo.vue', () => {
	it('renders the component with default data', async () => {
		const wrapper = mount(CustomerInfo, { global: { plugins: [vuetify] }, props: {
			phoneNumber: '+372 5289 6572',
			email: 'anna.tamm@gmail.com',
			customerId: '38912052254'
		}})
		expect(wrapper.exists()).toBe(true)

		expect(wrapper.text()).toContain('Anna Maria Tamm Rodriguez Espinosa')
		expect(wrapper.text()).toContain('+372 5289 6572')
		expect(wrapper.text()).toContain('anna.tamm@gmail.com')
		expect(wrapper.text()).toContain('38912052254')

		expect(wrapper.find('.edit').exists()).toBe(true)
	})

	it('toggles edit mode when edit button is clicked', async () => {
		const wrapper = mount(CustomerInfo, { global: { plugins: [vuetify] }, props: {
			phoneNumber: '+372 5289 6572',
			email: 'anna.tamm@gmail.com',
			customerId: '38912052254'
		}})


		const editButton = wrapper.find('.edit')
		await editButton.trigger('click')

		expect(wrapper.vm.isEditing).toBe(true)

		expect(wrapper.text()).toContain('Change your contact Info')
	})
})
