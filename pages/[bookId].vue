<script setup lang="ts">
const route = useRoute()
const book = useBook(route.params.bookId as string)
</script>

<template>
  <BookView v-if="book" v-bind="book" />
</template>
