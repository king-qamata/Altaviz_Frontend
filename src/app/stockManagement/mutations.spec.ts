import { StockManagementMutations } from './mutations';
import { StockManagementDefaultState, IStockManagementState } from './state';

describe('StockManagementMutations', () => {
  let testState: IStockManagementState;

  beforeEach(() => {
    testState = StockManagementDefaultState();
  });

  test('Please write the tests for the mutations here', () => {
    // here is an example: https://github.com/vuesion/vuesion/blob/master/src/app/counter/mutations.spec.ts
    expect(true).toBeFalsy();
  });
});
