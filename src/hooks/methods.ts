import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import { IApiCategory } from '@/interfaces/iApiCategory';
import { IApiIndexMethod } from '@/interfaces/iApiIndexMethod';
import { IApiIndexNamespace } from '@/interfaces/iApiIndexNamespace';

import { getApiIndex } from '@/api';
import { IFilters, useFilters } from '@/hooks/filters';

const api = ref<IApiCategory[]>();

function isMethodInFilters(filters: IFilters, engine?: 'SP' | 'MP') {
  return !engine || (engine === 'SP' && filters.singleplayer) || (engine === 'MP' && filters.multiplayer);
}

function filterMethods(filters: IFilters, methods: IApiIndexMethod[]) {
  return methods.filter(({ engine }) => isMethodInFilters(filters, engine));
}

function filterNamespaces(filters: IFilters, namespaces: IApiIndexNamespace[]) {
  return namespaces
    .map(({ methods, ...namespace }) => ({
      ...namespace,
      methods: filterMethods(filters, methods),
    }))
    .filter(({ methods }) => methods.length > 0);
}

export function useMethods() {
  const router = useRouter();
  const { filters } = useFilters();

  async function fetchIndex() {
    api.value = await getApiIndex();
  }

  function navigateToMethod(category: string, namespace: string, method: string) {
    router.push({
      name: 'Method',
      params: {
        category,
        namespace,
        method,
      },
    });
  }

  const isLoaded = computed(() => !!api.value);

  const filteredApi = computed(() => {
    if (!api.value) {
      return undefined;
    }

    return api.value.map(({ namespaces, ...category }) => ({
      ...category,
      namespaces: filterNamespaces(filters.value, namespaces),
    }));
  });

  return {
    api,
    fetchIndex,
    filteredApi,
    isLoaded,
    navigateToMethod,
  };
}
