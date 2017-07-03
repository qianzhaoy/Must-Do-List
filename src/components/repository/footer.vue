<template>
	<mu-list-item class="footer" @click="_click($event)">
		<mu-icon value="add" color="#2196f3" :size="25" />
	</mu-list-item>	
</template>
<script>
	
	export default {
		methods:{
			_click(e){
				this.$emit('click',e)
			}
		}
	}
	
</script>
<style>
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		border-top: 1px solid #c1c1c1;
		background-color: white;
	}
	.footer .mu-item{
		padding: 0;
		padding-top: 5px
	}

</style>
