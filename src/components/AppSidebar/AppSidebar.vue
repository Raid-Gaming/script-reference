<template>
  <nav
    class="sidebar"
    :class="{
      'sidebar--collapsed': isCollapsed,
    }"
  >
    <sidebar-category v-for="category of filteredApi" :key="category.id" :category="category" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

import SidebarCategory from '@/components/AppSidebar/SidebarCategory.vue';

import { useCollapsible } from '@/hooks/collapsible';
import { useMethods } from '@/hooks/methods';

export default defineComponent({
  components: {
    SidebarCategory,
  },
  setup() {
    const { isCollapsed } = inject('sidebarCollapsible', useCollapsible());
    const { filteredApi } = useMethods();

    return { filteredApi, isCollapsed };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.sidebar {
  grid-area: sidebar;
  user-select: none;
  height: 100%;
  overflow-y: scroll;
}

@media screen and (max-width: 1023px) {
  .sidebar--collapsed {
    display: none;
  }

  .sidebar {
    position: fixed;
    top: 48px;
    left: 0;
    right: 0;
    z-index: 5;
    background: $color-bg;
  }
}
</style>
