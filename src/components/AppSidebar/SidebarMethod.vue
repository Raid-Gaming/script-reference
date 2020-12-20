<template>
  <r-button block class="method" @click="onMethodClick">
    {{ method.name }}
  </r-button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

import { useCollapsible } from '@/hooks/collapsible';
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
  setup(props) {
    const { navigateToMethod } = useMethods();
    const { setCollapsed } = inject('sidebarCollapsible', useCollapsible());

    function onMethodClick() {
      const { categoryId, method, namespace } = props;
      navigateToMethod(categoryId, namespace, method.name);
      setCollapsed(true);
    }

    return {
      onMethodClick,
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
