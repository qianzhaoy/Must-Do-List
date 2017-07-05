<template>
	<v-touch class="welcomeB" v-on:swipeleft="onSwipeLeft"  v-on:swiperight="onSwipeRight">
		<h1>
			<mu-icon class="leftArrow" value="arrow_back_ios"/>
			我们每天都在浑浑噩噩的过日子, 人生何其短暂, 为什么不多做一些有意义的事. 现在开始就从每天做一件开始
			<mu-icon class="rightArrow" value="arrow_forward_ios"/>
		</h1>
	</v-touch>
</template>


<script>
	export default {
		name: "welcomeB",
		methods: {
			onSwipeLeft(){
				this.$router.push('/home')
			},
			onSwipeRight() {
				this.$router.push('/A')
			}
		}
	}

</script>

<style scoped>
	.welcomeB {
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
	
	.leftArrow {
		position: absolute;
		left: 5px;
		top: calc(50% - 12px);
		animation: leftArrow .5s alternate infinite ease-out;
	}
	
	@keyframes arrow {
		from {
			transform: translate3d(0, 0, 0)
		}
		to {
			transform: translate3d(5px, 0, 0)
		}
	}
	
	@keyframes leftArrow {
		from {
			transform: translate3d(5px, 0, 0)
		}
		to {
			transform: translate3d(0, 0, 0)
		}
	}

</style>
