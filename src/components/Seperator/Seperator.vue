<template>
	<v-row class="seperator align-center">
		<v-col sm="5">
			<div class="seperator__line seperator__line--left" />
		</v-col>
		<v-col
			sm="2"
			class="text-center"
		>
			Or
		</v-col>
		<v-col sm="5">
			<div class="seperator__line seperator__line--right" />
		</v-col>
	</v-row>
</template>
<style scoped lang="scss">
.seperator {
	margin: auto;
	width: 764px;

	&__line {
		width: 174px;
		margin: auto;
		height: 1px;
		background: #E9E9E9;
		padding: 0;

	}
}
</style>