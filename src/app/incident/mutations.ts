import { IIncidentState } from './state';
import { IIncident } from './IIncident';

export interface IIncidentMutations {
  SET_INCIDENTS(state: IIncidentState, incidents: IIncident[]): void;
  SET_CURRENT_INCIDENT(state: IIncidentState, incident: IIncident): void;
  ADD_INCIDENT(state: IIncidentState, incident: IIncident): void;
  UPDATE_INCIDENT(state: IIncidentState, incident: IIncident): void;
  DELETE_INCIDENT(state: IIncidentState, incident: IIncident): void;
}

export const IncidentMutations: IIncidentMutations = {
  SET_INCIDENTS: (state, incidents) => {
    state.incidents = incidents;
  },
  SET_CURRENT_INCIDENT: (state, incident) => {
    state.currentIncident = incident;
  },
  ADD_INCIDENT: (state, incident) => {
    state.incidents.push(incident);
  },
  UPDATE_INCIDENT: (state, incident) => {
    const idx = state.incidents.findIndex((item) => item.id === incident.id);
    state.incidents.splice(idx, 1, incident);
  },
  DELETE_INCIDENT: (state, incident) => {
    const idx = state.incidents.findIndex((item) => item.id === incident.id);
    state.incidents.splice(idx, 1);
  },
};
