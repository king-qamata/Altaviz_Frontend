import { Module } from 'vuex';
import { IState } from '@/app/state';
import { IncidentDefaultState, IIncidentState } from './state';
import { IncidentActions } from './actions';
import { IncidentGetters } from './getters';
import { IncidentMutations } from './mutations';

export const IncidentModule: Module<IIncidentState, IState> = {
  namespaced: true,
  actions: {
    ...IncidentActions,
  },
  getters: {
    ...IncidentGetters,
  },
  state: {
    ...IncidentDefaultState(),
  },
  mutations: {
    ...IncidentMutations,
  },
};
