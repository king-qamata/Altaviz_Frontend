import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Overview from './Overview.vue';
import { IIncidentManagementState } from '../state';
import { IncidentManagementModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Overview.vue', () => {
  let store: Store<IIncidentManagementState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        incidentManagement: IncidentManagementModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Overview, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Overview.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Overview');
  });
});
