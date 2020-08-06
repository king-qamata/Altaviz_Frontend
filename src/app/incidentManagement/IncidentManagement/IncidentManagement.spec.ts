import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import IncidentManagement from './IncidentManagement.vue';
import { IIncidentManagementState } from '../state';
import { IncidentManagementModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('IncidentManagement.vue', () => {
  let store: Store<IIncidentManagementState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        incidentManagement: IncidentManagementModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(IncidentManagement, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    IncidentManagement.prefetch({});

    expect(wrapper.find('h1').text()).toBe('IncidentManagement');
  });
});
