import { IncidentMutations } from './mutations';
import { IncidentDefaultState, IIncidentState } from './state';

describe('IncidentMutations', () => {
  let testState: IIncidentState;

  beforeEach(() => {
    testState = IncidentDefaultState();
  });

  test('it should set incidents', () => {
    const expected = [{ id: '1' }];

    IncidentMutations.SET_INCIDENTS(testState, expected);
    expect(testState.incidents).toEqual(expected);
  });

  test('it should set currentIncident', () => {
    const expected = { id: '1' };

    IncidentMutations.SET_CURRENT_INCIDENT(testState, expected);
    expect(testState.currentIncident).toEqual(expected);
  });

  test('it should add and update a incident', () => {
    const incident = { id: '1' };
    IncidentMutations.ADD_INCIDENT(testState, incident);
    expect(testState.incidents).toEqual([incident]);

    incident.id = '2';

    IncidentMutations.UPDATE_INCIDENT(testState, incident);
    expect(testState.incidents).toEqual([incident]);
  });

  test('it should delete a incident', () => {
    const incident = { id: '1' };
    IncidentMutations.ADD_INCIDENT(testState, incident);
    expect(testState.incidents).toHaveLength(1);

    IncidentMutations.DELETE_INCIDENT(testState, incident);
    expect(testState.incidents).toHaveLength(0);
  });
});
