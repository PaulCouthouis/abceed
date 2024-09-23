<script setup lang="ts">
const route = useRoute()
const book = useBook(route.params.bookId as string)
</script>

<template>
  <BookView
    v-if="book"
    :author="book.author"
    :cover="book.cover"
    :name="book.name"
    :publisher="book.publisher"
  />
</template>
