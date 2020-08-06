import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import StockManagement from './StockManagement.vue';
import { IStockManagementState } from '../state';
import { StockManagementModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StockManagement.vue', () => {
  let store: Store<IStockManagementState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        stockManagement: StockManagementModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(StockManagement, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    StockManagement.prefetch({});

    expect(wrapper.find('h1').text()).toBe('StockManagement');
  });
});
