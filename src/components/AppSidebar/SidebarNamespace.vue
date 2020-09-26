<template>
  <div class="namespace" @click="toggleCollapse">
    <span>{{ namespace.name }}</span>
    <chevron-down-icon
      class="namespace__chevron"
      :class="{
        'namespace__chevron--collapsed': isCollapsed,
      }"
    />
  </div>
  <div v-show="!isCollapsed" class="methods">
    <sidebar-method
      v-for="method of namespace.methods"
      :key="method.name"
      :category-id="categoryId"
      :namespace="namespace.name"
      :method="method"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SidebarMethod from '@/components/AppSidebar/SidebarMethod.vue';

import ChevronDownIcon from '@/icons/ChevronDown.vue';

import { useCollapsible } from '@/hooks/collapsible';

export default defineComponent({
  components: {
    ChevronDownIcon,
    SidebarMethod,
  },
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    namespace: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isCollapsed, toggleCollapse } = useCollapsible(true, props.categoryId);

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

.namespace {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  font-size: $font-size;
  padding: 12px 16px;
}

.namespace__chevron {
  opacity: 0;
  width: $font-size;
  height: $font-size;
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.namespace__chevron--collapsed {
  transform: rotate(90deg);
}

.namespace:hover .namespace__chevron {
  opacity: 1;
  transform: rotate(0deg);
}

.methods {
  background: $color-secondary;
  padding: 12px 0;
}
</style>
