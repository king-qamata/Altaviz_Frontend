import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import AtmEngineerManagement from './AtmEngineerManagement.vue';
import { IAtmEngineerManagementState } from '../state';
import { AtmEngineerManagementModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AtmEngineerManagement.vue', () => {
  let store: Store<IAtmEngineerManagementState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        atmEngineerManagement: AtmEngineerManagementModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(AtmEngineerManagement, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    AtmEngineerManagement.prefetch({});

    expect(wrapper.find('h1').text()).toBe('AtmEngineerManagement');
  });
});
