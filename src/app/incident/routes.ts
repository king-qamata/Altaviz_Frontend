import { RouteConfig } from 'vue-router/types/router';

export const IncidentRoutes: RouteConfig[] = [
  {
    path: '/incident',
    name: 'incident',
    component: () => import(/* webpackChunkName: "incident" */ './Incident/Incident.vue').then((m: any) => m.default),
  },
];
