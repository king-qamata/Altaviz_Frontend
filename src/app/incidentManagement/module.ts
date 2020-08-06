import { Module } from 'vuex';
import { IState } from '@/app/state';
import { IncidentManagementDefaultState, IIncidentManagementState } from './state';
import { IncidentManagementActions } from './actions';
import { IncidentManagementGetters } from './getters';
import { IncidentManagementMutations } from './mutations';

export const IncidentManagementModule: Module<IIncidentManagementState, IState> = {
  namespaced: true,
  actions: {
    ...IncidentManagementActions,
  },
  getters: {
    ...IncidentManagementGetters,
  },
  state: {
    ...IncidentManagementDefaultState(),
  },
  mutations: {
    ...IncidentManagementMutations,
  },
};
