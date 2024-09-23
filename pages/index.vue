<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { data: bookcase } = useBookcase()
</script>

<template>
  <MyBookcase v-if="bookcase" :shelf="bookcase.shelf" />
</template>
