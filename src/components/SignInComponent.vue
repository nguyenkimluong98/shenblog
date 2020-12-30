<template>
	<div class="text-center">
		<v-dialog v-model="dialog" width="400">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="blue" text v-bind="attrs" v-on="on">
					Sign in
				</v-btn>
			</template>

			<v-card>
				<v-form>
					<v-container>
						<v-row>
							<v-col cols="12" class="py-0">
								<v-text-field
									label="Email"
									outlined
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="py-0">
								<v-text-field
									hint="Password at least 8 characters"
									value="Pa"
									label="Password"
									type="password"
									outlined
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<v-btn
									block
									class="py-2"
									:loading="loading"
									:disabled="loading"
									color="info"
									@click="loader = 'loading'"
								>
									Sign in
									<template v-slot:loader>
										<span class="custom-loader">
											<v-icon light>mdi-cached</v-icon>
										</span>
									</template>
								</v-btn>
							</v-col>
						</v-row>
						<v-row class="justify-center py-4">
							<a
								class="align-center"
								style="text-decoration: none;"
								href="#"
								>Forgot password?</a
							>
						</v-row>
						<v-divider></v-divider>
						<v-row class="justify-center py-4">
							<v-btn color="success" dark>
								Sign up
							</v-btn>
						</v-row>
					</v-container>
				</v-form>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: "SignInComponent",
	data() {
		return {
			loader: null,
			loading: false
		};
	},
	watch: {
		loader() {
			const l = this.loader;
			this[l] = !this[l];

			setTimeout(() => (this[l] = false), 3000);

			this.loader = null;
		}
	}
};
</script>

<style scoped>
.custom-text-field.v-text-field.v-text-field--enclosed .v-input__slot {
	padding: 0;
	margin: 0;
}

.col-12 {
	margin: 0;
	padding: 0 12px;
}

.custom-loader {
	animation: loader 1s infinite;
	display: flex;
}
@-moz-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-webkit-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-o-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
