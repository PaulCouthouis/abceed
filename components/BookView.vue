<script setup lang="ts">
import type { Book } from '~/src/domain/entities/Book'
import BookInformation from './BookInformation.vue'
import BookActions from './BookActions.vue'

const props = defineProps<{
  author: Book['author']
  cover: Book['cover']
  id: Book['id']
  name: Book['name']
  publisher: Book['publisher']
}>()
</script>

<template>
  <div class="full">
    <NuxtLink class="nav" href="/">書籍詳細</NuxtLink>
    <section class="section">
      <BookInformation v-bind="props" />
      <BookActions />
    </section>
  </div>
</template>

<style scoped>
.full {
  min-height: 100vh;
  background: #eee;
}

.nav {
  background: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 25px 25px 0;
}

.nav::before {
  content: '<';
  display: inline-block;
  color: #999;
  line-height: 17px;
}

.section {
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (prefers-color-scheme: dark) {
  .full {
    background: #444;
  }

  .nav {
    background: #333;
    color: white;
  }

  .nav::before {
    color: white;
  }

  .section {
    background: #444;
  }
}

@media (min-width: 768px) {
  .nav {
    padding-bottom: 25px;
  }

  .section {
    flex-direction: row;
    padding: 25px;
  }
}
</style>
