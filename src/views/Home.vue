<template>
  <div class="page-home">
    <banner />
    <r-section class="page-home__content" :title="$t('home.welcome')">
      <p v-html="$t('home.description')" />
      <p v-html="$t('home.additionalSources')" />
    </r-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Banner from '@/components/Banner/Banner.vue';

export default defineComponent({
  components: {
    Banner,
  },
});
</script>

<style lang="scss" scoped>
.page-home__content {
  padding: 32px;
}
</style>
