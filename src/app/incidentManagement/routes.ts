import { RouteConfig } from 'vue-router/types/router';

export const IncidentManagementRoutes: RouteConfig[] = [
  {
    path: '/incident-management',
    name: 'incidentManagement',
    component: () => import(/* webpackChunkName: "incident-management" */ './IncidentManagement/IncidentManagement.vue').then((m: any) => m.default),
  },
];
