<script setup lang="ts">
defineProps<{ msg: string }>();

const onButtonClick = () => alert('You clicked the button!');
</script>

<template>
	<div class="flex flex-col gap-12 items-center">
		<h1>{{ msg }}</h1>

		<p-button @click="onButtonClick">I am a paperless button</p-button>

		<p-illustration variant="empty-state"></p-illustration>
	</div>
</template>
