<template>
  <q-table
    :rows="props.data"
    :columns="props.columns"
    row-key="id"
    hide-bottom
    :rows-per-page-options="[0]"
    style="width: 70%"
    :table-header-style="{ backgroundColor: '#EEECEC' }"
  >
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <router-link
          :to="{ name: 'userdetails', params: { id: props.row.id } }"
        >
          <q-btn dense no-caps flat color="info">Visualizar</q-btn>
        </router-link>
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
///import { QTableColumn } from 'quasar';
import { useAppStore } from 'stores/appStore';

const store = useAppStore();
export default defineComponent({
  name: 'IndexPage',
  components: {},
  props: ['columns', 'data'],
  setup(props) {
    return { store, props };
  },
});
</script>
