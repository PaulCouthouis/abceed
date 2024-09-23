<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RetrieveBookcase } from '@/domain/usecases/RetrieveBookcase'
import { fetchBookcaseFromHttp } from '@/http/fetchBookcaseFromHttp'

const retrieveBookcase = new RetrieveBookcase(fetchBookcaseFromHttp)

const { data: bookcase } = useAsyncData('bookcase', () =>
  retrieveBookcase.handle()
)
</script>

<template>
  <MyBookcase v-if="bookcase" :shelf="bookcase.shelf" />
</template>
