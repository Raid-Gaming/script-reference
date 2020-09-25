<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="spinner__wrapper"
      :class="{
        'spinner__wrapper--full-page': fullPage,
      }"
    >
      <div class="spinner" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    fullPage: {
      type: Boolean,
      required: false,
    },
    visible: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.spinner__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: $color-bg;

  &--full-page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: load 1.8s infinite ease-in-out;
}

.spinner {
  color: $color-primary;
  position: relative;
  animation-delay: -0.16s;
}

.spinner:before,
.spinner:after {
  content: '';
  position: absolute;
  top: 0;
}

.spinner:before {
  left: -35px;
  animation-delay: -0.32s;
}

.spinner:after {
  left: 35px;
}

@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 25px 0 -13px;
  }
  40% {
    box-shadow: 0 25px 0 0;
  }
}
</style>
