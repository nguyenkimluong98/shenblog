<template>
	<div class="dashboard">
		<v-main class="grey lighten-3">
			<v-container>
				<div class="pb-2 d-flex justify-space-between">
					<div class="sidenav">
						<v-sheet rounded="lg">
							<v-list color="transparent">
								<v-list-item v-for="n in 60" :key="n" link>
									<v-list-item-content>
										<v-list-item-title>
											List Item {{ n }}
										</v-list-item-title>
									</v-list-item-content>
								</v-list-item>

								<v-divider class="my-2"></v-divider>
							</v-list>
						</v-sheet>
					</div>
					<div class="content">
						<v-sheet class="pa-3" rounded="lg">
							<div class="overflow-y: hidden;">
								<p v-for="i in 15" :key="i">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Expedita illum tempora
									ipsa alias inventore ipsam delectus
									explicabo reiciendis sunt ab totam, nisi
									dolore labore sequi fugiat placeat beatae
									optio. Numquam?
								</p>
							</div>
						</v-sheet>
					</div>
				</div>
			</v-container>
		</v-main>
		<v-footer dark padless>
			<v-card flat tile class="indigo lighten-2 white--text text-center">
				<v-card-text>
					<v-btn
						v-for="icon in icons"
						:key="icon"
						class="mx-5 white--text"
						icon
					>
						<v-icon size="23px">
							{{ icon }}
						</v-icon>
					</v-btn>
				</v-card-text>

				<v-card-text class="white--text pt-1">
					Phasellus feugiat arcu sapien, et iaculis ipsum elementum
					sit amet. Mauris cursus commodo interdum. Praesent ut risus
					eget metus luctus accumsan id ultrices nunc. Sed at orci sed
					massa consectetur dignissim a sit amet dui. Duis commodo
					vitae velit et faucibus. Morbi vehicula lacinia malesuada.
					Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
					sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
					vel ut orci. Orci varius natoque penatibus et magnis dis
					parturient montes, nascetur ridiculus mus.
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text class="white--text">
					{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
				</v-card-text>
			</v-card>
		</v-footer>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$main-content-height: calc(100vh - 64px);

main {
	padding: 0 !important;
}

.sidenav {
	overflow-x: hidden;
	overflow-y: scroll;
	width: 20%;
	float: left;
	height: $main-content-height;
}

.sidenav::-webkit-scrollbar {
	width: 0px;
	background: transparent;
}

.content {
	width: calc(80% - 10px);
	height: $main-content-height;
	float: right;
	overflow-y: scroll;
}

.content::-webkit-scrollbar {
	width: 0px;
	background: transparent;
}
</style>
