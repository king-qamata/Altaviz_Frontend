import { ActionContext } from 'vuex';
import { IIncidentManagementState } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

export interface IIncidentManagementActions {
  /**
   * put your action names, parameters and return values here, for example:
   * myAction(context: ActionContext<IIncidentManagementState, IState>, param: any): Promise<any>;
   */
}

export const IncidentManagementActions: IIncidentManagementActions = {
  /**
   * here comes the implementation of your actions, for example:
   * myAction({ commit }, param) {
   *   commit('MY_MUTATION);
   * }
   */
};
