import { Module } from 'vuex';
import { IState } from '@/app/state';
import { AtmEngineerManagementDefaultState, IAtmEngineerManagementState } from './state';
import { AtmEngineerManagementActions } from './actions';
import { AtmEngineerManagementGetters } from './getters';
import { AtmEngineerManagementMutations } from './mutations';

export const AtmEngineerManagementModule: Module<IAtmEngineerManagementState, IState> = {
  namespaced: true,
  actions: {
    ...AtmEngineerManagementActions,
  },
  getters: {
    ...AtmEngineerManagementGetters,
  },
  state: {
    ...AtmEngineerManagementDefaultState(),
  },
  mutations: {
    ...AtmEngineerManagementMutations,
  },
};
