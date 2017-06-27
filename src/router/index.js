import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/welcome'
import WelcomeA from '@/components/welcome/welcomeA'
import WelcomeB from '@/components/welcome/welcomeB'

import Home from '@/views/home'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/welcome',
			name: 'welcome',
			component: Welcome,
			children: [{
				path:"A",
				component: WelcomeA
			},{
				path:"B",
				component: WelcomeB
			}]
    },{
    	path: '/home',
			name: 'home',
			component: Home
    }]
})
