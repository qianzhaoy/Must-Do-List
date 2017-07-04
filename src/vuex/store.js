import Vue from 'vue'
import Vuex from 'vuex'
import history from './modules/history'
import repository from './modules/repository'
import allocation from './modules/allocation'

Vue.use(Vuex)

let state = {
	isSuccess: false,
	direction: "slide-left"
}

let mutations = {
	setDirection(state, direction){
		state.direction = direction
	},
	setSuccess(state){
		state.isSuccess = true
	}
}

export default new Vuex.Store({
	state,
	mutations,
  modules: {
		history,
		repository,
		allocation
  },
})