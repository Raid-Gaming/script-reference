<template>
  <nav class="sidebar">
    <sidebar-category v-for="category of filteredApi" :key="category.id" :category="category" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SidebarCategory from '@/components/AppSidebar/SidebarCategory.vue';

import { useMethods } from '@/hooks/methods';

export default defineComponent({
  components: {
    SidebarCategory,
  },
  setup() {
    const { filteredApi } = useMethods();

    return { filteredApi };
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
  .sidebar {
    display: none;
  }
}
</style>
