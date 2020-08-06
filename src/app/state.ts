import { AppDefaultState, IAppState } from './app/state';
import { AuthDefaultState, IAuthState } from './shared/modules/auth/state';
import { ICounterState } from './example/counter/state';
import { IIncidentManagementState } from './incidentManagement/state';
import { IAtmEngineerManagementState } from './atmEngineerManagement/state';
import { IStockManagementState } from './stockManagement/state';
import { IIncidentState } from './incident/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  auth?: IAuthState;
  counter?: ICounterState;
  incidentManagement?: IIncidentManagementState;
  atmEngineerManagement?: IAtmEngineerManagementState;
  stockManagement?: IStockManagementState;
  incident?: IIncidentState;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState(),
    ...AuthDefaultState(),
  },
};
