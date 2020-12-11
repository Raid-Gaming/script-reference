<template>
  <header class="header">
    <div class="header__filters">
      <r-button :color="buttonColorSP" @click="toggleSP">
        {{ $t('filters.singleplayer') }}
      </r-button>
      <r-button :color="buttonColorMP" @click="toggleMP">
        {{ $t('filters.multiplayer') }}
      </r-button>
    </div>
    <search />
    <r-button :title="$t('header.actions.toggleTheme')" color="primary" fab rounded flat @click="toggleTheme">
      <weather-night-icon v-if="isDarkModeEnabled" />
      <weather-sunny-icon v-else />
    </r-button>
    <a href="https://raid-gaming.net" :title="$t('global.home')" class="header__home">
      {{ $t('global.home') }}
      <arrow-right-icon />
    </a>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import Search from '@/components/Search/Search.vue';

import ArrowRightIcon from '@/icons/ArrowRight.vue';
import WeatherNightIcon from '@/icons/WeatherNight.vue';
import WeatherSunnyIcon from '@/icons/WeatherSunny.vue';

import { useFilters } from '@/hooks/filters';
import { useTheme } from '@/hooks/theme';

function getButtonColor(isActive: boolean) {
  return isActive ? 'primary' : 'secondary';
}

export default defineComponent({
  components: {
    Search,
    ArrowRightIcon,
    WeatherNightIcon,
    WeatherSunnyIcon,
  },
  setup() {
    const { isDarkModeEnabled, toggleTheme } = useTheme();
    const { filters, toggleMP, toggleSP } = useFilters();

    const buttonColorMP = computed(() => getButtonColor(filters.value.multiplayer));
    const buttonColorSP = computed(() => getButtonColor(filters.value.singleplayer));

    return {
      isDarkModeEnabled,
      toggleTheme,
      filters,
      toggleMP,
      toggleSP,
      buttonColorMP,
      buttonColorSP,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';
@import '@/styles/search.scss';

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: $color-bg;
  border-bottom: 1px solid $color-border;
  height: 48px;
  padding: 0 3px;
  grid-area: header;
  user-select: none;
  z-index: 10;

  & > *:not(:last-child) {
    margin-right: 12px;
  }

  a {
    padding: 0 12px;
    text-decoration: none;
  }
}

.header__filters {
  margin-left: auto;
  display: flex;
  flex-direction: row;

  button {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: calc(#{$search-height} / 2);
      border-bottom-left-radius: calc(#{$search-height} / 2);
    }

    &:last-child {
      border-top-right-radius: calc(#{$search-height} / 2);
      border-bottom-right-radius: calc(#{$search-height} / 2);
    }
  }
}

.header__home {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  svg {
    margin-left: 4px;
    width: 14px;
    height: 14px;
  }
}

@media screen and (max-width: 1023px) {
  .header {
    display: none;
  }
}
</style>
