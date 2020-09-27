<template>
  <div class="search-results__wrapper">
    <div class="search-results">
      <r-button
        v-for="result of results"
        :key="getKey(result)"
        class="search-results__row"
        flat
        @click="goToMethod(result)"
      >
        <span class="search-results__name">{{ result.name }}</span>
        <div class="search-results__source">
          <span class="search-results__category">{{ result.category }}</span>
          <span class="search-results__namespace">{{ result.sourceFile || result.namespace }}</span>
        </div>
      </r-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useMethods } from '@/hooks/methods';
import { ISearchResult } from '@/hooks/search';

export default defineComponent({
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  emits: ['clear'],
  setup(_, { emit }) {
    const { navigateToMethod } = useMethods();

    function getKey(value: ISearchResult): string {
      return `${value.category}-${value.namespace}-${value.name}`;
    }

    function goToMethod(result: ISearchResult): void {
      emit('clear');
      navigateToMethod(result.categoryId, result.namespace, result.name);
    }

    return {
      getKey,
      goToMethod,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.search-results__wrapper {
  position: absolute;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
}

.search-results__wrapper::after,
.search-results__wrapper::before {
  content: '';
  position: absolute;
  bottom: calc(100%);
  left: 50%;
  transform: translateX(-50%);
  border-style: solid;
  border-width: 16px;
}

.search-results__wrapper::after {
  border-color: transparent transparent $color-search-bg transparent;
  margin-bottom: -1px;
}

.search-results__wrapper::before {
  border-color: transparent transparent $color-search-border transparent;
}

.search-results {
  width: 420px;
  max-height: 500px;
  overflow-y: auto;
  background: $color-search-bg;
  border: 1px solid $color-search-border;
  border-radius: 4px;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.search-results__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  height: auto;
  border-radius: 0;

  &:not(:last-child) {
    border-bottom: 1px solid $color-search-border;
  }
}

.search-results__name {
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 12px;
}

.search-results__source {
  flex-shrink: 0;
}

.search-results__source span {
  border-radius: 4px;
  padding: 6px 8px;

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.search-results__category {
  background: $color-primary;
  color: $color-primary-contrast;
}

.search-results__namespace {
  background: $color-search-border;
}
</style>
