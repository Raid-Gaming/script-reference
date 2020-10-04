<template>
  <header class="header">
    <r-button flat @click="openMenu">
      <menu-icon />
    </r-button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MenuIcon from '@/icons/Menu.vue';

export default defineComponent({
  components: {
    MenuIcon,
  },
  setup() {
    function openMenu(): void {
      console.log('open sidebar');
    }

    return {
      openMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';
@import '@/styles/search.scss';

.header {
  display: none;
}

@media screen and (max-width: 1023px) {
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
}
</style>
