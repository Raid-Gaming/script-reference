<template>
  <div id="app" :class="themeId">
    <template v-if="isLoaded">
      <app-header />
      <app-header-mobile />
      <app-sidebar />
      <main class="app__main">
        <router-view class="app__route" />
        <app-footer />
      </main>
    </template>
    <spinner :visible="!isLoaded" full-page />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, provide } from 'vue';

import AppFooter from '@/components/AppFooter/AppFooter.vue';
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppHeaderMobile from '@/components/AppHeader/AppHeaderMobile.vue';
import AppSidebar from '@/components/AppSidebar/AppSidebar.vue';
import Spinner from '@/components/Spinner/Spinner.vue';

import { useCollapsible } from '@/hooks/collapsible';
import { useMethods } from '@/hooks/methods';
import { useTheme } from '@/hooks/theme';

export default defineComponent({
  components: {
    AppFooter,
    AppHeader,
    AppHeaderMobile,
    AppSidebar,
    Spinner,
  },
  setup() {
    const searchCollapsible = useCollapsible(true, 'searchCollapsible');
    const sidebarCollapsible = useCollapsible(true, 'sidebarCollapsible');
    const { fetchIndex, isLoaded } = useMethods();
    const { theme } = useTheme();

    provide('searchCollapsible', searchCollapsible);
    provide('sidebarCollapsible', sidebarCollapsible);

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
  height: 10px;
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

.app__main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
}

.app__route {
  flex: 1;
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

@media screen and (max-width: 1023px) {
  #app {
    grid-template-areas:
      'header header'
      'main main';
  }
}
</style>
