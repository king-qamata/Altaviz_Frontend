import { RouteConfig } from 'vue-router/types/router';

export const OverviewRoutes: RouteConfig[] = [
  {
    path: '/incident-overview',
    name: 'incidentOverview',
    component: () =>
      import(/* webpackChunkName: "incident-overview" */ './Overview/Overview.vue').then((m: any) => m.default),
  },
];
