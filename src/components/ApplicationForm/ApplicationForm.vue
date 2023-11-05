<template>
	<v-form class="application-form">
		<v-container class="application-form__personal-data">
			<p>Personal data</p>
			<v-row>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						:model-value="country.name"
						label="Country"
						variant="outlined"
						disabled
						density="compact"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-select
						v-model="personalData.selectedState"
						:class="isManuallyEntered ? 'address-input address-input--active' : 'address-input'"
						:items="states"
						:item-props="itemProps"
						:autofocus="isManuallyEntered"
						:rules="[() => !!personalData.selectedState || 'The field is required']"
						label="State"
						variant="outlined"
						density="compact"
						color="#2B0A57"
						append-inner-icon="mdi-chevron-down"
						@update:model-value="onStateSelected"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-select
						v-model="personalData.selectedCity"
						:class="isManuallyEntered ? 'address-input address-input--active' : 'address-input'"
						:items="cities"
						:item-props="itemProps"
						:rules="[() => !!personalData.selectedCity || 'The field is required']"
						label="City/Parish"
						variant="outlined"
						density="compact"
						color="#2B0A57"
						append-inner-icon="mdi-chevron-down"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						v-model="personalData.selectedVillage"
						:class="isManuallyEntered ? 'address-input address-input--active' : 'address-input'"
						:rules="[() => !!personalData.selectedVillage || 'The field is required']"
						label="Village/Township"
						density="compact"
						variant="outlined"
						color="#2B0A57"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						:model-value="personalData.streetName"
						:class="isManuallyEntered ? 'address-input address-input--active' : 'address-input'"
						:rules="[() => !!personalData.streetName || 'The field is required']"
						label="Street"
						density="compact"
						variant="outlined"
						color="#2B0A57"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-row>
						<v-col sm="4">
							<v-text-field
								:model-value="personalData.houseName"
								:class="isManuallyEntered ? 'address-input address-input--active' : 'address-input'"
								:rules="[() => !!personalData.houseName || 'The field is required']"
								label="House"
								density="compact"
								variant="outlined"
								color="#2B0A57"
							/>
						</v-col>
						<v-col sm="4">
							<v-text-field
								:model-value="personalData.apartmentName"
								:class="isManuallyEntered ? 'address-input address-input--active' : 'address-input'"
								:rules="[() => !!personalData.apartmentName || 'The field is required']"
								label="Apartment"
								density="compact"
								variant="outlined"
								color="#2B0A57"
							/>
						</v-col>
						<v-col sm="4">
							<v-text-field
								:model-value="personalData.postalCode"
								:class="isManuallyEntered ? 'address-input address-input--active' : 'address-input'"
								:rules="[() => !!personalData.postalCode || 'The field is required']"
								label="Zip Code"
								density="compact"
								variant="outlined"
								color="#2B0A57"
							/>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
		<seperator />
		<v-container class="application-form__address-entering-switch">
			<v-col
				sm="5"
				class="offset-sm-4"
			>
				<v-switch
					v-model="isManuallyEntered"
					inset
					color="#53CBA0"
					label="Enter address manually"
					class="switch-element offset-sm-4"
				/>
			</v-col>
			<div class="hotizontal-line" />
		</v-container>
		<v-container class="application-form__pep-check py-0">
			<v-col
				sm="6"
				class="d-flex align-center offset-sm-3"
			>
				<v-checkbox
					v-model="isPepChecked"
					label="Neither I nor my family member is PEP"
					color="#2B0A57"
					hide-details
				/>
				<button
					type="button"
					class="d-flex"
					@click="onPepInfoClicked"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
					>
						<path
							d="M9.00006 17C13.4183 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4183 1 9.00006 1C4.58178 1 1.00006 4.58172 1.00006 9C1.00006 13.4183 4.58178 17 9.00006 17Z"
							stroke="#5948AD"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.00006 12.2V9"
							stroke="#5948AD"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.00006 5.7998H9.00806"
							stroke="#5948AD"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</v-col>
		</v-container>
		<pep-form v-if="!isPepChecked" />
		<info-modal
			v-if="isPepInfoModalOpened"
			:is-modal-opened="isPepInfoModalOpened"
			title="PEP"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
					in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			@close="onPepModalClosed"
		/>
		<v-container class="application-form__beneficiary-check py-0">
			<v-col
				sm="6"
				class="d-flex align-center offset-sm-3"
			>
				<v-checkbox-btn
					v-model="isUltimateBeneficiaryChecked"
					label="I’m the ultimate beneficiary"
					color="#2B0A57"
					hide-details
				/>
				<button
					type="button"
					class="d-flex"
					@click="onBeneficiaryClicked"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
					>
						<path
							d="M9.00006 17C13.4183 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4183 1 9.00006 1C4.58178 1 1.00006 4.58172 1.00006 9C1.00006 13.4183 4.58178 17 9.00006 17Z"
							stroke="#5948AD"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.00006 12.2V9"
							stroke="#5948AD"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.00006 5.7998H9.00806"
							stroke="#5948AD"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</v-col>
		</v-container>
		<info-modal
			v-if="isBeneficiaryModalOpend"
			:is-modal-opened="isBeneficiaryModalOpend"
			title="Ultimate Beneficiary"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
					in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			@close="onBeneficiaryModalClosed"
		/>
		<v-container
			v-if="!isUltimateBeneficiaryChecked"
			class="application-form__personal-details"
		>
			<v-row>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						:model-value="personalData.firstname"
						:rules="[() => !!personalData.firstname || 'The field is required']"
						label="Firstname"
						variant="outlined"
						density="compact"
						color="#2B0A57"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						:model-value="personalData.lastname"
						:rules="[() => !!personalData.lastname || 'The field is required']"
						label="Lastname"
						variant="outlined"
						density="compact"
						color="#2B0A57"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						:model-value="personalData.personalId"
						:rules="[() => !!personalData.personalId || 'The field is required']"
						label="Personal ID code"
						variant="outlined"
						density="compact"
						color="#2B0A57"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-select
						v-model="personalData.residency"
						label="Residency"
						:items="residencyCountries"
						:item-props="itemProps"
						:rules="[() => !!personalData.residency || 'The field is required']"
						variant="outlined"
						density="compact"
						color="#2B0A57"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						:model-value="personalData.birthPlace"
						:rules="[() => !!personalData.birthPlace || 'The field is required']"
						label="Birth place"
						variant="outlined"
						density="compact"
						color="#2B0A57"
					/>
				</v-col>
				<v-col
					cols="12"
					sm="6"
				>
					<v-text-field
						:model-value="personalData.birthDate"
						:rules="[() => !!personalData.birthDate || 'The field is required']"
						label="Birth date"
						variant="outlined"
						density="compact"
						color="#2B0A57"
					/>
				</v-col>
			</v-row>
		</v-container>
		<v-container
			v-if="!isPepChecked"
			class="application-form__beneficial-pep-check py-0"
		>
			<v-col
				sm="6"
				class="d-flex align-center offset-sm-3"
			>
				<v-checkbox-btn
					v-model="isBeneficialPepChecked"
					label="The beneficial owner is not a PEP"
					color="#2B0A57"
					hide-details
				/>
			</v-col>
		</v-container>
		<pep-form v-if="!isPepChecked && !isBeneficialPepChecked" />
		<v-container class="application-form__submission">
			<button @click="onSubmit">
				Continue
			</button>
		</v-container>
	</v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TCity, TCountry, TState } from '../../types/locationModels';
import { getAllCountries, getStates, getCities } from '../../utils/locations';
import Seperator from '../Seperator/Seperator.vue';
import InfoModal from '../InfoModal/InfoModal.vue';
import PepForm from '../PepForm/PepForm.vue';
export default defineComponent({
	components: {
		Seperator,
		InfoModal,
		PepForm
	},
	props: {
		country: {
			type: Object as () => TCountry,
			default: {
				countryCode: 'EE',
				name: 'Estonia'
			}
		},
		state: {
			type: Object as () => TState | null,
			default: {
				stateCode: '37',
				name: 'Harju County'
			}
		},
		city: {
			type: Object as () => TCity | null,
			default: {
				name: 'Tallinn'
			}
		}
	},
	data() {
		return {
			isManuallyEntered: false,
			isPepChecked: true,
			isBeneficialPepChecked: false,
			isBeneficiaryChecked: false,
			isUltimateBeneficiaryChecked: true,
			isPepInfoModalOpened: false,
			isBeneficiaryModalOpend: false,
			residencyCountries: getAllCountries(),
			states: getStates(this.country.countryCode),
			cities: [] as TCity[],
			personalData: {
				selectedState: null as TState | null,
				selectedCity: null as TCity | null,
				selectedVillage: null as TCity | null,
				streetName: '',
				houseName: '',
				apartmentName: '',
				postalCode: '',
				firstname: '',
				lastname: '',
				personalId: '',
				residency: null,
				birthPlace: '',
				birthDate: ''
			}
		}
	},
	methods: {
		itemProps(item: TState | TCity | TCountry) {
			return {
				title: item.name
			}
		},
		onStateSelected():void {
			if(!this.personalData.selectedState) {
				return
			}
			this.cities = getCities(this.country.countryCode, this.personalData.selectedState?.stateCode);
		},
		onPepInfoClicked():void {
			this.isPepInfoModalOpened = !this.isPepInfoModalOpened;
		},
		onBeneficiaryClicked():void {
			this.isBeneficiaryModalOpend = !this.isBeneficiaryModalOpend;
		},
		onPepModalClosed():void {
			this.isPepInfoModalOpened = false;
		},
		onBeneficiaryModalClosed():void {
			this.isBeneficiaryModalOpend = false;
		},
		onSubmit():void {
			this.$refs.form.validate();
		}
	}
})
</script>

<style lang="scss">
.application-form {
	margin: auto;
	margin-top: 21px;
	width: 764px;

	&__personal-data {
		p {
			margin-bottom: 18px;
			margin-left: 14px;
			font-size: 16px;
			font-weight: 400;
			line-height: 24px;
			color: #413C3C;
		}
		.address-input {
			label {
				font-size: 14px;
			}
			&--active {
				.v-field__outline {
					--v-field-border-opacity: 100;
				}
			}
		}
	}
	.v-select__menu-icon {
		display: none;
	}
	.v-select--active-menu {
		.v-icon {
			transform: rotate(180deg);
			transition: transform 0.2s ease-in-out;
		}
	}
	&__address-entering-switch {
		.switch-element {
			margin: auto;

			.v-input__control {
				width: auto;
				margin: auto;
			}
		}

		.hotizontal-line {
			width: 568px;
			height: 1px;
			background: #E9E9E9;
			margin: auto;
		}
	}

	&__submission {
		text-align: center;
		button {
			width: 25%;
			height: 48px;
			border-radius: 8px;
			background-color: #2B0A57;
			color: #E9E9E9;
		}
	}
}
</style>
