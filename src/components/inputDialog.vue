<template>
	<mu-dialog :open="open">
		<mu-text-field hintText="请输入..." v-model="defaultValue" /><br/>
		<mu-flat-button slot="actions" @click="cancel" primary label="取消"/>
		<mu-flat-button slot="actions" primary @click="confirm" label="完成"/>
	</mu-dialog>
</template>

<script>
	export default {
		name: "inputDialog",
		props: {
			showValue:{
				type: String,
				default: ""
			},
			open: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ""
			}
		},
		data(){
			return {
				defaultValue: ''	
			}
		},
		watch:{
			showValue(val){
				this.defaultValue = val
			}
		},
		methods:{
			cancel(){
				this.$emit('cancel')
			},
			confirm(){
				this.$emit('confirm', this.	defaultValue)
			}
		}
	}

</script>

<style>


</style>
