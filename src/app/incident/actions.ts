import { ActionContext } from 'vuex';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';
import { IIncidentState } from './state';
import { IIncident } from './IIncident';

export interface IIncidentActions {
  fetchIncidents(context: ActionContext<IIncidentState, IState>): Promise<any>;
  fetchIncident(context: ActionContext<IIncidentState, IState>, id: string): Promise<any>;
  addIncident(context: ActionContext<IIncidentState, IState>, incident: IIncident): Promise<any>;
  updateIncident(context: ActionContext<IIncidentState, IState>, incident: IIncident): Promise<any>;
  deleteIncident(context: ActionContext<IIncidentState, IState>, incident: IIncident): Promise<any>;
}

export const IncidentActions: IIncidentActions = {
  async fetchIncidents({ commit }) {
    try {
      const response = await HttpService.get<IIncident[]>('/incident');
      commit('SET_INCIDENTS', response.data);
    } catch (e) {
      throw e;
    }
  },
  async fetchIncident({ commit }, id) {
    try {
      const response = await HttpService.get<IIncident>(`/incident/${ id }`);
      commit('SET_CURRENT_INCIDENT', response.data);
    } catch (e) {
      throw e;
    }
  },
  async addIncident({ commit }, incident) {
    try {
      const response = await HttpService.post<IIncident>('/incident', incident);
      commit('ADD_INCIDENT', response.data);
    } catch (e) {
      throw e;
    }
  },
  async updateIncident({ commit }, incident) {
    try {
      const response = await HttpService.put<IIncident>(`/incident/${ incident.id }`, incident);
      commit('UPDATE_INCIDENT', response.data);
    } catch (e) {
      throw e;
    }
  },
  async deleteIncident({ commit }, incident) {
    try {
      await HttpService.delete<IIncident>(`/incident/${ incident.id }`);
      commit('DELETE_INCIDENT', incident);
    } catch (e) {
      throw e;
    }
  },
};
