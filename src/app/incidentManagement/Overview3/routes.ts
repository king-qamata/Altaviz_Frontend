import { RouteConfig } from 'vue-router/types/router';

export const Overview3Routes: RouteConfig[] = [
  {
    path: '/incident-overview3',
    name: 'incidentOverview3',
    component: () =>
      import(/* webpackChunkName: "incident-overview3" */ './Overview3/Overview3.vue').then((m: any) => m.default),
  },
];
