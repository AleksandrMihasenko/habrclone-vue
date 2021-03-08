import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Register from '@/views/Register';
import Login from '@/views/Login';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: "main" },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: "auth" },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: "auth" },
    component: Register
  }
];

const router = new VueRouter({
  routes
});

export default router;
