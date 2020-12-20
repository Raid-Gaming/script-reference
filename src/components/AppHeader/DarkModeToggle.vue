<template>
  <r-button
    :title="$t('header.actions.toggleTheme')"
    color="primary"
    fab
    rounded
    flat
    @click="toggleTheme"
    class="dark-mode-toggle"
  >
    <weather-night-icon v-if="isDarkModeEnabled" />
    <weather-sunny-icon v-else />
  </r-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import WeatherNightIcon from '@/icons/WeatherNight.vue';
import WeatherSunnyIcon from '@/icons/WeatherSunny.vue';

import { useTheme } from '@/hooks/theme';

export default defineComponent({
  components: {
    WeatherNightIcon,
    WeatherSunnyIcon,
  },
  setup() {
    const { isDarkModeEnabled, toggleTheme } = useTheme();

    return {
      isDarkModeEnabled,
      toggleTheme,
    };
  },
});
</script>
