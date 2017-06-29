<template>
  <div id="repository">
	 <mu-list :value="value">
			<mu-list-item v-for="li in list"  :value="li.id" describeText="无" :key="li.id">
				<div slot="title">
					{{li.title}}
					<mu-icon 
						value="border_color" 
						color="#2196f3" 
						:size="16"			 
					/>
				</div>

				<mu-icon-button 
					touch
					@click="editor(li.id)"
					iconClass="bgColor" 
					icon="remove_red_eye" 
					slot="left"
				/>

				<mu-icon 
					value="cancel" 
					color="red" 
					slot="right" 
					@click.self="showDialog(li)" 
				/>
			</mu-list-item>
		</mu-list>
		
	
		
		<mu-dialog :open="dialog">
			确定删除{{wantDelete}}吗?
			<mu-flat-button slot="actions" @click="toggle" primary label="取消"/>
			<mu-flat-button slot="actions" primary @click="complete" label="完成"/>
		</mu-dialog>
		
		
		<InputDialog :open="inputDia" :title=""></InputDialog>
	</div>
</template>

<script>
	import InputDialog form "@/components/inputDialog"
	export default {
		data() {
			return {
				value:"",
				wantDelete: "",
				wantDeleteId: null,
				dialog: false,
				inputDia: false
			}
		},
		methods:{
			editor(id){
				this.$store.commit("setDirection", 'slide-left')
				this.$router.push(`/repository/${id}`)
			},
			showDialog(li){
				this.wantDelete = li.title
				this.wantDeleteId = li.id
				this.toggle()
			},
			toggle(){
				this.dialog = !this.dialog
			},
			complete(){
				this.$store.commit("deleteRepo", this.wantDeleteId)
				this.toggle()
			}
		},
		computed: {
			list() {
				return this.$store.state.repository.data
			}
		},
		components:{
			InputDialog
		}
	}

</script>

<style>

	.bgColor{
		color: #2196f3
	}
</style>
