const state = {
	weeks:[{
		title:'周日',
		allocation: []
	},{
		title:'周一',
		allocation: [{id:0, title:"周一库"}]
	},{
		title:'周二',
		allocation: []
	},{
		title:'周三',
		allocation: [{id:0, title:"周一库"},{id: 1,title: "周二库"}]
	},{
		title:'周四',
		allocation: []
	},{
		title:'周五',
		allocation: []
	},{
		title:'周六',
		allocation: []
	}]
}

const mutations = {
	pushAllocation(state, {ind, repository}){
		state.weeks[ind].allocation.push(repository)
	},
	cancel(state, {ind, id}){
		state.weeks[ind].allocation = state.weeks[ind].allocation.filter(obj => obj.id != id)
	}
}

export default {
  state,
  mutations
}
