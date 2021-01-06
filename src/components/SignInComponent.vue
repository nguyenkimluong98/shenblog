<template>
	<div class="text-center">
		<v-dialog persistent v-model="dialog" width="400">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="blue" text v-bind="attrs" v-on="on">
					Sign in
				</v-btn>
			</template>

			<v-card>
				<v-row class="mx-0 py-1">
					<v-col cols="12" align="end">
						<button class="my-3" @click.stop="closeDialog">
							<v-icon>close</v-icon>
						</button>
					</v-col>
				</v-row>
				<v-form>
					<v-container>
						<v-row class="mb-2">
							<v-col cols="12">
								<v-text-field
									label="Email"
									:rules="ruleEmails"
									v-model="email"
									outlined
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="py-0">
								<v-text-field
									v-model="password"
									:rules="rulePasswords"
									label="Password"
									type="password"
									outlined
								></v-text-field>
							</v-col>
						</v-row>
						<v-row class="pt-3">
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
						<v-row class="justify-center py-6">
							<a
								class="align-center"
								style="text-decoration: none;"
								href="#"
								>Forgot password?</a
							>
						</v-row>
						<v-divider></v-divider>
						<v-row align="center" class="justify-center py-6">
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
import _ from "lodash";

export default {
	data() {
		return {
			loader: null,
			loading: false,
			dialog: false,
			email: "",
			password: "",
			rules: {
				required: value => !!value || "Required.",
				min: v => v.length >= 6 || "Min 6 characters",
				emailMatch: () =>
					this.checkEmailValid(this.email) || `The email is invalid`
			},
			ruleEmails: [],
			rulePasswords: []
		};
	},
	watch: {
		loader() {
			const l = this.loader;
			this[l] = !this[l];

			setTimeout(() => (this[l] = false), 3000);

			this.loader = null;
		},
		email() {
			this.ruleEmails = [];

			let debounce = _.debounce(() => {
				if (this.dialog)
					this.ruleEmails = [
						this.rules.required,
						this.rules.emailMatch
					];
			}, 500);

			debounce();
		},
		password(value) {
			if (value.length > 0) {
				console.log(value);
				this.rulePasswords = [];

				let debounce = _.debounce(() => {
					if (this.dialog)
						this.rulePasswords = [
							this.rules.required,
							this.rules.min
						];
				}, 500);

				debounce();
			}
		}
	},
	methods: {
		checkEmailValid(email) {
			let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
			return emailRegex.test(email);
		},
		closeDialog() {
			this.dialog = false;
			this.password = "";
			this.email = "";
			this.ruleEmails = [];
			this.rulePasswords = [];
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
