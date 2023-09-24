<template>
  <q-page class="row q-col-gutter-none">
    <div class="col-12">
      <h4 class="header">
        <b>Listagem de Usuários</b>
      </h4>
      <p class="subtitle">Vizualize os usuários que acessam a plataforma</p>
    </div>
    <div class="col-12">
      <UserTable
        :columns="columns"
        :data="store.userList"
        class="table_container"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { QTableColumn } from 'quasar';
import { useAppStore } from 'stores/appStore';
import UserTable from 'components/UserTable.vue';

const store = useAppStore();
export default defineComponent({
  name: 'MainPage',
  components: { UserTable },
  setup() {
    const columns: QTableColumn[] = [
      {
        name: 'id',
        required: true,
        label: 'ID',
        align: 'left',
        field: (row) => row.id,
        format: (val) => `${val}`,
        sortable: false,
      },
      {
        name: 'name',
        align: 'left',
        label: 'Nome',
        field: 'name',
        sortable: false,
      },
      {
        name: 'email',
        label: 'E-mail',
        field: 'email',
        align: 'left',
        sortable: false,
      },
      { name: 'role', label: 'Nível de Acesso', align: 'left', field: 'role' },
      { name: 'actions', label: '', align: 'left', field: 'actions' },
    ];
    onMounted(() => {
      store.getUsers();
    });
    return { columns, store };
  },
});
</script>
<style scoped>
.header {
  margin-left: 5%;
  margin-bottom: 1%;
}
.subtitle {
  margin-left: 5%;
}
.table_container {
  margin: auto;
  margin-top: 5vh;
}
</style>
