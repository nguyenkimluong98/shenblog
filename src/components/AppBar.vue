<template>
	<v-app-bar app color="white" flat>
		<v-container class="py-0 fill-height justify-center">
			<router-link to="/">
				<div class="logo-box">
					<span class="red--text text--accent-4 font-weight-bold logo"
						>shen</span
					>
					<span class="blue--text text--darken font-weight-bold logo"
						>Blog</span
					>
				</div>
			</router-link>

			<div class="mx-20">
				<router-link v-for="tab in tabs" :key="tab" :to="tab.link">
					<v-btn text>
						{{ tab.name }}
					</v-btn></router-link
				>
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
</template>

<script>
import SignInComponent from "./SignInComponent.vue";
import SignUpComponent from "./SignUpComponent.vue";
export default {
	data: () => ({
		tabs: [
			{ name: "Posts", link: "/posts" },
			{ name: "Questions", link: "/questions" },
			{ name: "Discussions", link: "/discussions" },
			{ name: "Updates", link: "/updates" }
		]
	}),
	components: {
		SignInComponent,
		SignUpComponent
	}
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
}

.logo {
	font-size: 30px;
}

.logo-box {
	margin-right: 20px;
}

.search-bar {
	margin-left: 30px;
}

a:-webkit-any-link {
	text-decoration: none;
}
</style>
