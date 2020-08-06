import { IIncidentState } from './state';
import { IIncident } from './IIncident';

export interface IIncidentGetters {
  incidents(state: IIncidentState): IIncident[];
  currentIncident(state: IIncidentState): IIncident;
}

export const IncidentGetters: IIncidentGetters = {
  incidents(state) {
    return state.incidents;
  },
  currentIncident(state) {
    return state.currentIncident;
  },
};
