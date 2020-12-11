import { useLocalStorage, usePreferredDark } from '@vueuse/core';
import { computed } from 'vue';

const isBrowserDarkMode = usePreferredDark();
const defaultValue = isBrowserDarkMode.value ? 'dark' : 'light';
const theme = useLocalStorage('theme', defaultValue);

export function useTheme() {
  const isDarkModeEnabled = computed(() => theme.value === 'dark');

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  return {
    isDarkModeEnabled,
    theme,
    toggleTheme,
  };
}
