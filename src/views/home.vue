<template>
	<div id="home">
		<div class="mustDo">
			{{isSuccess ? '恭喜你完成了!' : text}}
			<mu-icon-button v-if="!isSuccess" icon="done" class="done"  @click="toggle" />
		</div>
		 
		<mu-float-button icon="replay" @click="next" class="nextBtn" backgroundColor="white" />
		<mu-dialog :open="dialog">
			你已经完成了今天的必做事情了吗?
			<mu-flat-button slot="actions" @click="toggle" primary label="取消"/>
			<mu-flat-button slot="actions" primary @click="complete" label="完成"/>
		</mu-dialog>
		
	</div>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'

	export default {
		data() {
			const today = new Date().getDay()
			return {
				text: "学习",
				dialog: false,
				today: today,
				todoList: []
			}
		},
		created() {
			this.randomRepo()
		},
		methods: {
			randomRepo() {
				let bindRepo = this.getBindRepo()
				bindRepo.forEach(obj => {
					this.todoList = Array.concat(this.todoList, obj.childrens.map(child => child.value))
				})
				this.todoList.length === 0 && this.todoList.push("无")
				
				let random = Math.floor((Math.random() * this.todoList.length))
				this.text = this.todoList[random]
			},
			complete() {
				this.$store.commit("spliceHistory", {
					value: this.text,
					status: 'success',
					time: "2017-6-28",
					id: this.listLength + 1
				})
				this.$store.commit('setSuccess');
				this.toggle();
			},
			toggle() {
				this.dialog = !this.dialog
			},
			next() {
				!this.isSuccess && this.randomRepo()
			},
			getBindRepo() {
				return this.repository.filter(repo => {
					return this.allocation.indexOf(repo.id) > -1
				})
			},
		},
		computed: {
			listLength() {
				return this.$store.getters.listLength
			},
			isSuccess() {
				return this.$store.state.isSuccess
			},
			allocation() {
				return this.$store.state.allocation.weeks[this.today].allocation.map(obj => obj.id)
			},
			repository() {
				return this.$store.state.repository.data
			},
		}
	}

</script>

<style scoped>
	.mustDo {
		font-size: .24rem;
		position: absolute;
		top: 30%;
		width: 100%;
		text-align: center;
	}
	
	.done {
		text-indent: 0;
		color: #009688
	}
	
	.nextBtn {
		position: absolute;
		bottom: 20%;
		left: 50%;
		border: 1px solid;
		box-shadow: none;
		transform: translate(-50%, 0);
		color: #009688
	}

</style>
