<template>
  <div class="page-method">
    <template v-if="isLoaded">
      <h1 class="page-method__name">
        <span>{{ method.name }}</span>
        <span v-if="method.sourceFile" class="page-method__source-file">({{ method.sourceFile }})</span>
        <span v-if="method.engine" class="page-method__engine">{{ method.engine }}</span>
        <span v-if="method.deprecated" class="page-method__deprecated">({{ $t('method.deprecated') }})</span>
      </h1>
      <method-usage class="page-method__usage" :content="method.usage" />

      <r-section :title="$t('method.description')">
        <p v-for="line of method.description" :key="line" v-html="line" />
      </r-section>

      <r-section v-if="method.params" :title="$t('method.params')">
        <method-params :params="method.params" />
      </r-section>

      <r-section v-if="method.return" :title="$t('method.returnType')">
        <p>{{ method.return }}</p>
      </r-section>

      <r-section v-if="method.example" :title="$t('method.example')">
        <method-example :content="method.example" />
      </r-section>
    </template>

    <spinner :visible="!isLoaded" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import MethodExample from '@/components/Method/MethodExample.vue';
import MethodParams from '@/components/Method/MethodParams.vue';
import MethodUsage from '@/components/Method/MethodUsage.vue';
import Spinner from '@/components/Spinner/Spinner.vue';

import { IApiMethod } from '@/interfaces/iApiMethod';

import { getApiMethod } from '@/api';

export default defineComponent({
  components: {
    MethodExample,
    MethodParams,
    MethodUsage,
    Spinner,
  },
  setup() {
    const route = useRoute();

    const method = ref<IApiMethod>();

    const isLoaded = computed(() => !!method.value);

    async function fetchData() {
      const { params } = route;
      method.value = undefined;
      method.value = await getApiMethod(params.category as string, params.namespace as string, params.method as string);
    }

    watch(() => route.params, fetchData, { immediate: true });

    return {
      isLoaded,
      method,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.page-method {
  padding: 32px;
}

.page-method__name {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  font-weight: normal;
  margin: 0 0 32px 0;
  gap: 12px;
  white-space: nowrap;
}

.page-method__name > span {
  &:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.page-method__engine {
  background: $color-primary;
  color: $color-primary-contrast;
  border-radius: 4px;
  font-size: $font-size;
  padding: 4px;
}

.page-method__source-file {
  color: $color-content;
  font-size: $font-size;
}

.page-method__deprecated {
  color: $color-danger;
  font-size: $font-size;
}

.page-method__usage {
  margin-bottom: 24px;
}

@media screen and (max-width: 767px) {
  .page-method__name {
    font-size: 20px;
  }

  .page-method__engine {
    font-size: $font-size-sm;
  }
}
</style>
