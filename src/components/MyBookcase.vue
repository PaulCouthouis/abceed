<script setup lang="ts">
import type { Bookcase } from '@/domain/entities/Bookcase'

const props = defineProps<{
  shelf: Bookcase['shelf']
}>()
</script>

<template>
  <ul class="bookcase">
    <li v-for="s in props.shelf" :key="s.category" class="shelf">
      <h2 class="category">{{ s.category }}</h2>
      <ul class="cover-list">
        <li v-for="b in s.books" :key="b.id">
          <a :href="'/' + b.id" :title="b.name">
            <img class="cover" :src="b.cover" :alt="b.name" />
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.bookcase {
  display: grid;
  gap: 75px;
}

.shelf {
  display: grid;
  gap: 45px;
}

.category {
  font-size: 40px;
  font-weight: 700;
}

.cover-list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.cover {
  height: 360px;
  width: auto;
}
</style>
