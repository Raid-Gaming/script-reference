<template>
  <pre ref="codeBlock" class="method-example c">{{ code }}</pre>
</template>

<script lang="ts">
import { highlightBlock } from 'highlight.js';
import { computed, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const codeBlock = ref<HTMLElement>();

    const code = computed(() => props.content.join('\r\n'));

    onMounted(() => {
      if (codeBlock.value) {
        highlightBlock(codeBlock.value);
      }
    });

    return {
      code,
      codeBlock,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.method-example {
  background: $color-code-block !important;
  border-radius: 4px;
  padding: 16px !important;
  margin: 0 !important;
  max-width: 100%;

  &::-webkit-scrollbar {
    height: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
  }
}
</style>
