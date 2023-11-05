<template>
	<div class="loan-info-badge">
		<div v-if="!isLoanEditMode" class="loan-info-badge__content">
			<button @click="onLoanUpdateOpened">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="8"
					height="15"
					viewBox="0 0 8 15"
					fill="none"
				>
					<path
						d="M7 14L1 7.5L7 1"
						stroke="#FDFDFD"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<div class="loan-badge">
				<p class="loan-badge__title">
					Your loan application
				</p>
				<p class="loan-badge__amount">
					{{ selectedLoanAmount }}<sup>€</sup>/ {{ selectedLoanPeriod }} months
				</p>
			</div>
		</div>
		<div v-if="isLoanEditMode" class="loan-info-badge__edit-mode">
			<v-col class="d-flex align-center pl-sm-6" sm="3">
				<v-label class="pr-4">Amount</v-label>
				<v-select
					v-model="selectedLoanAmount"
					:items="loanAmountOptions"
					:item-props="itemProps"
					variant="underlined"
					@update:model-value="calculateLoan"
				></v-select>
			</v-col>
			<v-col class="d-flex align-center pl-sm-8" sm="3">
				<v-label class="pr-4">Duration</v-label>
				<v-select
					v-model="selectedLoanPeriod"
					:items="loanPeriodOptions"
					:item-props="itemProps"
					variant="underlined"
					@update:model-value="calculateLoan"
				></v-select>
			</v-col>
			<v-col sm="6" class="payment-vaue d-flex align-center">
				<p class="ml-sm-8">Monthly Payment {{ loanPerMonth }}€</p>
				<button @click="onLoanSubmitted">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="5"
						height="9"
						viewBox="0 0 5 9"
						fill="none"
					>
						<path
							d="M1.23877 1.71649L4.02981 4.50754L1.23877 7.29858"
							stroke="#2B0A57"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</v-col>
		</div>
	</div>
</template>
<script lang="ts">
import { TLoanAmount, TLoanPeriod } from '@/types/loanModels';
import { defineComponent } from 'vue';
import { getLoanAmountOptions, getLoanPeriods } from '../../utils/loanDataHelpers';
export default defineComponent({
	data() {
		return {
			loanAmountOptions: getLoanAmountOptions(),
			loanPeriodOptions: getLoanPeriods(),
			selectedLoanAmount: 300,
			selectedLoanPeriod: 3,
			loanPerMonth: 100,
			isLoanEditMode: true
		}
	},
	methods: {
		itemProps(item:TLoanPeriod | TLoanAmount) {
			return {
				title: item.name
			}
		},
		calculateLoan() {
			this.loanPerMonth = Number((this.selectedLoanAmount / this.selectedLoanPeriod).toFixed(2));
		},
		onLoanSubmitted() {
			this.isLoanEditMode = false;
		},
		onLoanUpdateOpened() {
			this.isLoanEditMode = true;
		}
	}
})
</script>
<style lang="scss">
	.loan-info-badge {
		margin: auto;
		margin-top: 67px;
		width: 764px;
		border-radius: 30px;
		background-color: #2B0A57;

		&__content {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: baseline;
			position: relative;

			button {
				position: absolute;
				top: 50%;
				left: 5%;
				transform: translateY(-50%);
			}
			.loan-badge {
				display: flex;
				&__title {
					color: #FDFDFD;
					font-size: 20px;
					font-weight: 500;
					padding-right: 12.44px;
					margin: 13px 0;
				}

				&__amount {
					font-size: 16px;
					font-weight: 300;
					color: #FDFDFD;
					line-height: 32px;
					margin: 13px 0;
				}
			}
		}

		&__edit-mode {
			color: #FDFDFD;
			display: flex;

			.v-field__input {
				padding: 0;
			}

			.v-input__details {
				display: none;
			}

			label {
				font-size: 14px;
			}

			.payment-vaue {
				position: relative;
				p {
					border-radius: 30px;
					background: #3A156C;
					padding: 4%;
				}

				button {
					position: absolute;
					right: 5%;
					top: 50%;
					transform: translateY(-50%);
					width: 34px;
					height: 34px;
					border-radius: 50%;
					background-color: #FDFDFD;

					&:hover{
						filter: drop-shadow(0px 1px 25px #5948AD);
					}
				}
			}
		}
	}
</style>
