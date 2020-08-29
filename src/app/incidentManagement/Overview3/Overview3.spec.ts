import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Overview3 from './Overview3.vue';
import { IIncidentManagementState } from '../state';
import { IncidentManagementModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Overview3.vue', () => {
  let store: Store<IIncidentManagementState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        incidentManagement: IncidentManagementModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Overview3, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Overview3.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Overview3');
  });
});
