<template>
  <div id="repository">
	 <mu-list :value="value">
			<mu-list-item v-for="(li,ind) in list"  :value="li.id" describeText="无" :key="li.id">
				<div slot="title">
					{{li.title}}
					<mu-icon 
						value="border_color" 
						color="#2196f3" 
						:size="16"
						@click="showInput(ind)"			 
					/>
				</div>

				<mu-icon-button 
					touch
					@click="View(li.id)"
					iconClass="bgColor" 
					icon="remove_red_eye" 
					slot="left"
				/>

				<mu-icon 
					value="cancel" 
					color="red" 
					slot="right" 
					@click.self="showDialog(ind)"
				/>
			</mu-list-item>
		</mu-list>
		
		<InputDialog 
			:open="inputDia" 
			:showValue="activeLi.title"
			v-on:cancel="inputToggle"
			v-on:confirm="editor"
		/>
		
		<mu-dialog :open="dialog">
			确定删除{{activeLi.title}}吗?
			<mu-flat-button slot="actions" @click="toggle" primary label="取消"/>
			<mu-flat-button slot="actions" primary @click="complete" label="完成"/>
		</mu-dialog>
		
		
<!--		<InputDialog :open="inputDia" :title=""></InputDialog>-->
	</div>
</template>

<script>
	import InputDialog from "@/components/inputDialog"
	export default {
		data() {
			return {
				value:"",
				activeInd: 0,
				dialog: false,
				inputDia: false,
			}
		},
		methods:{
			showInput(ind){
				this.activeInd = ind
				this.inputToggle()
			},
			showDialog(ind){
				this.activeInd = ind
				this.toggle()
			},
			editor(val){
				console.log(val);
				this.inputToggle()
			},
			View(id){
				this.$store.commit("setDirection", 'slide-left')
				this.$router.push(`/repository/${id}`)
			},
			inputToggle(){
				this.inputDia = !this.inputDia
			},
			toggle(){
				this.dialog = !this.dialog
			},
			complete(){
				this.$store.commit("deleteRepo", this.activeLi.id)
				this.toggle()
			}
		},
		computed: {
			list() {
				return this.$store.state.repository.data
			},
			activeLi(){
				return this.list[this.activeInd]
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
