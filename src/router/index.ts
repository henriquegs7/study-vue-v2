import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const About = () => import('../views/AboutView.vue')
const Animations = () => import(/* webpackChunkName: "curso" */ '../views/AnimationsView.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/*',
            redirect: '/'
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        },
        {
            path: '/animations',
            name: 'animations',
            component: Animations
        },
        {
            path: '/pinia',
            name: 'pinia',
            component: () => import('../views/PiniaView.vue')
        },
        {
            path: '/router',
            name: 'router',
            props: true,
            component: () => import('../views/RouterView.vue'),
            // beforeEnter: (to, from, next) => {
            //     // Código para ser ativado
            //     console.log('beforeEnter')
            //     console.log(to)
            //     console.log(from)
            //     next()
            // },
            children: [
                {
                    path: ':aulas',
                    name: 'aulas',
                    props: true,
                    component: () => import('../components/router/CourseClasses.vue'),
                    children: [
                        {
                            path: 'javaScript',
                            name: 'javaScript',
                            component: () => import('../components/router/CourseDescription.vue')
                        },
                        {
                            path: 'node',
                            name: 'node',
                            component: () => import('../views/AboutView.vue')
                        },
                        {
                            path: 'next',
                            name: 'next',
                            component: () => import('../components/router/CourseDescription.vue')
                        }
                    ]
                },
                {
                    path: 'descricao',
                    name: 'descricao',
                    component: () => import('../components/router/CourseDescription.vue')
                },
                {
                    path: 'fetch',
                    name: 'fetch',
                    props: true,
                    component: () => import('../components/router/FetchView.vue'),
                    children: [
                        {
                            path: ':simbolo',
                            component: () => import('../components/router/AcoesDados.vue'),
                            props: true
                        }
                    ]
                }
            ]
        }
    ],
    scrollBehavior(to, from, savedPosition): any {
        return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
})

export default router
