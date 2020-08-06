import { RouteConfig } from 'vue-router/types/router';

export const AtmEngineerManagementRoutes: RouteConfig[] = [
  {
    path: '/atm-engineer-management',
    name: 'atmEngineerManagement',
    component: () => import(/* webpackChunkName: "atm-engineer-management" */ './AtmEngineerManagement/AtmEngineerManagement.vue').then((m: any) => m.default),
  },
];
