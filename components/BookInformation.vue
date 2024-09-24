<script setup lang="ts">
import type { Book } from '~/src/domain/entities/Book'
import { useMyBooksStore } from '../src/stores/useMyBooksStore'

const props = defineProps<{
  author: Book['author']
  cover: Book['cover']
  id: Book['id']
  name: Book['name']
  publisher: Book['publisher']
}>()

const store = useMyBooksStore()
const isInCollection = store.has(props.id)

const handleClick = () => {
  store.toggle(props.id)
}
</script>

<template>
  <main class="main">
    <div><img class="cover" :src="props.cover" alt="" /></div>

    <div class="right">
      <h2>{{ props.name }}</h2>
      <div class="author-and-publisher">
        <span class="gray-bg">著者</span>
        <span>{{ props.author }}</span>
        <span class="gray-bg">出版社</span>
        <span>{{ props.publisher }}</span>
      </div>
      <div class="action">
        <button class="button plain" @click="handleClick">
          {{ isInCollection ? 'MyBooks削除' : 'MyBooks追加' }}
        </button>
        <button class="button fancy">読み放題中</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background: white;
  display: flex;
  gap: 10px;
  padding: 20px;
}

.cover {
  height: auto;
  min-width: 90px;
  max-width: 90px;
}

.right {
  display: grid;
  gap: 15px;
}

.author-and-publisher {
  color: #666;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 5px;
  line-height: 20px;
}

.gray-bg {
  background: ghostwhite;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
}

.action {
  display: flex;
  gap: 10px;
}

.button {
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  height: 30px;
  width: 50%;
}

.plain {
  border: 1px solid #ff223c;
  color: #ff223c;
}

.fancy {
  background: #ff223c;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .main {
    background: #333;
    color: white;
  }

  .author-and-publisher {
    color: #ddd;
  }

  .gray-bg {
    background: #555;
  }

  .plain {
    border: 1px solid #fc6767;
    color: #fc6767;
  }

  .fancy {
    background: #fc6767;
    color: #333;
  }
}

@media (min-width: 768px) {
  .main {
    width: 450px;
  }
}
</style>
