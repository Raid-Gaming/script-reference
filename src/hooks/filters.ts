import { useLocalStorage } from '@vueuse/core';

export interface IFilters {
  singleplayer: boolean;
  multiplayer: boolean;
}

function getDefaultFilters() {
  return {
    singleplayer: true,
    multiplayer: true,
  } as IFilters;
}

const filters = useLocalStorage('filters', getDefaultFilters());

export function useFilters() {
  function toggleMP() {
    filters.value.multiplayer = !filters.value.multiplayer;
  }

  function toggleSP() {
    filters.value.singleplayer = !filters.value.singleplayer;
  }

  return {
    filters,
    toggleMP,
    toggleSP,
  };
}
