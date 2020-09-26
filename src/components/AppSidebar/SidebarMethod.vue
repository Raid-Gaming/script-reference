<template>
  <r-button block class="method" @click="navigateToMethod(categoryId, namespace, method.name)">
    {{ method.name }}
  </r-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useMethods } from '@/hooks/methods';

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
  setup() {
    const { navigateToMethod } = useMethods();

    return {
      navigateToMethod,
    };
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
