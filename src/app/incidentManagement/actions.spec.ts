import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { IncidentManagementDefaultState, IIncidentManagementState } from './state';
import { IState } from '@/app/state';
import { IncidentManagementActions } from './actions';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

describe('IncidentManagementActions', () => {
  let testContext: ActionContext<IIncidentManagementState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: IncidentManagementDefaultState(),
    } as ActionContext<IIncidentManagementState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  test('Please write the tests for the actions here', () => {
    // here is an example: https://github.com/vuesion/vuesion/blob/master/src/app/counter/actions.spec.ts
    expect(true).toBeFalsy();
  });
});
