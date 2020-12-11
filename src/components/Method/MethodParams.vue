<template>
  <div class="method-params method-params--desktop">
    <div class="method-params__row method-params__header">
      <span>{{ $t('method.params.name') }}</span>
      <span>{{ $t('method.params.type') }}</span>
      <span>{{ $t('method.params.description') }}</span>
      <span>{{ $t('method.params.optional') }}</span>
    </div>
    <div class="method-params__row" v-for="param of params" :key="param.name">
      <span>&lt;{{ param.name }}&gt;</span>
      <span>{{ param.type }}</span>
      <span>
        <p v-for="line of param.description" :key="line" v-html="line" />
      </span>
      <span>{{ getOptionalTranslation(param.optional) }}</span>
    </div>
  </div>
  <div class="method-params method-params--mobile">
    <div class="method-params__row" v-for="param of params" :key="param.name">
      <div class="method-params__meta">
        <span class="method-params__name">&lt;{{ param.name }}&gt;</span>
        <span class="method-params__type">{{ param.type }}</span>
        <span v-if="param.optional" class="method-params__optional">({{ $t('method.params.optional') }})</span>
      </div>
      <div class="method-params__description">
        <p v-for="line of param.description" :key="line" v-html="line" />
      </div>
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

    function getOptionalTranslation(isOptional: boolean) {
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
  min-width: fit-content;

  &:nth-child(odd) {
    background: $color-table-row-alt;
  }
}

.method-params__row.method-params__header {
  background: $color-table-header;
}

.method-params__row > span {
  padding: 16px;
  width: 15%;
  min-width: 150px;

  &:nth-child(3) {
    width: 55%;
  }
}

.method-params__row p {
  margin: 8px 0;
  color: $color-fg;

  &:first-child {
    margin-top: 0;
  }
}

.method-params--mobile {
  display: none;
}

@media screen and (max-width: 767px) {
  .method-params--desktop {
    display: none;
  }

  .method-params--mobile {
    display: flex;
  }

  .method-params__meta {
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: fit-content;
    padding: 16px;

    & > span:not(:last-child) {
      padding-bottom: 8px;
    }
  }

  .method-params__name {
    //
  }

  .method-params__type {
    color: $color-content;
  }

  .method-params__optional {
    color: $color-content;
  }

  .method-params__description {
    padding: 16px;
    width: 60%;
  }
}
</style>
