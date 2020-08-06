import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Overview2 from './Overview2.vue';
import { IIncidentManagementState } from '../state';
import { IncidentManagementModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Overview2.vue', () => {
  let store: Store<IIncidentManagementState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        incidentManagement: IncidentManagementModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Overview2, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Overview2.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Overview2');
  });
});
