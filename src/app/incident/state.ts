import { IIncident } from './IIncident';

export interface IIncidentState {
  /**
   * put your state attributes here, for example:
   * myAttribute: any;
   */
  incidents: IIncident[];
  currentIncident: IIncident;
}

export const IncidentDefaultState = (): IIncidentState => {
  return {
    /**
     * put your default value here, for example:
     * myAttribute: null,
     */
    incidents: [],
    currentIncident: null,
  };
};
