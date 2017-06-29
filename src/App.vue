<template>
  <div id="app">
  	<AppBar :pageTitle="pageTitle" v-if="!isWelcome"></AppBar>
   	<transition :name="direction">
			<keep-alive>
    		<router-view class="views"></router-view>
			</keep-alive>
		</transition>
  </div>
</template>

<script>
	import AppBar from '@/components/appBar'

	export default {
		name: 'app',
		data() {
			return {
				open: false,
				pageTitle: "主页",
				isWelcome: false
			}
		},
		methods: {
			toggle() {
				this.open = !this.open
			},
			setRouterInfo(route) {
				this.isWelcome = route.meta.isWelcome || false;
				this.pageTitle = route.meta.pageTitle || "";
			}
		},
		created() {
			this.setRouterInfo(this.$route)
		},
		watch: {
			$route(to, from) {
				this.setRouterInfo(to)
			}
		},
		computed: {
			direction() {
				return this.$store.state.direction
			}
		},
		components: {
			AppBar
		}
	}

</script>

<style scoped>
	#app {
		height: 100%;
		width: 100%;
	}
	
	.views {
		position: absolute;
		top: 0;
		width: 100%;
		height: calc(100% - 56px);
		overflow-x: hidden;
		overflow-y: auto;
		margin-top: 56px;
	}
	
	.slide-left-enter {
		transform: translate(100vw, 0)
	}
	
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all 1s ease
	}
	
	.slide-left-leave-active {
		transform: translate(-100vw, 0)
	}
	
	.slide-right-enter {
		transform: translate(-100vw, 0)
	}
	
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition: all 1s ease
	}
	
	.slide-right-leave-active {
		transform: translate(100vw, 0)
	}

</style>
