<template>
  <section class="r-section">
    <h2 v-if="title" class="r-section__heading">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.r-section {
  padding: 8px 0;
}

.r-section__heading {
  font-size: 20px;
  font-weight: normal;
}

.r-section::v-deep(p) {
  color: $color-content;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
