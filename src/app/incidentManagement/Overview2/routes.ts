import { RouteConfig } from 'vue-router/types/router';

export const Overview2Routes: RouteConfig[] = [
  {
    path: '/incident-overview2',
    name: 'incidentOverview2',
    component: () =>
      import(/* webpackChunkName: "incident-overview2" */ './Overview2/Overview2.vue').then((m: any) => m.default),
  },
];
