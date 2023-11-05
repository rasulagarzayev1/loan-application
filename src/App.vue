<template>
	<header>
		<heading />
	</header>
	<home />
</template>

<script lang="ts" setup>
import Heading from './components/Heading/Heading.vue';
import Home from './views/Home.vue';
</script>
<style scoped lang="scss">
header{
	width: 100%;
	text-align: center;
	margin-top: 22px;
}
</style>
