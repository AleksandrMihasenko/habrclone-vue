import Vue from 'vue';
import VueRouter from 'vue-router';
import GlobalFeed from '@/views/GlobalFeed';
import Register from '@/views/Register';
import Login from '@/views/Login';

Vue.use(VueRouter);

const routes = [
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
  },
  {
    path: '/',
    name: 'globalFeed',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'feed',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/articles/:slug',
    name: 'article',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    meta: { layout: "main" },
    component: GlobalFeed
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    meta: { layout: "main" },
    component: GlobalFeed
  }
];

const router = new VueRouter({
  routes
});

export default router;
