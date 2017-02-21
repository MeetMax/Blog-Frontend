import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../view/index.vue';
import Article from '../view/article.vue';
import About from '../view/about.vue';

Vue.use(VueRouter);
const router=new VueRouter({
  mode:'history',
  routes:[
    {
      name:'index',
      path:'/',
      component:Index
    },
    {
      name:'category',
      path:'/category/:id',
      component:Index
    },
    {
      name:'hot',
      path:'/article/:by',
      component:Index
    },
    {
      name:'article',
      path:'/article/:id',
      component:Article
    },
    {
      name:'about',
      path:'/about',
      component:About
    }
  ]
});
export default router;
