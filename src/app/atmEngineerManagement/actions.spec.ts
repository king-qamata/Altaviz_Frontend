import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { AtmEngineerManagementDefaultState, IAtmEngineerManagementState } from './state';
import { IState } from '@/app/state';
import { AtmEngineerManagementActions } from './actions';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

describe('AtmEngineerManagementActions', () => {
  let testContext: ActionContext<IAtmEngineerManagementState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: AtmEngineerManagementDefaultState(),
    } as ActionContext<IAtmEngineerManagementState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  test('Please write the tests for the actions here', () => {
    // here is an example: https://github.com/vuesion/vuesion/blob/master/src/app/counter/actions.spec.ts
    expect(true).toBeFalsy();
  });
});
