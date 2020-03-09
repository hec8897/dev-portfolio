import VueRouter from 'vue-router'
import MainLists from './component/list'
import SubLists from './component/sub_list'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainLists,
            name: 'main_list'
        },
        {
            path:'/sub_lists/:idx',
            props:true,
            component: SubLists,
            name:'subList'
        }
]
})

export default router;