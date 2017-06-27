<template>
  <div id="app">
   	<transition :name="direction">
    	<router-view class="views"></router-view>
		</transition>
  </div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				direction: "slide-left",
			}
		},
		watch: {
			$route(to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			}
		}
	}

</script>

<style>
	html {
		font-size: 100px;
	}
	
	body {
		height: 100vh;
		width: 100vw;
	}
	
	#app {
		height: 100%;
		width: 100%;
	}
	
	.views {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		overflow-x: auto;
		overflow-y: hidden;
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
