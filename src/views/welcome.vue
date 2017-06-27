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
		margin: 0
	}
	
	.fade-leave-active,
	.fade-enter {
		opacity: 0;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

</style>
