import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/books',
    name: 'Booklist',
    component: () => import('../views/Booklist.vue'),
    children: [
      {
        path: ':id',
        name: 'Detail',
        component: () => import('../views/Detail.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/books',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
