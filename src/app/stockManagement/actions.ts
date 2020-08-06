import { ActionContext } from 'vuex';
import { IStockManagementState } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

export interface IStockManagementActions {
  /**
   * put your action names, parameters and return values here, for example:
   * myAction(context: ActionContext<IStockManagementState, IState>, param: any): Promise<any>;
   */
}

export const StockManagementActions: IStockManagementActions = {
  /**
   * here comes the implementation of your actions, for example:
   * myAction({ commit }, param) {
   *   commit('MY_MUTATION);
   * }
   */
};
