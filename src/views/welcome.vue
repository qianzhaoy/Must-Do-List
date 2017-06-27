<template>
	<div id="welcome">
	 	<transition name="fade">
		 <router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "welcome",
	}

</script>

<style scoped>
	#welcome {
		height: 100%;
		width: 100%;
	}
	
	.fade-leave-active,
	.fade-enter {
		opacity: 0;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}
/*
	.slide-left-enter{
		transform: translate(100vw,0)
	}
	.slide-left-enter-active{
		transition: all 1s ease
	}
	
	.slide-left-leave-active{
		transition: all 2s ease
	}
	
	.slide-left-leave-active{
		transform: translate(-100vw,0)
	}
*/

</style>
