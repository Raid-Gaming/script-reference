<template>
  <div id="app" :class="themeId">
    <template v-if="isLoaded">
      <app-header />
      <app-sidebar />
      <router-view />
    </template>
    <spinner :visible="!isLoaded" full-page />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue';

import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar/AppSidebar.vue';
import Spinner from '@/components/Spinner/Spinner.vue';

import { useMethods } from '@/hooks/methods';
import { useTheme } from '@/hooks/theme';

export default defineComponent({
  components: {
    AppHeader,
    AppSidebar,
    Spinner,
  },
  setup() {
    const { fetchIndex, isLoaded } = useMethods();
    const { theme } = useTheme();

    const themeId = computed(() => `theme-${theme.value}`);

    onBeforeMount(() => {
      fetchIndex();
    });

    return { isLoaded, themeId };
  },
});
</script>

<style lang="scss">
@import '@/styles/themes/dark.scss';
@import '@/styles/themes/light.scss';

@import '@/styles/globals.scss';

$content-width: minmax(0, 1fr);

html,
body,
#root {
  height: 100%;
}

* {
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: $color-scrollbar-thumb $color-scrollbar;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: $color-scrollbar;
}

::-webkit-scrollbar-thumb {
  background: $color-scrollbar-thumb;
}

#app {
  font-family: $font;
  font-size: $font-size;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-fg;
  background: $color-bg;
  height: 100%;

  display: grid;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
  grid-template-columns: 360px $content-width;
  grid-template-rows: min-content $content-width;
}

a {
  text-decoration: underline;
  color: $color-fg;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: $color-primary;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
