<template>
  <div id="app" :class="$style.overview">
    <vue-grid>
      <vue-breadcrumb :items="breadCrumbItems"></vue-breadcrumb>

      <vue-grid-row>
        <vue-grid-item fill>
          <vue-headline level="1">Incident</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
    <vue-grid>
      <GSTC :config="config" @state="onState" />
    </vue-grid>
  </div>
</template>

<script lang="ts">
import GSTC from 'vue-gantt-schedule-timeline-calendar';
import { registerModule } from '@/app/store';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';

import { IncidentModule } from '../module';

let subs = [];
export default {
  metaInfo:   {
    title: 'Incident',
  },
  components: {
    VueGrid,
    VueBreadcrumb,
    VueGridRow,
    VueGridItem,
    VueButton,
    VueHeadline,
    GSTC,
  },
  data: (): any => ({
      config: {
        height: 300,
        list: {
          rows: {
            '1': {
              id: '1',
              label: 'Row 1',
            },
            '2': {
              id: '2',
              label: 'Row 2',
            },
            '3': {
              id: '3',
              label: 'Row 3',
            },
            '4': {
              id: '4',
              label: 'Row 4',
            },
          },
          columns: {
            data: {
              id: {
                id: 'id',
                data: 'id',
                width: 50,
                header: {
                  content: 'ID',
                },
              },
              label: {
                id: 'label',
                data: 'label',
                width: 200,
                header: {
                  content: 'Label',
                },
              },
            },
          },
        },
        chart: {
          items: {
            '1': {
              id: '1',
              rowId: '1',
              label: 'Item 1',
              time: {
                start: new Date().getTime(),
                end: new Date().getTime() + 24 * 60 * 60 * 1000,
              },
            },
            '2': {
              id: '2',
              rowId: '2',
              label: 'Item 2',
              time: {
                start: new Date().getTime() + 4 * 24 * 60 * 60 * 1000,
                end: new Date().getTime() + 5 * 24 * 60 * 60 * 1000,
              },
            },
            '3': {
              id: '3',
              rowId: '2',
              label: 'Item 3',
              time: {
                start: new Date().getTime() + 6 * 24 * 60 * 60 * 1000,
                end: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
              },
            },
            '4': {
              id: '4',
              rowId: '3',
              label: 'Item 4',
              time: {
                start: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
                end: new Date().getTime() + 12 * 24 * 60 * 60 * 1000,
              },
            },
            '5': {
              id: '5',
              rowId: '4',
              label: 'Item 5',
              time: {
                start: new Date().getTime() + 12 * 24 * 60 * 60 * 1000,
                end: new Date().getTime() + 14 * 24 * 60 * 60 * 1000,
              },
            },
          },
        },
      },
  }),
  methods: { 
    onState(state) {
      this.state = state;
      subs.push(
        state.subscribe('config.chart.items.1', (item) => {
          console.log('item 1 changed', item);
        }),
      );
      subs.push(
        state.subscribe('config.list.rows.1', (row) => {
          console.log('row 1 changed', row);
        }),
      );
    },
    },
    mounted() {
    setTimeout(() => {
      const item1 = this.config.chart.items['1'];
      item1.label = 'label changed dynamically';
      item1.time.end += 2 * 24 * 60 * 60 * 1000;
    }, 2000);
  },
  beforeDestroy() {
    subs.forEach((unsub) => unsub());
  },
  computed: {
    breadCrumbItems() {
      return [
        { label: this.$t('common.home' /* Home */), href: '/' },
        { label: this.$t('common.Incident' /* Incident */), href: '/incident' },
      ];
    },
  },
  beforeCreate() {
    registerModule('incident', IncidentModule);
  },
  //prefetch: (options: IPreLoad) => {
    //registerModule('incident', IncidentModule);

    /**
     * This is the function where you can load all the data that is needed
     * to render the page on the server and client side
     *
     * This function always returns a promise that means, if you want to
     * call a vuex action you have to return it, here is an example
     *
     * return options.store.dispatch('fetchIncident', '1');
     *
     * If you need to fetch data from multiple source your can also return
     * a Promise chain or a Promise.all()
     */
   // return Promise.resolve();
  //},
};
</script>

<style lang="scss" module>
@import "~@/app/shared/design-system";

.incident {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
