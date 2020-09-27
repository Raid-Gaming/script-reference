<template>
  <div class="search">
    <magnify-icon class="search__icon" />
    <input type="text" class="search__input" v-model="value" />
    <transition name="fade">
      <close-icon v-if="value" class="search__icon search__icon--clickable" @click="clear" />
    </transition>
    <search-results v-if="results.length" :results="results" @clear="clear" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SearchResults from '@/components/Search/SearchResults.vue';

import CloseIcon from '@/icons/Close.vue';
import MagnifyIcon from '@/icons/Magnify.vue';

import { useSearch } from '@/hooks/search';

export default defineComponent({
  components: {
    SearchResults,
    CloseIcon,
    MagnifyIcon,
  },
  setup() {
    const { clear, results, value } = useSearch();

    return {
      clear,
      results,
      value,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';
@import '@/styles/search.scss';

.search {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: $search-height;
  width: 280px;
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

.search__icon--clickable {
  cursor: pointer;
}

.search__input {
  padding: 0;
  outline: none;
  border: 0;
  height: 100%;
  min-width: 0;
  flex: 1;
  background: transparent;
  color: $color-fg;
}
</style>
