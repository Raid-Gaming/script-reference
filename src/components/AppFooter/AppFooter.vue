<template>
  <footer class="footer">
    <span v-html="$t('footer.copyright')" />
    <span v-html="$t('footer.author')" />
  </footer>
</template>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 32px;
  border-top: 1px solid $color-border;
  color: $color-content;
}
</style>
