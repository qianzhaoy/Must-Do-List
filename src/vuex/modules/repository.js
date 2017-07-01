const state = {
  data: [{
    id: 0,
    title: "周一库",
    childrens: [{
      childId: 0,
      value: "学习1"
		}, {
      childId: 1,
      value: "学习2"
		}, {
      childId: 2,
      value: "学习3"
		}]
}, {
    id: 1,
    title: "周二库",
    childrens: [{
      childId: 0,
      value: "学习4"
		}, {
      childId: 1,
      value: "学习5"
		}, {
      childId: 2,
      value: "学习6"
		}]
}, {
    id: 2,
    title: "周三库",
    childrens: [{
      childId: 0,
      value: "学习7"
		}, {
      childId: 1,
      value: "学习8"
		}, {
      childId: 2,
      value: "学习9"
		}]
}, {
    id: 3,
    title: "周四库",
    childrens: [{
      childId: 0,
      value: "学习10"
		}, {
      childId: 1,
      value: "学习11"
		}, {
      childId: 2,
      value: "学习12"
		}]
}, {
    id: 4,
    title: "周五库",
    childrens: [{
      childId: 0,
      value: "学习13"
		}, {
      childId: 1,
      value: "学习14"
		}, {
      childId: 2,
      value: "学习15"
		}]
}, {
    id: 5,
    title: "周六库",
    childrens: [{
      childId: 0,
      value: "学习16"
		}, {
      childId: 1,
      value: "学习17"
		}, {
      childId: 2,
      value: "学习18"
		}]
}]
}

const mutations = {
  deleteRepo(state, id) {
    state.data = state.data.filter(li => {
      return li.id != id
    })
  },
  setTitle(state, { id, title }) {
    state.data.forEach(li => {
      if (li.id === id) {
        li.title = title;
        return false;
      }
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
