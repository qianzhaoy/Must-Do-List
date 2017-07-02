<template>
  <div id="repository">
	 <mu-list>
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
		<InputDialog 
			:open="inputDia" 
            :showValue="activeli.value"
			v-on:cancel="inputToggle"
			v-on:confirm="editor"
		/>
		
		<mu-dialog :open="dialog">
			确定删除{{activeli.value}}吗?
			<mu-flat-button slot="actions" @click="toggle" primary label="取消"/>
			<mu-flat-button slot="actions" primary @click="complete" label="完成"/>
		</mu-dialog>
		
	</div>
</template>

<script>
  import InputDialog from "@/components/inputDialog"
  export default {
    data() {
      return {
        activeInd: 0,
        dialog: false,
        inputDia: false,
      }
    },
    methods: {
      showInput(ind) {
        this.activeInd = ind
        this.inputToggle()
      },
      showDialog(ind) {
        this.activeInd = ind
        this.toggle()
      },
      editor(val) {
        const parentId = this.$route.params.id
        const childId = this.activeli.childId
        const value = val
        this.$store.commit("setChildTitle", {
          parentId,
          childId,
          value
        })
        this.inputToggle()
      },
      inputToggle() {
        this.inputDia = !this.inputDia
      },
      toggle() {
        this.dialog = !this.dialog
      },
      complete() {
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
        const mustListId = this.$route.params.id
        const repoList = this.$store.state.repository.data
        const mustdoList = repoList.filter(li => li.id == mustListId)
        return mustdoList.length > 0 ? mustdoList[0].childrens : []
      },
      activeli() {
        return this.list[this.activeInd] || {}
      }
    },
    components: {
      InputDialog
    }
  }

</script>

<style>
  .bgColor {
    color: #2196f3
  }

</style>
