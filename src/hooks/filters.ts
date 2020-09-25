import { useLocalStorage } from '@vueuse/core';
import { Ref } from 'vue';

export interface IFilters {
  singleplayer: boolean;
  multiplayer: boolean;
}

interface IFiltersHook {
  filters: Ref<IFilters>;
  toggleMP: () => void;
  toggleSP: () => void;
}

function getDefaultFilters(): IFilters {
  return {
    singleplayer: true,
    multiplayer: true,
  };
}

const filters = useLocalStorage<IFilters>('filters', getDefaultFilters());

export function useFilters(): IFiltersHook {
  function toggleMP(): void {
    filters.value.multiplayer = !filters.value.multiplayer;
  }

  function toggleSP(): void {
    filters.value.singleplayer = !filters.value.singleplayer;
  }

  return {
    filters,
    toggleMP,
    toggleSP,
  };
}
