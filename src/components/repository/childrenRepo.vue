<template>
  <div id="childRepo">
	 <mu-list style="padding-bottom:50px">
			<mu-list-item v-for="(li,ind) in list" describeText="无" :key="li.childId">
				<div slot="title">
					{{li.value}}
					<mu-icon 
						value="border_color" 
						color="#2196f3" 
						:size="16"
						@click="showInput(ind)"			 
					/>
				</div>

				<mu-icon 
					value="cancel" 
					color="red" 
					slot="right" 
					@click.self="showDialog(ind)"
				/>
			</mu-list-item>
		</mu-list>
		
		<FooterAdd @click="showAdd" />
		
		<InputDialog 
			:open="inputDia" 
            :showValue="activeli.value"
			v-on:cancel="inputToggle"
			v-on:confirm="editor"
		/>
		
		<mu-dialog :open="dialog">
			确定删除{{activeli.value}}吗?
			<mu-flat-button slot="actions" @click="toggle" primary label="取消"/>
			<mu-flat-button slot="actions" primary @click="deleteItem" label="完成"/>
		</mu-dialog>
		
	</div>
</template>

<script>
	import InputDialog from "@/components/repository/inputDialog"
	import FooterAdd from "@/components/repository/footer"
	export default {
		data() {
			return {
				activeInd: 0,
				dialog: false,
				inputDia: false,
				isAdd: false
			}
		},
		methods: {
			showInput(ind) {
				this.isAdd = false
				this.activeInd = ind
				this.inputToggle()
			},
			showDialog(ind) {
				this.activeInd = ind
				this.toggle()
			},
			showAdd() {
				this.isAdd = true
				this.activeInd = null
				this.inputToggle()
			},
			editor(val) {
				if(this.isAdd){
					this.addItem(val)
				}else{
					this.setChildTitle(val)
				}
				this.inputToggle()
			},
			inputToggle() {
				this.inputDia = !this.inputDia
			},
			toggle() {
				this.dialog = !this.dialog
			},
			addItem(val){
				const parentId = this.$route.params.id
				let obj = {
					childId: this.list.length,
					value: val
				}
				this.$store.commit("addItem", {
					parentId,
					obj
				})
			},
			setChildTitle(value){
				const parentId = this.$route.params.id
				const childId = this.activeli.childId
				this.$store.commit("setChildTitle", {
					parentId,
					childId,
					value
				})
			},
			deleteItem() {
				const parentId = this.$route.params.id
				const childId = this.activeli.childId
				this.$store.commit("deleteItem", {
					parentId,
					childId
				})
				this.toggle()
			}
		},
		computed: {
			list() {
				const mustListId = this.$route.params.id,
							repoList = this.$store.state.repository.data,
							mustdoList = repoList.filter(li => li.id == mustListId);
				
				return mustdoList.length > 0 ? mustdoList[0].childrens : []
			},
			activeli() {
				return this.list[this.activeInd] || {}
			}
		},
		components: {
			InputDialog,
			FooterAdd,
		}
	}

</script>

<style>
	.bgColor {
		color: #2196f3
	}

</style>
