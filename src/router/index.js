import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import(/*webpackChunkName:"dashboard"*/'../components/dashboardLayout.vue')

function loadView(view){
    return()=>import(/*webpackChunkName:"view-[request]"*/`../components/dashboardContents/${view}.vue`)
}

const routes = [
    {
        path:'/',
        component: DashboardLayout,
        children: [
            {
                name: 'userController',
                path: '',
                component: loadView('userController')

            },
            {
                name: 'vehiclesController',
                path: '/vehicle',
                component: loadView('vehiclesController')

            }
         
        ]
    },
]
Vue.use(Router)

const router = new Router({mode: 'history', routes: routes})

export default router