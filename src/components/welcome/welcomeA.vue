<template>
	<v-touch class="welcomeA" v-on:swipeleft="onSwipeLeft">
		<h1>
			每天都在各种混日子后突发奇想de作品
			<mu-icon class="rightArrow" value="arrow_forward_ios"/>
		</h1>
	</v-touch>
</template>


<script>
	export default {
		name: "welcomeA",
		methods:{
			onSwipeLeft(){
				this.$router.push('/welcome/B')
			}
		}
	}

</script>

<style scoped>
	.welcomeA{
		width: 100%;
		height: 100%;
	}
	
	h1 {
		font-size: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		padding: 0 35px;
		text-align: center;
	}
	
	.rightArrow {
		position: absolute;
		right: 5px;
		top: calc(50% - 12px);
		animation: arrow .5s alternate infinite ease-out;
	}
	
	@keyframes arrow{
		from{
			transform: translate3d(0,0,0)
		}
		to{
			transform: translate3d(5px,0,0)
		}
	}

</style>
