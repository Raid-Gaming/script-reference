<template>
  <button
    class="r-button"
    :type="type"
    :class="{
      [`r-button--${color}`]: true,
      'r-button--block': block,
      'r-button--flat': flat,
      'r-button--outline': outline,
      'r-button--rounded': rounded,
      'r-button--large': large,
      'r-button--small': small,
      'r-button--fab': fab,
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    block: {
      type: Boolean,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: 'secondary',
      validator: (color: string) => ['primary', 'secondary'].includes(color),
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    fab: {
      type: Boolean,
      required: false,
    },
    flat: {
      type: Boolean,
      required: false,
    },
    large: {
      type: Boolean,
      required: false,
    },
    outline: {
      type: Boolean,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    small: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'button',
      validator: (type: string) => ['button', 'menu', 'reset', 'submit'].includes(type),
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

$button-height-small: 24px;
$button-height: 32px;
$button-height-large: 48px;

.r-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: $button-height;
  padding: 0 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: $color-fg;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}

.r-button:hover,
.r-button:focus {
  &.r-button--primary {
    background: $color-primary-active;
  }
  &.r-button--secondary {
    background: $color-secondary-active;
  }

  &.r-button--flat.r-button--primary {
    background: $color-border;
  }
  &.r-button--flat.r-button--secondary {
    background: $color-border;
  }

  &.r-button--outline.r-button--primary {
    background: $color-primary-soft;
  }
  &.r-button--outline.r-button--secondary {
    background: $color-secondary-soft;
  }
}

.r-button--primary {
  background: $color-primary;
  color: $color-primary-contrast;
}
.r-button--secondary {
  background: $color-secondary;
  color: $color-secondary-contrast;
}

.r-button--small {
  height: $button-height-small;
  font-size: $font-size-sm;
}

.r-button--large {
  height: $button-height-large;
  font-size: $font-size-lg;
}

.r-button--rounded {
  border-radius: calc(#{$button-height} / 2);
}
.r-button--small.r-button--rounded {
  border-radius: calc(#{$button-height-small} / 2);
}
.r-button--large.r-button--rounded {
  border-radius: calc(#{$button-height-large} / 2);
}

.r-button--outline {
  border: 2px solid;
  background: transparent;
  color: $color-fg;
}
.r-button--outline.r-button--primary {
  border-color: $color-primary;
}
.r-button--outline.r-button--secondary {
  border-color: $color-secondary;
}

.r-button--flat {
  background: transparent;
}
.r-button--flat.r-button--primary {
  color: $color-primary;
}
.r-button--flat.r-button--secondary {
  color: $color-fg;
}

.r-button::v-deep(svg) {
  width: $font-size;
  height: $font-size;
}
.r-button--small::v-deep(svg) {
  width: $font-size-sm;
  height: $font-size-sm;
}
.r-button--large::v-deep(svg) {
  width: $font-size-lg;
  height: $font-size-lg;
}

.r-button--fab {
  width: $button-height;
  padding: 0;
}
.r-button--small.r-button--fab {
  width: $button-height-small;
}
.r-button--large.r-button--fab {
  width: $button-height-large;
}

.r-button--block {
  width: 100%;
}
</style>
