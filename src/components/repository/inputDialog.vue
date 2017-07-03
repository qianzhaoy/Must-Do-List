<template>
	<mu-dialog :open="open">
		<mu-text-field 
			hintText="请输入..."
		 	v-model="defaultValue" 
		 	:maxLength="10" 
			:errorText="inputErrorText"
			@textOverflow="handleInputOverflow"
		 	style="width:100%" /><br/>
		<mu-flat-button slot="actions" @click="cancel" primary label="取消"/>
		<mu-flat-button slot="actions" primary @click="confirm" label="完成"/>
	</mu-dialog>
</template>

<script>
	export default {
		name: "inputDialog",
		props: {
			showValue: {
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
		data() {
			return {
				inputErrorText: '',
				defaultValue: '',
				isOverflow: false
			}
		},
		created() {
			this.defaultValue = this.showValue
		},
		watch: {
			open(val) {
					this.defaultValue = this.showValue
			}
		},
		methods: {
			handleInputOverflow(isOverflow) {
				this.isOverflow = isOverflow
				this.inputErrorText = isOverflow ? '请保持在10个字符内' : ''
			},
			cancel() {
				this.inputErrorText = ""
				this.isOverflow = false
				this.$emit('cancel')
			},
			confirm() {
				this.defaultValue.trim() !== "" && !this.isOverflow && this.$emit('confirm', this.defaultValue)
			}
		}
	}

</script>

<style>


</style>
