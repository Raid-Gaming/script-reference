<template>
  <r-button block class="method">
    {{ method.name }}
  </r-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    method: {
      type: Object,
      required: true,
    },
    namespace: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.method {
  font-size: $font-size-sm;
  justify-content: flex-start;
  border-radius: 0;
}
</style>
