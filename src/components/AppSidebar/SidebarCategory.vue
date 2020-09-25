<template>
  <div class="category" @click="toggleCollapse">
    <span>{{ category.name }}</span>
    <chevron-down-icon
      class="category__chevron"
      :class="{
        'category__chevron--collapsed': isCollapsed,
      }"
    />
  </div>
  <div v-show="!isCollapsed" class="namespaces" ref="element">
    <sidebar-namespace
      v-for="namespace of category.namespaces"
      :key="namespace.name"
      :category-id="category.id"
      :namespace="namespace"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SidebarNamespace from '@/components/AppSidebar/SidebarNamespace.vue';

import ChevronDownIcon from '@/icons/ChevronDown.vue';

import { useCollapsible } from '@/hooks/collapsible';

export default defineComponent({
  components: {
    ChevronDownIcon,
    SidebarNamespace,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { isCollapsed, toggleCollapse } = useCollapsible();

    return {
      isCollapsed,
      toggleCollapse,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

$animation-props: 0.2s ease-in-out;

.category {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: $color-primary;
  color: $color-primary-contrast;
  font-family: $font-secondary;
  text-transform: uppercase;
  font-size: $font-size-lg;
  font-weight: 700;
  padding: 14px 16px;
  cursor: pointer;
}

.category__chevron {
  opacity: 0;
  width: $font-size-lg;
  height: $font-size-lg;
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.category__chevron--collapsed {
  transform: rotate(90deg);
}

.category:hover .category__chevron {
  opacity: 1;
  transform: rotate(0deg);
}
</style>
