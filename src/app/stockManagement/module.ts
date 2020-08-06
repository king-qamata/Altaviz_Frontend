import { Module } from 'vuex';
import { IState } from '@/app/state';
import { StockManagementDefaultState, IStockManagementState } from './state';
import { StockManagementActions } from './actions';
import { StockManagementGetters } from './getters';
import { StockManagementMutations } from './mutations';

export const StockManagementModule: Module<IStockManagementState, IState> = {
  namespaced: true,
  actions: {
    ...StockManagementActions,
  },
  getters: {
    ...StockManagementGetters,
  },
  state: {
    ...StockManagementDefaultState(),
  },
  mutations: {
    ...StockManagementMutations,
  },
};
