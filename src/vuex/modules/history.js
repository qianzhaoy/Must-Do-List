const state = {
	data: [{
		id: 0,
		value: "学习",
		status: "success",
		time: "2017-3-23"
}, {
		id: 1,
		value: "看电视",
		status: "success",
		time: "2017-3-23"
}, {
		id: 2,
		value: "玩游戏",
		status: "success",
		time: "2017-3-23"
}, {
		id: 3,
		value: "看书",
		status: "success",
		time: "2017-3-23"
}, {
		id: 4,
		value: "发呆",
		status: "success",
		time: "2017-3-23"
}, {
		id: 5,
		value: "玩手机",
		status: "success",
		time: "2017-3-23"
}, {
		id: 6,
		value: "刷微博",
		status: "fail",
		time: "2017-3-23"
}, {
		id: 7,
		value: "刷微博",
		status: "fail",
		time: "2017-3-23"
}, {
		id: 8,
		value: "刷微博",
		status: "fail",
		time: "2017-3-23"
}, {
		id: 9,
		value: "刷微博",
		status: "fail",
		time: "2017-3-23"
}, {
		id: 10,
		value: "刷微博",
		status: "fail",
		time: "2017-3-23"
}]
}

const mutations = {
	pushHistory(state, li) {
		state.data.push(li)
	},
	spliceHistory(state, li) {
		state.data.splice(0, 0, li)
	}
}

const getters = {
	listLength: state => state.data.length
}

export default {
  state,
	getters,
  mutations
}
