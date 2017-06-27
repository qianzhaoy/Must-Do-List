<template>
	<div id="home">
		<div class="mustDo">
			{{text}}
			<mu-icon-button icon="done" class="done"  @click="toggle" />
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
	export default {
		data() {
			return {
				text: "学习",
				dialog: false
			}
		},
		methods: {
			complete() {
				this.toggle()
				this.text = "-"
			},
			toggle() {
				this.dialog = !this.dialog
			},
			next() {

			}
		},
		components: {}
	}

</script>

<style scoped>
	.mustDo {
		font-size: .24rem;
		position: absolute;
		top: 30%;
		width: 100%;
		text-align: center;
		text-indent: 2em;
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
