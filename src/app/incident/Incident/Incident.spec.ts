import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Incident from './Incident.vue';
import { IIncidentState } from '../state';
import { IncidentModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Incident.vue', () => {
  let store: Store<IIncidentState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        incident: IncidentModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Incident, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Incident.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Incident');
  });
});
