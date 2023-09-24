<template>
  <q-card flat bordered style="width: 90%">
    <q-card-section class="row">
      <div class="col-4"><b>Nome</b></div>
      <div class="col-8">{{ props?.data?.name }}</div>
    </q-card-section>
    <q-separator />
    <q-card-section class="row">
      <div class="col-4"><b>E-mail</b></div>
      <div class="col-8">{{ props?.data?.email }}</div>
    </q-card-section>
    <q-separator />
    <q-card-section class="row">
      <div class="col-4"><b>Nível de acesso</b></div>
      <div class="col-8">
        {{ props?.data?.role === 'member' ? 'Membro' : 'Admin' }}
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="row">
      <div class="col-4"><b>Status</b></div>
      <div class="col-8">
        {{ props?.data?.active ? 'Ativo' : 'Desativado' }}
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="row">
      <div class="col-4"><b>Data de Cadastro</b></div>
      <div class="col-8">
        {{
          props?.data?.created_at ? dateFormater(props?.data?.created_at) : ''
        }}
      </div>
    </q-card-section>
    <q-separator />
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from 'components/models';
export default defineComponent({
  name: 'IndexPage',
  components: {},
  props: {
    data: Object as PropType<User>,
  },

  setup(props) {
    const locale = 'pt-br';
    const dateFormater = (date: string) => {
      console.log(date);
      let newDate = new Date(date).toLocaleDateString(locale, {
        hour: '2-digit',
        minute: '2-digit',
      });
      return newDate.replace(',', ' às');
    };
    return { props, dateFormater };
  },
});
</script>
<style scoped></style>
