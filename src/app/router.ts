import Vue from 'vue';
import VueRouter, { Route, RouteRecord } from 'vue-router';
import Meta from 'vue-meta';
import { AppRoutes } from './app/routes';
import { HomeRoutes } from './home/routes';
import { CounterRoutes } from './example/counter/routes';
import { FormRoutes } from './example/form/routes';
import { DashboardRoutes } from './example/dashboard/routes';
import { store } from '@/app/store';
// import { IncidentalsRoutes } from './incidentManagement/Incident/routes';
// import { OverviewRoutes } from './incidentManagement/Overview/routes';
// import { Overview2Routes } from './incidentManagement/Overview2/routes';
// import { Overview3Routes } from './incidentManagement/Overview3/routes';
import { IncidentManagementRoutes } from './incidentManagement/routes';
import { AtmEngineerManagementRoutes } from './atmEngineerManagement/routes';
import { StockManagementRoutes } from './stockManagement/routes';
import { IncidentRoutes } from './incident/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    ...AppRoutes,
    ...HomeRoutes,
    ...CounterRoutes,
    ...FormRoutes,
    ...DashboardRoutes,
    ...IncidentManagementRoutes,
    //  ...IncidentalsRoutes,
    // ...OverviewRoutes,
    // ...Overview2Routes,
    // ...Overview3Routes,
    ...AtmEngineerManagementRoutes,
    ...StockManagementRoutes,
    ...IncidentRoutes,
  ],
  scrollBehavior(to: Route, from: Route, savedPosition: { x: number; y: number }) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return savedPosition || { x: 0, y: 0 };
  },
});

// example guard
// TODO remove or adjust in production code
router.beforeEach((to: Route, from: Route, next: any) => {
  if (to.matched.some((record: RouteRecord) => record.meta.requiresAuth)) {
    const isAuthenticated = store.getters['auth/isAuthenticated'];

    if (!isAuthenticated) {
      next({ path: '/', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});
