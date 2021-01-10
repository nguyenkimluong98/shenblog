<template>
	<div class="text-center">
		<v-dialog persistent v-model="dialog" width="400">
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					class="ma-2"
					outlined
					color="blue"
					v-bind="attrs"
					v-on="on"
				>
					Sign up
				</v-btn>
			</template>

			<v-card>
				<v-row class="d-flex justify-space-between pa-3 mx-0 py-1">
					<v-col>
						<h1>Sign Up</h1>
						<p><i>Easy and quickly!</i></p>
					</v-col>
					<div class="pt-5">
						<button @click.stop="closeDialog">
							<v-icon>close</v-icon>
						</button>
					</div>
				</v-row>

				<v-form>
					<v-container>
						<v-row>
							<v-col cols="12" class="py-1">
								<v-text-field
									label="Email"
									v-model="email"
									:rules="ruleEmails"
									outlined
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="py-1">
								<v-text-field
									label="Password"
									type="password"
									v-model="password"
									:rules="rulePasswords"
									outlined
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="py-1">
								<v-text-field
									label="Re-Enter password"
									type="password"
									v-model="rePassword"
									:rules="ruleRePasswords"
									outlined
								></v-text-field>
							</v-col>
						</v-row>
						<v-row class="pb-4">
							<v-col cols="12">
								<v-btn
									block
									class="py-2"
									:loading="loading"
									:disabled="loading"
									color="success"
									@click="loader = 'loading'"
								>
									Sign up
									<template v-slot:loader>
										<span class="custom-loader">
											<v-icon light>mdi-cached</v-icon>
										</span>
									</template>
								</v-btn>
							</v-col>
						</v-row>
						<v-row class="justify-center py-4 px-3">
							<v-col>
								<h3 class="line-decorator">
									<span>OR</span>
								</h3>
							</v-col>
						</v-row>
						<v-row class="justify-space-around">
							<v-col
								v-for="loginData in ortherLoginData"
								:key="loginData.img"
								class="col-3"
							>
								<v-btn
									class="mx-2"
									fab
									outlined
									width="66"
									height="66"
									:color="loginData.roudedColor"
								>
									<img
										:src="loginData.img"
										width="56px"
										height="56px"
									/>
								</v-btn>
							</v-col>
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
			rePassword: "",
			rules: {
				required: value => !!value || "Required",
				min: v => v.length >= 6 || "Min 6 characters",
				emailMatch: () =>
					this.checkEmailValid(this.email) || "The email is invalid",
				reEnterPassword: rePass =>
					rePass == this.password || "Re-Password not match"
			},
			ruleEmails: [],
			rulePasswords: [],
			ruleRePasswords: [],
			ortherLoginData: [
				{
					img: require("@/assets/facebook.png"),
					link: "facebook.com",
					roudedColor: "light-blue darken-4"
				},
				{
					img: require("@/assets/google.png"),
					link: "google.com",
					roudedColor: "orange darken-4"
				},
				{
					img: require("@/assets/github.png"),
					link: "github.com",
					roudedColor: "black"
				}
			]
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
		},
		rePassword(value) {
			if (value.length > 0) {
				this.ruleRePasswords = [];

				let debounce = _.debounce(() => {
					if (this.dialog)
						this.ruleRePasswords = [
							this.rules.required,
							this.rules.reEnterPassword
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
			this.email = "";
			this.password = "";
			this.rePassword = "";
			this.ruleEmails = [];
			this.rulePasswords = [];
			this.ruleRePasswords = [];
		}
	}
};
</script>

<style scoped lang="scss">
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

.line-decorator {
	width: 100%;
	text-align: center;
	border-bottom: 1px solid lightgray;
	line-height: 0.1em;

	span {
		background: #fff;
		padding: 0 10px;
	}
}

.theme--light.v-btn:focus::before {
	opacity: 0;
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
