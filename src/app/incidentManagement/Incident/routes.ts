import { RouteConfig } from 'vue-router/types/router';

export const IncidentalsRoutes: RouteConfig[] = [
  {
    path: '/incidentals',
    name: 'incidentInstance',
    component: () =>
      import(/* webpackChunkName: "incident-instance" */ './Incident/Incident.vue').then((m: any) => m.default),
  },
];
