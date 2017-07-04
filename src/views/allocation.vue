<template>
   <div id="allocation">
   	 <mu-list>
			<mu-list-item v-for="(week,ind) in weeks" @click="itemClick(ind)" :title="week.title" :describeText="bindRepo[ind].length > 0 ? bindRepo[ind].join(',') : '无'" :key="ind" />
		</mu-list>
   </div>
</template>

<script>
	export default {
		methods: {
			itemClick(ind) {
				this.$store.commit("setDirection", 'slide-left')
				this.$router.push(`/allocation/${ind}`)
			}
		},
		computed: {
			weeks() {
				return this.$store.state.allocation.weeks
			},
			list() {
				return this.$store.state.repository.data
			},
			bindRepo() {
				return this.weeks.map(week => {
					let repo = week.allocation.map(repo => repo.title)
					return repo
				})
			}
		},
		components: {}
	}

</script>

<style>


</style>
