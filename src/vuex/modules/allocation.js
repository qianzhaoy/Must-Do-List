const state = {
	weeks:[{
		title:'周一',
		allocation: [{id:0, title:"周一库"}]
	},{
		title:'周二',
		allocation: []
	},{
		title:'周三',
		allocation: []
	},{
		title:'周四',
		allocation: []
	},{
		title:'周五',
		allocation: []
	},{
		title:'周六',
		allocation: []
	},{
		title:'周日',
		allocation: []
	}]
}

const mutations = {
	pushAllocation(state, {ind, repository}){
		state.weeks[ind].allocation.push(repository)
	}
}

export default {
  state,
  mutations
}
