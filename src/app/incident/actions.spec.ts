import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';
import { IncidentActions } from './actions';
import { IncidentDefaultState, IIncidentState } from './state';

describe('IncidentActions', () => {
  let testContext: ActionContext<IIncidentState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: IncidentDefaultState(),
    } as ActionContext<IIncidentState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  describe('fetchIncidents', () => {
    test('it should call SET_INCIDENTS on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = {};

      mockAxios.onGet('/incident').reply(200, expected);

      await IncidentActions.fetchIncidents(testContext);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['SET_INCIDENTS', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onGet('/incident').reply(500);

      try {
        await IncidentActions.fetchIncidents(testContext);
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('fetchIncident', () => {
    test('it should call SET_CURRENT_INCIDENT on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = {};

      mockAxios.onGet('/incident/1').reply(200, expected);

      await IncidentActions.fetchIncident(testContext, '1');

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['SET_CURRENT_INCIDENT', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onGet('/incident/1').reply(500);

      try {
        await IncidentActions.fetchIncident(testContext, '1');
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('addIncident', () => {
    test('it should call ADD_INCIDENT on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = {};

      mockAxios.onPost('/incident').reply(200, expected);

      await IncidentActions.addIncident(testContext, expected);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['ADD_INCIDENT', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onPost('/incident').reply(500);

      try {
        await IncidentActions.addIncident(testContext, {});
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('updateIncident', () => {
    test('it should call UPDATE_INCIDENT on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = { id: '1' };

      mockAxios.onPut('/incident/1').reply(200, expected);

      await IncidentActions.updateIncident(testContext, expected);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['UPDATE_INCIDENT', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onPut('/incident/1').reply(500);

      try {
        await IncidentActions.updateIncident(testContext, { id: '1' });
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('deleteIncident', () => {
    test('it should call DELETE_INCIDENT on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = { id: '1' };

      mockAxios.onDelete('/incident/1').reply(200, expected);

      await IncidentActions.deleteIncident(testContext, expected);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['DELETE_INCIDENT', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onDelete('/incident/1').reply(500);

      try {
        await IncidentActions.deleteIncident(testContext, { id: '1' });
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });
});
