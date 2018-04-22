import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts'
import Communications from '@/components/Communications'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/communications/:id',
      name: 'Communications',
      component: Communications
    }
  ]
})
