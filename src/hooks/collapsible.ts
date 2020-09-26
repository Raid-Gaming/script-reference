import { onBeforeUnmount, onMounted, ref, Ref } from 'vue';

import eventBus, { events } from '@/eventBus';

function collapseAll(key?: string): void {
  eventBus.emit(events.COLLAPSE_ALL, key);
}

function expandAll(key?: string): void {
  eventBus.emit(events.EXPAND_ALL, key);
}
interface ICollapsibleHook {
  collapseAll: (key?: string) => void;
  expandAll: (key?: string) => void;
  isCollapsed: Ref<boolean>;
  setCollapsed: (value: boolean) => void;
  toggleCollapse: () => void;
}

export function useCollapsible(defaultValue = false, key?: string): ICollapsibleHook {
  const isCollapsed = ref(defaultValue);

  function setCollapsed(value: boolean): void {
    isCollapsed.value = value;
  }

  function toggleCollapse(): void {
    isCollapsed.value = !isCollapsed.value;
  }

  function collapse(eventKey?: string): void {
    if (eventKey === key) {
      setCollapsed(true);
    }
  }

  function expand(eventKey?: string): void {
    if (eventKey === key) {
      setCollapsed(false);
    }
  }

  onMounted(() => {
    eventBus.on(events.COLLAPSE_ALL, collapse);
    eventBus.on(events.EXPAND_ALL, expand);
  });

  onBeforeUnmount(() => {
    eventBus.off(events.COLLAPSE_ALL, collapse);
    eventBus.off(events.EXPAND_ALL, expand);
  });

  return {
    collapseAll,
    expandAll,
    isCollapsed,
    setCollapsed,
    toggleCollapse,
  };
}
