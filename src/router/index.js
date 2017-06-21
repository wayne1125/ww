import Vue from 'vue'
import Router from 'vue-router'
import DownloadPage from '@/components/DownloadPage'
import ApplyPage from '@/components/ApplyPage'
import ApplyPagepro from '@/components/ApplyPagepro'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'downloadPage',component: DownloadPage},
    {path: '/apply_page',component: ApplyPage},
    {path: '/apply_pagepro',component: ApplyPagepro},
  ]
})
