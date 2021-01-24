<template>
  <div class="bookmark-add">help</div>
</template>

<script>
import { defineComponent } from 'vue';

import { useBookmarks } from '@/hooks/bookmarks';

export default defineComponent({
  setup() {
    const { add, remove } = useBookmarks();
  },
});
</script>

<style></style>
