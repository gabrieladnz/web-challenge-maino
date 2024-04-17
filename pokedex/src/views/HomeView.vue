<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- Páginas chamadas -->
    <home-vue></home-vue>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeVue from '../components/Home.vue';

@Options({
  components: {
    HomeVue
  },
})
export default class HomeView extends Vue {}
</script>
