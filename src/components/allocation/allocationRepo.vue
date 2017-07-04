<template>
  <div id="allocationRepo">
	 <mu-list style="padding-bottom:50px">
			<mu-list-item v-for="(li,index) in list" @click="itemClick(index)" :key="li.id" titleClass="myitem">
				<div slot="title">
					{{li.title}}
				</div>

				<mu-icon 
					v-show="allocation.indexOf(li.id) > -1"
					value="done"
					color="#009688"
					slot="right"
				/>
			</mu-list-item>
		</mu-list>
		
	</div>
</template>

<script>

	export default {
		methods:{
			itemClick(index){
				const ind = this.$route.params.week
				const li = this.list[index]
				const repository = {
					id: li.id,
					title: li.title,
				}
				this.$store.commit('pushAllocation', {
					ind,
					repository
				})
			}
		},
		computed: {
			list() {
				return this.$store.state.repository.data
			},
			allocation() {
				const weekInd = this.$route.params.week
				const weeks = this.$store.state.allocation.weeks
				return weekInd ? weeks[weekInd].allocation.map(bind => bind.id) : []
			},
		},
	}

</script>

<style>
	
	.myitem{
		line-height: 35px
	}

</style>
