<template>
  <header class="header">
    <filters />
    <search />
    <dark-mode-toggle />
    <a href="https://raid-gaming.net" :title="$t('global.home')" class="header__home">
      {{ $t('global.home') }}
      <arrow-right-icon />
    </a>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DarkModeToggle from '@/components/AppHeader/DarkModeToggle.vue';
import Filters from '@/components/AppHeader/Filters.vue';
import Search from '@/components/Search/Search.vue';

import ArrowRightIcon from '@/icons/ArrowRight.vue';

export default defineComponent({
  components: {
    ArrowRightIcon,
    DarkModeToggle,
    Filters,
    Search,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';
@import '@/styles/search.scss';

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: $color-bg;
  border-bottom: 1px solid $color-border;
  height: 48px;
  padding: 0 3px;
  grid-area: header;
  user-select: none;
  z-index: 10;

  & > *:not(:last-child) {
    margin-right: 12px;
  }

  a {
    padding: 0 12px;
    text-decoration: none;
  }
}

.header__home {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  svg {
    margin-left: 4px;
    width: 14px;
    height: 14px;
  }
}

@media screen and (max-width: 1023px) {
  .header {
    display: none;
  }
}
</style>
