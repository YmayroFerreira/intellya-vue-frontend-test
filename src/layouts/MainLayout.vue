<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-1 text-black">
        <q-img
          :src="'src/assets/logo.png'"
          spinner-color="white"
          class="logo"
        />
        <q-toolbar-title style="max-width: 130px">
          <q-tabs
            v-model="tab"
            class="text-black"
            no-caps
            narrow-indicator
            indicator-color="warning"
          >
            <q-route-tab name="users" label="Usuários" :to="{ name: 'main' }" />
          </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    //const leftDrawerOpen = ref(false);
    const router = useRouter();
    const redirect = () => {
      router.push('/');
    };
    return {
      tab: ref('users'),
      redirect,
    };
  },
});
</script>
<style scoped>
.logo {
  max-width: 150px;
  margin-left: 5%;
}
</style>
