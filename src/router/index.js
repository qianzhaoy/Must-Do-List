import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/welcome'
import WelcomeA from '@/components/welcome/welcomeA'
import WelcomeB from '@/components/welcome/welcomeB'
import ChildrenRepo from '@/components/repository/childrenRepo'
import AllocationRepo from '@/components/allocation/allocationRepo'

import Home from '@/views/home'
import History from '@/views/history'
import Repository from '@/views/repository'
import Allocation from '@/views/allocation'


import Store from '@/vuex/store'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Welcome,
			meta: {
				isWelcome: '主页'
			},
			children: [{
				path: "/",
				component: WelcomeA,
				meta: {
					isWelcome: true
				}
			}, {
				path: "A",
				component: WelcomeA,
				meta: {
					isWelcome: true
				}
			}, {
				path: "B",
				component: WelcomeB,
				meta: {
					isWelcome: true
				}
			}]
    },
		{
			path: '/home',
			component: Home,
			meta: {
				pageTitle: '主页'
			}
    },
		{
			path: '/history',
			component: History,
			meta: {
				pageTitle: '历史'
			}
    },
		{
			path: '/repository',
			component: Repository,
			meta: {
				pageTitle: '库'
			}
    },
		{
			path: '/repository/:id',
			component: ChildrenRepo,
			meta: {
				pageTitle: ''
			},
			beforeEnter(to, from, next) {
				const paramId = parseInt(to.params.id)
				const page = Store.state.repository.data.filter(li => li.id === paramId)
				to.meta.pageTitle = page.length ? page[0].title : ""
				next()
			}
		},
		{
			path: '/allocation',
			component: Allocation,
			meta: {
				pageTitle: '库分配'
			}
    },
		{
			path: '/allocation/:week',
			component: AllocationRepo,
			meta: {
				pageTitle: ''
			},
			beforeEnter(to, from, next) {
				const week = parseInt(to.params.week)
				Store.state.allocation.weeks.forEach((obj, ind) => {
					if (ind === week)
						to.meta.pageTitle = obj.title;
					next();
					return false;
				});
			}
    },
	]
})
