<template>
  <div class="method-usage">
    <div class="method-usage__wrapper">
      <span class="method-usage__content">{{ content }}</span>
    </div>
    <r-button class="method-usage__copy" :title="$t('method.usage.copy')" large @click="toClipboard">
      <content-copy-icon />
    </r-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ContentCopyIcon from '@/icons/ContentCopy.vue';

export default defineComponent({
  components: {
    ContentCopyIcon,
  },
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    function toClipboard() {
      const copyField = document.createElement('textarea');
      document.querySelector('body')?.appendChild(copyField);
      copyField.value = props.content;
      copyField.select();
      document.execCommand('copy');
      copyField.remove();
    }

    return {
      toClipboard,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.method-usage {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: $color-method-usage;
  border-radius: 4px;
}

.method-usage__wrapper {
  overflow-x: auto;
  height: 48px;
  display: flex;
  align-items: center;
}

.method-usage__content {
  font-size: $font-size-lg;
  font-style: italic;
  padding: 0 16px;
  white-space: nowrap;
}

.method-usage__copy {
  background: $color-border;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

@media screen and (max-width: 767px) {
  .method-usage__content {
    font-size: $font-size-sm;
  }
}
</style>
