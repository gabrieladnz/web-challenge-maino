<template>
  <div class="home">
    <!-- Páginas chamadas -->
    <home-vue></home-vue>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeVue from '../pages/Home.vue';

@Options({
  components: {
    HomeVue,
  },
})
export default class HomeView extends Vue {}
</script>
