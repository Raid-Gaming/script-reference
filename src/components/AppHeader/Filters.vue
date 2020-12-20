<template>
  <div class="filters">
    <r-button :color="buttonColorSP" @click="toggleSP">
      {{ $t('filters.singleplayer') }}
    </r-button>
    <r-button :color="buttonColorMP" @click="toggleMP">
      {{ $t('filters.multiplayer') }}
    </r-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useFilters } from '@/hooks/filters';

function getButtonColor(isActive: boolean) {
  return isActive ? 'primary' : 'secondary';
}

export default defineComponent({
  setup() {
    const { filters, toggleMP, toggleSP } = useFilters();

    const buttonColorMP = computed(() => getButtonColor(filters.value.multiplayer));
    const buttonColorSP = computed(() => getButtonColor(filters.value.singleplayer));

    return {
      filters,
      toggleMP,
      toggleSP,
      buttonColorMP,
      buttonColorSP,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';
@import '@/styles/search.scss';

.filters {
  margin-left: auto;
  display: flex;
  flex-direction: row;

  button {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: calc(#{$search-height} / 2);
      border-bottom-left-radius: calc(#{$search-height} / 2);
    }

    &:last-child {
      border-top-right-radius: calc(#{$search-height} / 2);
      border-bottom-right-radius: calc(#{$search-height} / 2);
    }
  }
}
</style>
