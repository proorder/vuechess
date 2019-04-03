import Vue from "vue";
import Router from "vue-router";
import Basic from "./views/Basic";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      meta: { breadcrumb: "Главная страница" },
      component: Basic,
      children: [
        {
          path: "",
          name: "home",
          component: function() {
            return import(/* webpackChunkName: "home" */ "./views/Home.vue");
          }
        },
        {
          path: "/trainers",
          name: "Тренеры",
          component: function() {
            return import(/* webpackChunkName: "trainers" */ "./views/Trainers.vue");
          }
        },
        {
          path: "/reviews",
          name: "Отзывы",
          component: function() {
            return import(/* webpackChunkName: "reviews" */ "./views/Reviews.vue");
          }
        },
        {
          path: "/news",
          name: "Новости",
          component: function() {
            return import(/* webpackChunkName: "news" */ "./views/News.vue");
          }
        },
        {
          path: "/inventory",
          name: "Инвентарь",
          component: function() {
            return import(/* webpackChunkName: "inventory" */ "./views/Inventory.vue");
          }
        },
        {
          path: "/antique-books",
          name: "Книги",
          component: function() {
            return import(/* webpackChunkName: "AntiqueBooks" */ "./views/AntiqueBooks.vue");
          }
        },
        {
          path: "/trainer",
          name: "Тренер",
          component: function() {
            return import(/* webpackChunkName: "trainer" */ "./views/Trainer.vue");
          }
        },
        {
          path: "/registration",
          name: "Регистрация",
          component: function() {
            return import(/* webpackChunkName: "registration" */ "./views/Registration.vue");
          }
        },
        {
          path: "/profile",
          name: "Профиль",
          component: function() {
            return import(/* webpackChunkName: "profile" */ "./views/Profile.vue");
          }
        },
        {
          path: "/trainer-information",
          name: "Информация о тренере",
          component: function() {
            return import(/* webpackChunkName: "TrainerInformation" */ "./views/TrainerInformation.vue");
          }
        }
      ]
    }
  ]
});
