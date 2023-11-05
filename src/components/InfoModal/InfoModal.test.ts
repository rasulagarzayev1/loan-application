import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Modal from './InfoModal.vue'

describe('Modal.vue', () => {
	it('renders modal with correct title and content', () => {
		const wrapper = mount(Modal, {
			props: {
				isModalOpened: true,
				title: 'Modal Title',
				content: 'Modal Content'
			}
		})

		expect(wrapper.find('.modal__container h3').text()).toBe('Modal Title')
		expect(wrapper.find('.modal__container p.content').text()).toBe('Modal Content')
	})

	it('emits close event when close button is clicked', () => {
		const wrapper = mount(Modal, {
			props: {
				isModalOpened: true,
				title: 'Modal Title',
				content: 'Modal Content'
			}
		})

		const closeButton = wrapper.find('.close-icon button')

		closeButton.trigger('click')

		expect(wrapper.emitted('close')).toBeTruthy()
	})
})
