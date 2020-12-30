<template>
	<v-app id="inspire">
		<v-app-bar app color="white" flat>
			<v-container class="py-0 fill-height justify-center">
				<div class="logo-box">
					<span class="red--text text--accent-4 font-weight-bold logo"
						>shen</span
					>
					<span class="blue--text text--darken font-weight-bold logo"
						>Blog</span
					>
				</div>

				<div class="mx-20">
					<v-btn v-for="link in links" :key="link" text>
						{{ link }}
					</v-btn>
				</div>
				<v-spacer></v-spacer>
				<v-responsive max-width="260" class="search-bar">
					<v-text-field
						dense
						flat
						hide-details
						rounded
						solo-inverted
						clearable
						placeholder="Search"
						append-icon="search"
					></v-text-field>
				</v-responsive>

				<SignInComponent />
				<SignUpComponent />
			</v-container>
		</v-app-bar>
	</v-app>
</template>

<script>
import SignInComponent from "./SignInComponent.vue";
import SignUpComponent from "./SignUpComponent.vue";
export default {
	data: () => ({
		links: ["Posts", "Questions", "Discussions", "Updates"]
	}),
	components: {
		SignInComponent,
		SignUpComponent
	}
};
</script>

<style lang="sass" scoped>
*
	box-sizing: border-box

.logo
	font-size: 30px

.logo-box
	margin-right: 20px

.search-bar
	margin-left: 30px
</style>
