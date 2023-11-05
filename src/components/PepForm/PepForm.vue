<template>
	<v-container class="pep-members">
		<v-row>
			<v-col
				cols="12"
				sm="6"
			>
				<v-select
					v-model="pepRelation"
					:rules="[() => !!pepRelation || 'The field is required']"
					:items="[]"
					:item-props="[]"
					class="pepRelation"
					label="Relationship to the PEP"
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
				<v-select
					v-model="pepRegion"
					:items="[]"
					:item-props="[]"
					:rules="[() => !!pepRegion || 'The field is required']"
					label="PEP region"
					class="pepRegion"
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
				<v-select
					v-model="pepPosition"
					:items="[]"
					:item-props="[]"
					:rules="[() => !!pepPosition || 'The field is required']"
					label="PEP position"
					class="pepPosition"
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
				<v-select
					v-model="pepDuration"
					:items="[]"
					:item-props="[]"
					:rules="[() => !!pepDuration || 'The field is required']"
					class="pepDuration"
					label="Duration as PEP or related to a PEP"
					variant="outlined"
					density="compact"
					color="#2B0A57"
					append-inner-icon="mdi-chevron-down"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			pepRelation: null,
			pepRegion: null,
			pepPosition: null,
			pepDuration: null
		}
	}
})
</script>