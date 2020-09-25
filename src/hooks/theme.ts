import { useLocalStorage, usePreferredDark } from '@vueuse/core';
import { computed, ComputedRef, Ref } from 'vue';

interface IThemeHook {
  isDarkModeEnabled: ComputedRef<boolean>;
  theme: Ref<string>;
  toggleTheme: () => void;
}

const isBrowserDarkMode = usePreferredDark();
const defaultValue = isBrowserDarkMode.value ? 'dark' : 'light';
const theme = useLocalStorage('theme', defaultValue);

export function useTheme(): IThemeHook {
  const isDarkModeEnabled = computed(() => theme.value === 'dark');

  function toggleTheme(): void {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  return {
    isDarkModeEnabled,
    theme,
    toggleTheme,
  };
}
