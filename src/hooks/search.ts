import { go as fuzzySearch } from 'fuzzysort';
import { computed, ComputedRef, Ref, ref } from 'vue';

import { IApiIndexMethod } from '@/interfaces/iApiIndexMethod';

import { useMethods } from '@/hooks/methods';

export interface ISearchResult extends IApiIndexMethod {
  category: string;
  categoryId: string;
  namespace: string;
}

interface ISearchHook {
  clear: () => void;
  results: ComputedRef<ISearchResult[]>;
  value: Ref<string>;
}

export function useSearch(): ISearchHook {
  const { filteredApi } = useMethods();

  const value = ref('');

  function clear(): void {
    value.value = '';
  }

  const searchValues = computed(() =>
    filteredApi.value?.flatMap((category) =>
      category.namespaces.flatMap((namespace) =>
        namespace.methods.map((method) => ({
          ...method,
          category: category.shortName,
          categoryId: category.id,
          namespace: namespace.name,
        })),
      ),
    ),
  );

  const results = computed(() => {
    if (value.value?.length < 2 || !searchValues.value) {
      return [];
    }

    return fuzzySearch(value.value, searchValues.value, {
      allowTypo: false,
      keys: ['sourceFile', 'name'],
    }).map(({ obj }) => obj);
  });

  return {
    clear,
    results,
    value,
  };
}
