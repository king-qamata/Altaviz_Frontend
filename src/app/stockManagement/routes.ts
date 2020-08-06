import { RouteConfig } from 'vue-router/types/router';

export const StockManagementRoutes: RouteConfig[] = [
  {
    path: '/stock-management',
    name: 'stockManagement',
    component: () => import(/* webpackChunkName: "stock-management" */ './StockManagement/StockManagement.vue').then((m: any) => m.default),
  },
];
