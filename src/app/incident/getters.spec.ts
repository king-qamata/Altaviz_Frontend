import { IncidentGetters } from './getters';
import { IncidentDefaultState, IIncidentState } from './state';

describe('IncidentGetters', () => {
  let testState: IIncidentState;

  beforeEach(() => {
    testState = IncidentDefaultState();
  });

  test('it should get the incidents', () => {
    expect(IncidentGetters.incidents(testState)).toEqual(testState.incidents);
  });

  test('it should get the incidents', () => {
    expect(IncidentGetters.currentIncident(testState)).toEqual(testState.currentIncident);
  });
});
