import Vue from 'vue';
import VueRouter from 'vue-router';
import GlobalFeed from '@/views/GlobalFeed';
import UserFeed from '@/views/UserFeed';
import TagFeed from '@/views/TagFeed';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Article from '@/views/Article';
import CreateArticle from '@/views/CreateArticle';
import EditArticle from '@/views/EditArticle';
import Settings from '@/views/Settings';

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
    name: 'userFeed',
    meta: { layout: "main" },
    component: UserFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    meta: { layout: "main" },
    component: TagFeed
  },
  {
    path: '/article/:slug',
    name: 'article',
    meta: { layout: "main" },
    component: Article
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    meta: { layout: "main" },
    component: CreateArticle
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    meta: { layout: "main" },
    component: EditArticle
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { layout: "main" },
    component: Settings
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
