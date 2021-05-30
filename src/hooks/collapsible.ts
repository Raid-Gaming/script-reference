import { onBeforeUnmount, onMounted, ref } from 'vue';

import eventBus, { events } from '@/eventBus';

function collapseAll(key?: string) {
  eventBus.emit(events.COLLAPSE_ALL, key);
}

function expandAll(key?: string) {
  eventBus.emit(events.EXPAND_ALL, key);
}

export function useCollapsible(defaultValue = false, key?: string) {
  const isCollapsed = ref(defaultValue);

  function setCollapsed(value: boolean) {
    isCollapsed.value = value;
  }

  function toggleCollapse() {
    isCollapsed.value = !isCollapsed.value;
  }

  function collapse(eventKey?: string) {
    if (eventKey === key) {
      setCollapsed(true);
    }
  }

  function expand(eventKey?: string) {
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
    collapse,
    collapseAll,
    expand,
    expandAll,
    isCollapsed,
    setCollapsed,
    toggleCollapse,
  };
}
