import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/profile',
      name: 'Profile',
      component: {
        template: '<router-view></router-view>'
      },
      children: [{
        path: 'signIn',
        name: 'SignIn',
        component: resolve => require(['@/views/profile/signInComponent/signInComponent'], resolve)
      }]
    }
  ]
})
