<template>
  <div class="bookmark-sidebar">
    <h3>Bookmarks</h3>
    <div class="category" v-for="category of Object.keys(books)" :key="category">
      {{ category }}

      <div class="namespace" v-for="namespace of Object.keys(books[category])" :key="namespace">
        {{ namespace }}

        <div class="namespace" v-for="method in books[category][namespace]" :key="method">
          {{ method }}
        </div>
      </div>
    </div>
    <div class="add" @click="add('cod4', 'ai', 'aimAtPos')">Add bookmark</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

import { Bookmark, useBookmarks } from '@/hooks/bookmarks';
import { useCollapsible } from '@/hooks/collapsible';

type BookmarkTree = { [key: string]: { [key: string]: string[] } };

export default defineComponent({
  setup() {
    const { isCollapsed } = inject('bookmarkCollapsible', useCollapsible());
    const { bookmarks, add, remove } = useBookmarks();

    const books = bookmarks.reduce((acc: BookmarkTree, mark: Bookmark) => {
      const { category, namespace, method } = mark;
      if (!acc[category]) {
        acc[category] = {};
        acc[category][namespace] = [];
      }

      acc[category][namespace].push(method);
      return acc;
    }, {});

    return {
      bookmarks,
      add,
      remove,
      isCollapsed,
      books,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.bookmark-sidebar {
  grid-area: bookmarks;
  background-color: $color-bg;
  padding: 2rem;
  border-left: 1px solid $color-border;
}
</style>
