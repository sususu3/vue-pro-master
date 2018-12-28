import category from '../components/TestComponent/category.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path:'/category/:cName',
    name:'category',
    component:category
  }
]

export default routes
