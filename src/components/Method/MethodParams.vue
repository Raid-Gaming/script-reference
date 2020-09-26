<template>
  <div class="method-params">
    <div class="method-params__row method-params__header">
      <span>{{ $t('method.params.name') }}</span>
      <span>{{ $t('method.params.type') }}</span>
      <span>{{ $t('method.params.description') }}</span>
      <span>{{ $t('method.params.optional') }}</span>
    </div>
    <div class="method-params__row" v-for="param of params" :key="param.name">
      <span>{{ param.name }}</span>
      <span>{{ param.type }}</span>
      <span>
        <p v-for="line of param.description" :key="line" v-html="line" />
      </span>
      <span>{{ getOptionalTranslation(param.name) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    params: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { t } = useI18n();

    function getOptionalTranslation(isOptional: boolean): string {
      return isOptional ? t('global.yes') : t('global.no');
    }

    return {
      getOptionalTranslation,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.method-params {
  display: flex;
  flex-direction: column;
  background: $color-table-row;
  border-radius: 4px;
  overflow-x: auto;
}

.method-params__row {
  display: flex;
  flex-direction: row;

  &:nth-child(odd) {
    background: $color-table-row-alt;
  }
}

.method-params__row.method-params__header {
  background: $color-table-header;
}

.method-params__row span {
  padding: 16px;
  width: 15%;
  min-width: 150px;

  &:nth-child(3) {
    width: 55%;
  }
}

.method-params__row span p {
  margin: 8px 0;
  color: $color-fg;

  &:first-child {
    margin-top: 0;
  }
}
</style>
