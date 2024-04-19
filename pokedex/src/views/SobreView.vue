<template>
  <div>
    <div class="about">
      <sobre-vue></sobre-vue>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SobreVue from '../pages/Sobre.vue';

@Options({
  components: {
    SobreVue,
  },
})
export default class SobreView extends Vue { }
</script>
