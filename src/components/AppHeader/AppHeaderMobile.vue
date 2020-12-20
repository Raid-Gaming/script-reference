<template>
  <header
    class="header"
    :class="{
      'header--open': !isSidebarCollapsed,
    }"
  >
    <template v-if="isSearchCollapsed">
      <r-button flat @click="toggleSidebarCollapse">
        <menu-icon />
      </r-button>
      <template v-if="isSidebarCollapsed">
        <r-button flat @click="onSearchClick" class="flex--right">
          <magnify-icon />
        </r-button>
        <r-button flat @click="goHome">
          <home-icon />
        </r-button>
      </template>
      <template v-else>
        <filters />
        <dark-mode-toggle />
      </template>
    </template>
    <template v-else>
      <r-button flat @click="setSearchCollapsed(true)">
        <arrow-left-icon />
      </r-button>
      <search mobile />
    </template>
  </header>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

import DarkModeToggle from '@/components/AppHeader/DarkModeToggle.vue';
import Filters from '@/components/AppHeader/Filters.vue';
import Search from '@/components/Search/Search.vue';

import ArrowLeftIcon from '@/icons/ArrowLeft.vue';
import HomeIcon from '@/icons/Home.vue';
import MagnifyIcon from '@/icons/Magnify.vue';
import MenuIcon from '@/icons/Menu.vue';

import { useCollapsible } from '@/hooks/collapsible';

export default defineComponent({
  components: {
    ArrowLeftIcon,
    DarkModeToggle,
    Filters,
    HomeIcon,
    MagnifyIcon,
    MenuIcon,
    Search,
  },
  setup() {
    const { isCollapsed: isSearchCollapsed, setCollapsed: setSearchCollapsed } = inject(
      'searchCollapsible',
      useCollapsible(),
    );
    const {
      isCollapsed: isSidebarCollapsed,
      setCollapsed: setSidebarCollapsed,
      toggleCollapse: toggleSidebarCollapse,
    } = inject('sidebarCollapsible', useCollapsible());

    function goHome() {
      window.location.href = 'https://raid-gaming.net';
    }

    function onSearchClick() {
      setSidebarCollapsed(true);
      setSearchCollapsed(false);
    }

    return {
      goHome,
      isSearchCollapsed,
      isSidebarCollapsed,
      onSearchClick,
      setSearchCollapsed,
      toggleSidebarCollapse,
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

    a {
      padding: 0 12px;
      text-decoration: none;
    }
  }

  .header--open {
    justify-content: space-between;

    .filters {
      margin: 0;
    }

    .dark-mode-toggle {
      margin: 0 12px;
    }
  }
}

.flex--right {
  margin-left: auto;
}
</style>
