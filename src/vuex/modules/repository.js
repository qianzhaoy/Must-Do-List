const state = {
	data: [{
		id: 0,
		title: "周一库",
		childrens: [{
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}]
}, {
		id: 1,
		title: "周二库",
		childrens: [{
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}]
}, {
		id: 2,
		title: "周三库",
		childrens: [{
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}]
}, {
		id: 3,
		title: "周四库",
		childrens: [{
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}]
}, {
		id: 4,
		title: "周五库",
		childrens: [{
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}]
}, {
		id: 5,
		title: "周六库",
		childrens: [{
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}, {
			childId: 0,
			value: "学习"
		}]
}]
}

const mutations = {
	deleteRepo(state, id) {
		state.data = state.data.filter(li => {
			return li.id != id
		})
	},
}

const getters = {
	repoLength: state => state.data.length
}

export default {
	state,
	getters,
	mutations
}
