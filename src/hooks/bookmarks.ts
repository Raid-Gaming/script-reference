import { useLocalStorage } from '@vueuse/core';

import { readonly } from 'vue';

import { objectPropertiesAreEqual } from '@/utilities/objects';

export type Bookmark = {
  category: string;
  namespace: string;
  method: string;
};

const bookmarks = useLocalStorage<Bookmark[]>('bookmarks', []);

export function useBookmarks() {
  function add(category: string, namespace: string, method: string) {
    const bookmark = {
      category,
      namespace,
      method,
    };

    if (!bookmarks.value.some((e) => objectPropertiesAreEqual(bookmark, e))) {
      bookmarks.value.push(bookmark);
    }
  }

  function remove(bookmark: Bookmark) {
    bookmarks.value = bookmarks.value.filter((e) => !objectPropertiesAreEqual(bookmark, e));
  }

  return {
    bookmarks: readonly(bookmarks.value),
    add,
    remove,
  };
}
