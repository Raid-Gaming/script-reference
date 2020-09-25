import { computed, ComputedRef, Ref, ref } from 'vue';

import { IApiCategory } from '@/interfaces/iApiCategory';
import { IApiIndexMethod } from '@/interfaces/iApiIndexMethod';
import { IApiIndexNamespace } from '@/interfaces/iApiIndexNamespace';

import { getApiIndex } from '@/api';
import { IFilters, useFilters } from '@/hooks/filters';

interface IMethodsHook {
  api: Ref<IApiCategory[] | undefined>;
  fetchIndex: () => Promise<void>;
  filteredApi: ComputedRef<IApiCategory[] | undefined>;
  isLoaded: ComputedRef<boolean>;
}

const api = ref<IApiCategory[]>();

function isMethodInFilters(filters: IFilters, engine?: 'SP' | 'MP'): boolean {
  return !engine || (engine === 'SP' && filters.singleplayer) || (engine === 'MP' && filters.multiplayer);
}

function filterMethods(filters: IFilters, methods: IApiIndexMethod[]): IApiIndexMethod[] {
  return methods.filter(({ engine }) => isMethodInFilters(filters, engine));
}

function filterNamespaces(filters: IFilters, namespaces: IApiIndexNamespace[]): IApiIndexNamespace[] {
  return namespaces
    .map(({ methods, ...namespace }) => ({
      ...namespace,
      methods: filterMethods(filters, methods),
    }))
    .filter(({ methods }) => methods.length > 0);
}

export function useMethods(): IMethodsHook {
  const { filters } = useFilters();

  async function fetchIndex(): Promise<void> {
    api.value = await getApiIndex();
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
    /*
    return {
      ...api.value,
      namespaces: api.value.namespaces.map(({ methods, ...namespace }) => ({
        ...namespace,
        methods: methods.filter(() => true),
      })),
    };
    */
  });

  return {
    api,
    fetchIndex,
    filteredApi,
    isLoaded,
  };
}
