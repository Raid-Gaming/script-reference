import { ref, Ref } from 'vue';

interface ICollapsibleHook {
  isCollapsed: Ref<boolean>;
  setCollapsed: (value: boolean) => void;
  toggleCollapse: () => void;
}

export function useCollapsible(defaultValue = false): ICollapsibleHook {
  const isCollapsed = ref(defaultValue);

  function setCollapsed(value: boolean): void {
    isCollapsed.value = value;
  }

  function toggleCollapse(): void {
    isCollapsed.value = !isCollapsed.value;
  }

  return {
    isCollapsed,
    setCollapsed,
    toggleCollapse,
  };
}
