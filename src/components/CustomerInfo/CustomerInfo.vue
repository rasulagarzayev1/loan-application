<template>
  	<v-container class="customer-info px-0 py-0">
		<div class="customer-info__personal-info">
		<p>
			Anna Maria Tamm Rodriguez Espinosa
				<button
					class="edit"
					@click="onUpdateCustomerDetails"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M10.0779 1.50136C10.2368 1.34241 10.4255 1.21632 10.6332 1.1303C10.8409 1.04428 11.0635 1 11.2883 1C11.513 1 11.7356 1.04428 11.9433 1.1303C12.151 1.21632 12.3397 1.34241 12.4986 1.50136C12.6576 1.66031 12.7837 1.84901 12.8697 2.05669C12.9557 2.26436 13 2.48695 13 2.71174C13 2.93653 12.9557 3.15912 12.8697 3.3668C12.7837 3.57447 12.6576 3.76317 12.4986 3.92212L4.32855 12.0922L1 13L1.90779 9.67145L10.0779 1.50136Z"
							fill="#2B0A57"
							stroke="#2B0A57"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</p>
		</div>
		<div class="customer-info__contact-details">
			<div class="customer-id">
				<p v-if="!isEditing">
				<img
					src="@/assets/userIcon.svg"
					alt="customer-id"
				>
				{{ customerId }}
				</p>
				<p v-if="isEditing">
				Change your contact Info
				</p>
				<p
				v-if="isEditing && (!isEmailValid || !isPhoneNumberValid)"
				class="error-message"
				>
				{{ errorMessage }}
				</p>
			</div>
			<div
				:class="isEditing ?'phone-number phone-number--editing' : 'phone-number'"
			>
				<svg
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="13"
				viewBox="0 0 13 13"
				fill="none"
				>
				<path
					d="M11.9997 9.23561V10.8916C12.0003 11.0453 11.9687 11.1974 11.907 11.3383C11.8453 11.4792 11.7548 11.6056 11.6413 11.7095C11.5278 11.8134 11.3938 11.8926 11.2479 11.9418C11.102 11.9911 10.9474 12.0094 10.794 11.9955C9.09204 11.811 7.45724 11.2306 6.0209 10.3009C4.68457 9.45346 3.55159 8.32273 2.70244 6.98905C1.76772 5.54904 1.18603 3.90954 1.00449 2.20337C0.990668 2.05073 1.00884 1.89689 1.05786 1.75164C1.10688 1.6064 1.18566 1.47293 1.28919 1.35974C1.39273 1.24654 1.51874 1.1561 1.65922 1.09418C1.79969 1.03225 1.95155 1.0002 2.10511 1.00005H3.76434C4.03276 0.997417 4.29297 1.09228 4.49649 1.26695C4.7 1.44163 4.83293 1.6842 4.8705 1.94946C4.94053 2.4794 5.07041 2.99973 5.25765 3.50053C5.33206 3.6981 5.34817 3.91281 5.30406 4.11923C5.25995 4.32566 5.15747 4.51513 5.00877 4.66521L4.30636 5.36622C5.09369 6.74813 6.24017 7.89234 7.62482 8.67811L8.32723 7.9771C8.4776 7.82869 8.66746 7.72641 8.87429 7.68239C9.08112 7.63837 9.29626 7.65444 9.49422 7.7287C9.99601 7.91558 10.5174 8.0452 11.0484 8.11509C11.317 8.15292 11.5624 8.28798 11.7378 8.49458C11.9132 8.70118 12.0064 8.96491 11.9997 9.23561Z"
					stroke="#9C9C9C"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				</svg>
				<p v-if="!isEditing">
				{{ cellPhone }}
				</p>
				<input
				v-else
				v-model="cellPhone"
				:class="isPhoneNumberValid ? 'phone-number__input' : 'phone-number__input phone-number__input--invalid'"
				variant="underlined"
				type="tel"
				required
				@input="validatePhoneNumber"
				>
			</div>
			<div
				:class="isEditing ?'email email--editing' : 'email'"
			>
				<svg
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="12"
				viewBox="0 0 14 12"
				fill="none"
				>
				<path
					d="M2.2 1.2002H11.8C12.46 1.2002 13 1.7402 13 2.4002V9.6002C13 10.2602 12.46 10.8002 11.8 10.8002H2.2C1.54 10.8002 1 10.2602 1 9.6002V2.4002C1 1.7402 1.54 1.2002 2.2 1.2002Z"
					stroke="#9C9C9C"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M13 2.40015L7 6.60015L1 2.40015"
					stroke="#9C9C9C"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				</svg>
				<p v-if="!isEditing">
				{{ emailAddress }}
				</p>
				<input
				v-else
				v-model="emailAddress"
				:class="isEmailValid ? 'email__input' : 'email__input email__input--invalid'"
				type="email"
				required
				@input="validateEmail"
				>
			</div>
			<div
				v-if="isEditing"
				class="submission"
			>
				<button @click="onFormSubmit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="5"
					height="8"
					viewBox="0 0 5 8"
					fill="none"
				>
					<path
					d="M1 0.99994L3.79105 3.79099L1 6.58203"
					stroke="#F8F5FC"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					/>
				</svg>
				</button>
			</div>
		</div>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isValidEmail, isValidPhoneNumber } from '../../utils/validator';
export default defineComponent({
	props: {
		firstname: {
			type: String,
			default: 'Anna Maria Tamm'
		},
		lastname: {
			type: String,
			default: 'Rodriguez Espinosa'
		},
		phoneNumber: {
			type: String,
			default: '+372 5289 6572'
		},
		email: {
			type: String,
			default: 'anna.tamm@gmail.com'
		},
		customerId: {
			type: String,
			default: '38912052254'
		}
	},
	data() {
		return {
			cellPhone: this.phoneNumber,
			emailAddress: this.email,
			isEditing: false,
			isPhoneNumberValid: true,
			isEmailValid: true,
			errorMessage: 'Incorrect contact details'
		}
	},
	methods: {
		onFormSubmit() {
			if (this.isPhoneNumberValid && this.isEmailValid) {
				this.isEditing = false;
			}
			else {
				this.errorMessage = 'Incorrect contact details';
			}
		},
		onUpdateCustomerDetails() {
			if(this.isEditing && (!this.isEmailValid || !this.isPhoneNumberValid)) {
				return
			}
			this.isEditing = !this.isEditing;
		},
		validateEmail() {
			this.isEmailValid = isValidEmail(this.emailAddress);
			this.errorMessage = !this.isEmailValid ? 'Incorrect email address' : '';
		},
		validatePhoneNumber() {
			const formattedNumber = this.cellPhone.split(' ').join('');
			console.log(formattedNumber);
			this.isPhoneNumberValid = isValidPhoneNumber(formattedNumber);
			this.errorMessage = !this.isPhoneNumberValid ? 'Incorrect phone number' : '';
		}
	}
})
</script>

<style scoped lang="scss">
	.customer-info {
		border-radius: 30px;
		border: 5px solid #F3EEFB;
		margin: auto;
		margin-top: 21px;
		width: 764px;
		color: #413C3C;

		&__personal-info {
			border-top-right-radius: 25px;
			border-top-left-radius: 25px;
			text-align: center;
			font-size: 18px;
			font-weight: 400;
			line-height: 28px;
			color: #413C3C;
			background-color: #F8F5FC;

			p {
				margin: 0;
				padding-top: 15px;
				padding-bottom: 12px;
				width: 100%;
				text-align: center;
				position: relative;

				.edit {
					position: absolute;
					right: 17px;
					top: 5px;
					width: 31px;
					height: 31px;
					border-radius: 50%;
					background-color: #FDFDFD;
					border: none;
					cursor: pointer;

					&:hover {
						background-color: #2B0A57;
						filter: drop-shadow(0px 1px 25px #5948AD);
						transition: all 0.5s;
						svg {
							path {
								fill: #FDFDFD;
							}
						}
					}
				}
			}
		}

		&__contact-details {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			padding-top: 14px;
			padding-bottom: 16px;

			svg{
				margin-right: 5px;
			}

			.phone-number {
				display: flex;
				align-items: center;

				&__input {
					width: 65%;
					border-bottom: 1px solid #9C9C9C;
					outline: none;
					font-size: 14px;
					&--invalid{
						border-bottom: 1px solid #EB5757;
					}
				}

				&--editing {
					&:hover {
						svg {
							path {
								stroke: #2B0A57;
							}
						}
						input {
							border-bottom: 1px solid #2B0A57;
						}
					}
				}
			}

			.email {
				display: flex;
				align-items: center;

				&__input {
					border-bottom: 1px solid #9C9C9C;
					outline: none;
					font-size: 14px;

					&--invalid{
						border-bottom: 1px solid #EB5757;
					}
				}

				&--editing {
					&:hover {
						svg {
							path {
								stroke: #2B0A57;
							}
						}
						input {
							border-bottom: 1px solid #2B0A57;
						}
					}
				}
			}

			.customer-id {
				p {
					font-size: 14px;
				}

				.error-message {
					font-size: 10px;
					font-weight: 300;
					color: #EB5757;
				}
			}

			.submission {
				button {
					background-color: #2B0A57;
					border-radius: 50%;
					width: 31px;
					height: 31px;
					display: flex;
					justify-content: center;
					align-items: center;

					svg {
						margin: 0;
					}

					&:hover {
						background-color: #FDFDFD;
						transition: all 0.5s;
						filter: drop-shadow(0px 1px 25px #5948AD);
						svg {
							path {
								stroke: #2B0A57;
							}
						}
					}
				}
			}
		}
	}
</style>
