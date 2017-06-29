<template>
	<mu-dialog :open="open" :title="title">
		<mu-text-field hintText="请输入..."/><br/>
		<mu-flat-button slot="actions" @click="" primary label="取消"/>
		<mu-flat-button slot="actions" primary @click="" label="完成"/>
	</mu-dialog>
</template>

<script>
	export default {
		name: "inputDialog",
		props: {
			value:{
				required: true
			},
			open: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ""
			}
		}
	}

</script>

<style>


</style>
