import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			redirect: {
				name: "Lista"
			}
		},
		{
			path: '/lista',
			name: 'Lista',
			component: List
		},
		{
			path: '/detail:id',
			name: 'Detail',
			component: Detail
		}
	]
})
