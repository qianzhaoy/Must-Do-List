<template>
	<div id="history">
		 <mu-list>
			<mu-list-item v-for="li in list" :title="li.value" :describeText="li.time" :key="li.id">
				<mu-icon :value="li.status === 'success' ? 'done' : 'cancel'" :color="li.status === 'success' ? '#009688' : 'red'" slot="right"/>
			</mu-list-item>
			
			<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  	</mu-list>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				loading: false,
				scroller: null
			}
		},
		mounted(){
			 this.scroller = this.$el
		},
		methods: {
			loadMore() {
				this.loading = true
				setTimeout(() => {
					const lastId = this.list[this.list.length - 1].id;
					for (let i = lastId; i < lastId + 10; i++) {
						this.$store.commit("pushHistory", {
							value: "看书",
							status: "success",
							time: "2017-3-23",
							id: i
						})
					}
					this.loading = false
				}, 2000)
			}
		},
		computed:{
			list(){
				return this.$store.state.history.data
			}
		},
		components: {}
	}

</script>
