<template>
  <q-page class="row q-col-gutter-none">
    <div class="col-12">
      <h4 class="header">
        <b>Usuário n°{{ route.params.id }}</b>
      </h4>
      <p class="subtitle">
        Vizualize as informações do usuário solicitado abaixo
      </p>
    </div>
    <div class="col-12">
      <DetailsCard :data="store.userDetails" class="table_container" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from 'stores/appStore';
import DetailsCard from 'components/DetailsCard.vue';

const store = useAppStore();

export default defineComponent({
  name: 'DetailsPage',
  components: { DetailsCard },
  setup() {
    const route = useRoute();
    let currentRoute = computed(() => {
      return route.params;
    });
    onMounted(() => {
      store.getUserDetails(route.params.id as string);
    });
    watch(currentRoute, () => {
      store.getUserDetails(route.params.id as string);
    });
    return { route, store };
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
}
</style>
