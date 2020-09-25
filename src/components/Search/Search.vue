<template>
  <div class="search">
    <magnify-icon class="search__icon" />
    <input type="text" class="search__input" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MagnifyIcon from '@/icons/Magnify.vue';

export default defineComponent({
  components: {
    MagnifyIcon,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';
@import '@/styles/search.scss';

.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: $search-height;
  width: 240px;
  border: 1px solid $color-border;
  border-radius: calc(#{$search-height} / 2);
}

.search__icon {
  padding: 6px 8px;
  color: $color-border;
  width: calc(#{$search-height} + 8px);
  height: $search-height;
  flex-shrink: 0;
}

.search__input {
  padding: 0;
  padding-right: 16px;
  outline: none;
  border: 0;
  height: 100%;
  flex-grow: 1;
  background: transparent;
  color: $color-fg;
}
</style>
