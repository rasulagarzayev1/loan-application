<template>
  	<div class="modal">
		<div class="modal__container">
			<p class="close-icon">
				<button @click="onCloseClicked">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none"
					>
						<path
						d="M1 1L24 24"
						stroke="#9C9C9C"
						stroke-linecap="round"
						/>
						<path
						d="M1 24L24 1"
						stroke="#9C9C9C"
						stroke-linecap="round"
						/>
					</svg>
				</button>
			</p>
			<h3>{{ title }}</h3>
			<p class="content">
				{{ content }}
			</p>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		isModalOpened: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		},
		content: {
			type: String,
			default: ''
		}
	},
	methods: {
		onCloseClicked() {
			this.$emit('close');
		}
	}
})
</script>
<style scoped lang="scss">
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(253, 253, 253, 0.40);
	backdrop-filter: blur(15px);
	display: flex;
	align-items: center;
	z-index: 99;

	&__container {
		width: 505px;
		height: 496px;
		overflow-y: scroll;
		margin: auto;
		padding: 41px 27px;
		background-color: #FDFDFD;
		box-shadow: 0px 4px 10px 0px rgba(130, 130, 130, 0.25);
		border-radius: 20px;

		.close-icon {
			margin-bottom: 44px;
		}

		.content {
			margin-top: 11px;
		}
	}
}
</style>