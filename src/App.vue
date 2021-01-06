<template>
	<div id="app">
		<v-app>
			<AppBar />
			<v-content>
				<router-view />
			</v-content>
		</v-app>
	</div>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
	components: {
		AppBar
	},

	data: () => ({
		//
	})
};
</script>

<style lang="scss"></style>
