<template>
  <div>
  	<mu-appbar titleClass="titleTop">
			<mu-icon-button :icon="backIcon"  @click="back" slot="left"/>
			<div slot="default" class="titleTop">{{pageTitle}}</div>
			<mu-icon-button icon="expand_more" @click="toggle" touch slot="right"/>
		</mu-appbar>
		
		<mu-drawer :docked="false" :open="open"  @close="toggle()" right>
				<mu-appbar title="导航"/>
				<mu-list>
					<mu-list-item title="首页" to="home" @click.native="toggle"/>
					<mu-list-item title="我的" to="history" @click.native="toggle"/>
					<mu-list-item title="库" to="repository" @click.native="toggle" />
					<mu-list-item title="分配" to="allocation" @click.native="toggle" />
				</mu-list>
  		</mu-drawer>
  </div>
</template>

<script>
	export default {
		name: 'appBar',
		props:{
			pageTitle:{
				default: "主页"
			}
		},
		data() {
			return {
				open: false,
			}
		},
		computed:{
			backIcon(){
				return this.pageTitle === "主页" ? 'close' : 'arrow_back_ios'
			}
		},
		methods: {
			back(){
				this.backIcon === "arrow_back_ios" && this.$store.commit("setDirection", 'slide-right');
				this.backIcon === "arrow_back_ios" && this.$router.go(-1);
			},
			toggle() {
				this.$store.commit("setDirection", 'slide-left')
				this.open = !this.open
			}
		},
	}

</script>

<style scoped>

	.titleTop{
		text-align: center;
	}
</style>
